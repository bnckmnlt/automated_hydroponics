import { decimal, doublePrecision, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

const boxPressure = pgTable("box_pressure", {
  id: serial("id").primaryKey(),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export default boxPressure;
