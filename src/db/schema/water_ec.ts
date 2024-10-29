import { doublePrecision, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

const waterEC = pgTable("water_EC", {
  id: serial("id").primaryKey(),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export default waterEC;
