import { doublePrecision, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

const waterTDS = pgTable("water_tds", {
  id: serial("id").primaryKey(),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export default waterTDS;
