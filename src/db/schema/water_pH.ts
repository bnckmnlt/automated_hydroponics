import { doublePrecision, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

const waterpH = pgTable("water_pH", {
  id: serial("id").primaryKey(),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export default waterpH;
