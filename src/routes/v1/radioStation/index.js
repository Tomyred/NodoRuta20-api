import { Router } from "express";
import radioStationRouter from "./radioStation.js";
import radioStationNamesRouter from "./radioStationNames.js";
import scheduleRouter from "./schedule.js";

export const router = Router();

router.use("/", radioStationRouter);
router.use("/names", radioStationNamesRouter);
router.use("/schedule", scheduleRouter);

export default router;
