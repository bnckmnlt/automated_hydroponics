import db from "@/db";
import { waterEC, waterLevel, waterpH, waterTDS, waterTemperature } from "@/db/schema";
import { Request, Response } from "express";

export const createWaterTemperatureData = async (message: number) => {
  try {
    return await db.insert(waterTemperature).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding water temperature record:", error);
  }
}

export const createWaterLevelData = async (message: number) => {
  try {
    return await db.insert(waterLevel).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding water level record:", error);
  }
}

export const createWaterpHData = async (message: number) => {
  try {
    return await db.insert(waterpH).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding water pH record:", error);
  }
}

export const createWaterECData = async (message: number) => {
  try {
    return await db.insert(waterEC).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding water ec record:", error);
  }
}

export const createWaterTDSData = async (message: number) => {
  try {
    return await db.insert(waterTDS).values({
      value: message,
    })
  } catch (error) {
    console.error("Error adding water tds record:", error);
  }
}

export const fetchWaterTemperature = async (req: Request, res: Response) => {
  try {
    const events = await db.query.waterTemperature.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching water temperature record: ${error.message}` });
  }
};

export const fetchWaterLevel = async (req: Request, res: Response) => {
  try {
    const events = await db.query.waterLevel.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching water level record: ${error.message}` });
  }
};

export const fetchWaterpH = async (req: Request, res: Response) => {
  try {
    const events = await db.query.waterpH.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching water pH record: ${error.message}` });
  }
};

export const fetchWaterEC = async (req: Request, res: Response) => {
  try {
    const events = await db.query.waterEC.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching water ec record: ${error.message}` });
  }
};

export const fetchWaterTDS = async (req: Request, res: Response) => {
  try {
    const events = await db.query.waterTDS.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: `Error fetching water tds record: ${error.message}` });
  }
};
