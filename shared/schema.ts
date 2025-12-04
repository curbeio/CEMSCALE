import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
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

export const dashboardMetricsSchema = z.object({
  netVolume: z.number(),
  yesterdayVolume: z.number(),
  usdBalance: z.number(),
  payouts: z.number(),
  newCustomers: z.number(),
  volumeChange: z.number(),
  customerChange: z.number(),
});

export type DashboardMetrics = z.infer<typeof dashboardMetricsSchema>;

export const invoiceSchema = z.object({
  paid: z.number(),
  open: z.number(),
  pastDue: z.number(),
});

export type Invoice = z.infer<typeof invoiceSchema>;

export const transactionSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(["Processing", "Completed", "On Hold"]),
  amount: z.number(),
});

export type Transaction = z.infer<typeof transactionSchema>;
