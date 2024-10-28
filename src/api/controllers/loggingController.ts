import db from "@/db"
import { event } from "@/db/schema";

export const createEvent = async (message: string) => {
  try {
    const _data = await db.insert(event).values({
      severity: "log",
      message: message,
    })

    return _data;
  } catch (error) {
    console.log(error);
  }
}
