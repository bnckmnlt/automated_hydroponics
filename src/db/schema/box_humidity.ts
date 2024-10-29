import { decimal, doublePrecision, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

const boxHumidity = pgTable("box_humidity", {
  id: serial("id").primaryKey(),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export default boxHumidity;
