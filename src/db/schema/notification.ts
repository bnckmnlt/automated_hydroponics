import { pgTable, serial, timestamp } from "drizzle-orm/pg-core";

const notification = pgTable("", {
  id: serial("id").primaryKey(),
  
  createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
})
