import { decimal, doublePrecision, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

const boxTemperature = pgTable("box_temperature", {
  id: serial("id").primaryKey(),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export default boxTemperature;
