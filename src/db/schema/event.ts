import { text, timestamp } from "drizzle-orm/pg-core";
import { pgTable, serial } from "drizzle-orm/pg-core";
import eventSeverity from "./event_severity";

const event = pgTable("event", {
  id: serial("id").primaryKey(),
  severity: eventSeverity("severity").notNull().default("log"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
})

export type event = typeof event

export default event
