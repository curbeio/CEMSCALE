import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const consents = pgTable("consents", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  phoneE164: text("phone_e164"),
  email: text("email"),
  name: text("name"),
  consentSms: boolean("consent_sms").notNull().default(false),
  consentEmail: boolean("consent_email").notNull().default(false),
  consentText: text("consent_text").notNull(),
  consentVersion: text("consent_version").notNull().default("sms-disclosure-v1"),
  pageUrl: text("page_url"),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  timestampUtc: timestamp("timestamp_utc", { withTimezone: true }).notNull().defaultNow(),
  source: text("source").notNull().default("web_form"),
  metadata: jsonb("metadata"),
});

export const insertConsentSchema = createInsertSchema(consents).omit({
  id: true,
  timestampUtc: true,
});

export type InsertConsent = z.infer<typeof insertConsentSchema>;
export type Consent = typeof consents.$inferSelect;

export const leadSubmitSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  consentSms: z.boolean(),
  consentEmail: z.boolean().default(true),
  pageUrl: z.string().optional(),
});

export type LeadSubmit = z.infer<typeof leadSubmitSchema>;
