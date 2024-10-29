import { Router } from "express";
import { fetchWaterEC, fetchWaterLevel, fetchWaterpH, fetchWaterTDS, fetchWaterTemperature } from "../controllers/waterParameterController";

const router = Router()

router.get("/temperature", fetchWaterTemperature)
router.get("/level", fetchWaterLevel)
router.get("/pH", fetchWaterpH)
router.get("/ec", fetchWaterEC)
router.get("/tds", fetchWaterTDS)

export default router
