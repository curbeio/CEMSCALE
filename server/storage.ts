import { type User, type InsertUser, type InsertConsent, type Consent, consents } from "@shared/schema";
import { db } from "./db";
import { eq, desc, gte, lte, and } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsent(consent: InsertConsent): Promise<Consent>;
  getConsentsByPhone(phone: string): Promise<Consent[]>;
  getAllConsents(startDate?: Date, endDate?: Date): Promise<Consent[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsent(consent: InsertConsent): Promise<Consent> {
    const [result] = await db.insert(consents).values(consent).returning();
    return result;
  }

  async getConsentsByPhone(phone: string): Promise<Consent[]> {
    return await db
      .select()
      .from(consents)
      .where(eq(consents.phoneE164, phone))
      .orderBy(desc(consents.timestampUtc));
  }

  async getAllConsents(startDate?: Date, endDate?: Date): Promise<Consent[]> {
    const conditions = [];
    if (startDate) {
      conditions.push(gte(consents.timestampUtc, startDate));
    }
    if (endDate) {
      conditions.push(lte(consents.timestampUtc, endDate));
    }

    if (conditions.length > 0) {
      return await db
        .select()
        .from(consents)
        .where(and(...conditions))
        .orderBy(desc(consents.timestampUtc));
    }

    return await db
      .select()
      .from(consents)
      .orderBy(desc(consents.timestampUtc));
  }
}

export const storage = new MemStorage();
