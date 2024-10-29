import { decimal, doublePrecision, pgTable, serial, timestamp } from "drizzle-orm/pg-core";

const boxDewpoint = pgTable("box_dewpoint", {
  id: serial("id").primaryKey(),
  value: doublePrecision("value").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
});

export default boxDewpoint;
