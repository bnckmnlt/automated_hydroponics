import { doublePrecision, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

export const waterTemperature = pgTable("water_temperature", {
  id: serial("id").primaryKey(),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export default waterTemperature;
