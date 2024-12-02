import mqtt from "mqtt";
import dotenv from "dotenv";
import topics from "@/api/config/topic";
import { createEvent } from "@/api/controllers/loggingController";
import { createDewpointData, createHumidityData, createPressureData, createTemperatureData } from "../controllers/boxParameterController";
import { createWaterECData, createWaterLevelData, createWaterpHData, createWaterTDSData, createWaterTemperatureData } from "../controllers/waterParameterController";

dotenv.config();

const client = mqtt.connect(process.env.MQTT_URL as string, {
  protocol: "wss",
  clientId: `clientId-${Math.random().toString(16).substr(2, 8)}`,
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
});

client.on("connect", () => {
  console.log("MQTT Connection established");
  client.subscribe(topics);
});

client.on("error", (err) => {
  console.log(`Connection error: ${err}`);
});

client.on("close", () => {
  console.log("Connection closed");
});

client.on("message", (topic, message) => {
  const messageAsDouble = parseFloat(message.toString());

  switch (topic) {
    case "feedback/debug":
      createEvent(message.toString());
      break;
    case "feedback/boxTemp":
      createTemperatureData(messageAsDouble);
      break;
    case "feedback/boxHumidity":
      createHumidityData(messageAsDouble);
      break;
    case "feedback/boxPressure":
      createPressureData(messageAsDouble);
      break;
    case "feedback/boxDewpoint":
      createDewpointData(messageAsDouble);
      break;
    case "feedback/waterTemp":
      createWaterTemperatureData(messageAsDouble);
      break;
    case "feedback/waterLevel":
      createWaterLevelData(messageAsDouble);
      break;
    case "feedback/pH":
      createWaterpHData(messageAsDouble);
      break;
    case "feedback/ec":
      createWaterECData(messageAsDouble);
      break;
    case "feedback/tds":
      createWaterTDSData(messageAsDouble);
      break;
    default:
      console.log(`Unhandled topic: ${topic}`);
  }
});

export default client;
