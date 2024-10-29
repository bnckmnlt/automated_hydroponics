import { Router } from "express";
import { fetchBoxDewpoint, fetchBoxHumidity, fetchBoxPressure, fetchBoxTemperature } from "../controllers/boxParameterController";

const router = Router()

router.get("/temperature", fetchBoxTemperature)
router.get("/humidity", fetchBoxHumidity)
router.get("/pressure", fetchBoxPressure)
router.get("/dewpoint", fetchBoxDewpoint)

export default router
