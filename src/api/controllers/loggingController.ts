import db from "@/db"
import { event } from "@/db/schema";
import { EventSeverity } from "../models/event";
import { Request, Response } from "express";

export const createEvent = async (message: string) => {
  try {
    const [severityRaw, ...messageParts] = message.split(":");
    const severity = severityRaw?.trim().toLowerCase() as EventSeverity || EventSeverity.log;
    const messageContent = messageParts.join(":").trim();

    return await db.insert(event).values({ severity: severity, message: messageContent });
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

export const fetchEvents = async (req: Request, res: Response) => {
  try {
    const events = await db.query.event.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching event log: ${error.message}` });
  }
};
