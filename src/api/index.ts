import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mqtt from 'mqtt'
import topics from './config/topic'
import { createEvent } from './controllers/loggingController'

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("dev"))
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

const client = mqtt.connect(process.env.MQTT_URL as string, {
  protocol: "wss",
  clean: true,
  clientId: `clientId-${Math.random().toString(16).substr(2, 8)}`,
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
  connectTimeout: 4000,
  reconnectPeriod: 1000,
});

client.on("connect", () => {
  console.log("MQTT Connection established");
  client.subscribe(topics)
});

client.on("error", (err) => {
  console.log(`Connection error: ${err}`);
});

client.on("close", () => {
  console.log("Connection closed");
});

client.on("message", (topic, message) => {
  if(topic == "feedback/debug") {
    createEvent(message.toString())
  }
});

const PORT = Number(process.env.SERVER_PORT) || 3001
app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Server running on PORT", PORT);
})
