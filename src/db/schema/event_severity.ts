import { pgEnum } from "drizzle-orm/pg-core"

export const eventSeverity = pgEnum("event_severity", ["log", "error", "warning"])

export default eventSeverity
