import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import mqttClient from "./services/mqttService";

// Routes imports
import eventRoutes from "./routes/eventRoute";
import boxParameterRoutes from './routes/boxParameterRoute'
import waterParameterRoutes from './routes/waterParameterRoute'

dotenv.config();
const app = express();
const client = mqttClient

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/event", eventRoutes);
app.use("/box", boxParameterRoutes);
app.use("/reservoir", waterParameterRoutes);

const PORT = Number(process.env.SERVER_PORT) || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Server running on PORT", PORT);
});
