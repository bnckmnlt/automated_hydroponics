import { pgEnum, text, timestamp } from "drizzle-orm/pg-core";
import { pgTable, serial } from "drizzle-orm/pg-core";

export const event_severity = pgEnum("event_severity", ["log", "error", "warning"])

const event = pgTable("event", {
  id: serial("id").primaryKey(),
  severity: event_severity("severity").notNull().default("log"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
})

export type event = typeof event

export default event
