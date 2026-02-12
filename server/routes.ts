import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { leadSubmitSchema } from "@shared/schema";
import { z } from "zod";

function normalizePhoneToE164(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.startsWith("+")) return phone.replace(/[^\d+]/g, "");
  return `+${digits}`;
}

const CONSENT_DISCLOSURE_TEXT =
  "By submitting this form, you agree to receive communications from CEMSCALE via SMS and email. Message and data rates may apply. Message frequency varies (up to 5 messages per month). Reply STOP to opt out, HELP for help. View our Privacy Policy and Terms & Conditions.";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/lead", async (req, res) => {
    try {
      const data = leadSubmitSchema.parse(req.body);

      if (data.phone && !data.consentSms) {
        return res.status(400).json({
          error: "SMS consent is required when providing a phone number.",
        });
      }

      const phoneE164 = data.phone ? normalizePhoneToE164(data.phone) : null;

      const consent = await storage.createConsent({
        phoneE164,
        email: data.email,
        name: data.name,
        consentSms: data.consentSms,
        consentEmail: data.consentEmail ?? true,
        consentText: CONSENT_DISCLOSURE_TEXT,
        consentVersion: "sms-disclosure-v1",
        pageUrl: data.pageUrl || null,
        ipAddress:
          (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
          req.socket.remoteAddress ||
          null,
        userAgent: req.headers["user-agent"] || null,
        source: "web_form",
        metadata: {
          company: data.company || null,
          message: data.message || null,
        },
      });

      res.json({ success: true, consentId: consent.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error("Lead submission error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/admin/consents", async (req, res) => {
    const adminToken = process.env.ADMIN_TOKEN;
    const authHeader = req.headers.authorization;

    if (!adminToken || authHeader !== `Bearer ${adminToken}`) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const phone = req.query.phone as string | undefined;
      if (phone) {
        const phoneE164 = normalizePhoneToE164(phone);
        const results = await storage.getConsentsByPhone(phoneE164);
        return res.json(results);
      }

      const startDate = req.query.start
        ? new Date(req.query.start as string)
        : undefined;
      const endDate = req.query.end
        ? new Date(req.query.end as string)
        : undefined;

      const results = await storage.getAllConsents(startDate, endDate);
      res.json(results);
    } catch (error) {
      console.error("Consent query error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/admin/consents/export.csv", async (req, res) => {
    const adminToken = process.env.ADMIN_TOKEN;
    const authHeader = req.headers.authorization;

    if (!adminToken || authHeader !== `Bearer ${adminToken}`) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const startDate = req.query.start
        ? new Date(req.query.start as string)
        : undefined;
      const endDate = req.query.end
        ? new Date(req.query.end as string)
        : undefined;

      const results = await storage.getAllConsents(startDate, endDate);

      const headers = [
        "id",
        "phone_e164",
        "email",
        "name",
        "consent_sms",
        "consent_email",
        "consent_text",
        "consent_version",
        "page_url",
        "ip_address",
        "user_agent",
        "timestamp_utc",
        "source",
      ];

      const csvRows = [headers.join(",")];
      for (const row of results) {
        csvRows.push(
          [
            row.id,
            row.phoneE164 || "",
            row.email || "",
            row.name || "",
            row.consentSms,
            row.consentEmail,
            `"${(row.consentText || "").replace(/"/g, '""')}"`,
            row.consentVersion,
            row.pageUrl || "",
            row.ipAddress || "",
            `"${(row.userAgent || "").replace(/"/g, '""')}"`,
            row.timestampUtc?.toISOString() || "",
            row.source,
          ].join(",")
        );
      }

      res.setHeader("Content-Type", "text/csv");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=consents_export.csv"
      );
      res.send(csvRows.join("\n"));
    } catch (error) {
      console.error("CSV export error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
