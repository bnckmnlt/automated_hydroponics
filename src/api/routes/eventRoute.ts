import { Router } from 'express'
import { fetchEvents } from '../controllers/loggingController'

const router = Router()

router.get("/", fetchEvents)

export default router
