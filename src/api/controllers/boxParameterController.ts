import db from "@/db";
import { boxDewpoint, boxHumidity, boxPressure, boxTemperature } from "@/db/schema";
import { Request, Response } from "express";

export const createTemperatureData = async (message: number) => {
  try {
    return await db.insert(boxTemperature).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding temperature:", error);
  }
}

export const createHumidityData = async (message: number) => {
  try {
    return await db.insert(boxHumidity).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding humidity:", error);
  }
}

export const createPressureData = async (message: number) => {
  try {
    return await db.insert(boxPressure).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding pressure:", error);
  }
}

export const createDewpointData = async (message: number) => {
  try {
    return await db.insert(boxDewpoint).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding dewpoint:", error);
  }
}

export const fetchBoxTemperature = async (req: Request, res: Response) => {
  try {
    const events = await db.query.boxTemperature.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching box temperature record: ${error.message}` });
  }
};

export const fetchBoxHumidity = async (req: Request, res: Response) => {
  try {
    const events = await db.query.boxHumidity.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching box humidity record: ${error.message}` });
  }
};

export const fetchBoxPressure = async (req: Request, res: Response) => {
  try {
    const events = await db.query.boxPressure.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching box pressure record: ${error.message}` });
  }
};

export const fetchBoxDewpoint = async (req: Request, res: Response) => {
  try {
    const events = await db.query.boxDewpoint.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching box dewpoint record: ${error.message}` });
  }
};
