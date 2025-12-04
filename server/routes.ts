import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import type { DashboardMetrics, Invoice, Transaction } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/dashboard/metrics", (_req, res) => {
    const metrics: DashboardMetrics = {
      netVolume: 3528198.72 + Math.random() * 1000,
      yesterdayVolume: 2931556.34,
      usdBalance: 553257.51,
      payouts: 102633.07,
      newCustomers: 37,
      volumeChange: 32.8,
      customerChange: 32.1,
    };
    res.json(metrics);
  });

  app.get("/api/dashboard/invoices", (_req, res) => {
    const invoices: Invoice = {
      paid: 25000.00,
      open: 20000.00,
      pastDue: 1000.00,
    };
    res.json(invoices);
  });

  app.get("/api/dashboard/transactions", (_req, res) => {
    const transactions: Transaction[] = [
      { id: "#9125", name: "Hanako Yamada", status: "Processing", amount: 150.00 },
      { id: "#9124", name: "Jacques Muller", status: "Completed", amount: 200.00 },
      { id: "#9123", name: "John Appleseed", status: "On Hold", amount: 178.00 },
      { id: "#9122", name: "Jane Diaz", status: "Completed", amount: 200.00 },
      { id: "#9121", name: "Anna Nowak", status: "Completed", amount: 200.00 },
      { id: "#9120", name: "Wei Qing", status: "Completed", amount: 156.00 },
    ];
    res.json(transactions);
  });

  app.get("/api/dashboard/chart-data", (_req, res) => {
    const chartData = Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      value: Math.random() * 60 + 20,
      isRecent: i > 24,
    }));
    res.json(chartData);
  });

  return httpServer;
}
