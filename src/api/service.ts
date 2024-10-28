import db from "@/db"

export const SensorsService = {
  getUltrasonicRecords() {
    return db.query.event.findMany();
  },
}

export type SensorsService = typeof SensorsService
