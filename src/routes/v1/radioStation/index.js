import { Router } from "express";
import radioStationRouter from "./radioStation.js";
import radioStationNamesRouter from "./radioStationNames.js";

export const router = Router();

router.use("/", radioStationRouter);
router.use("/names", radioStationNamesRouter);

export default router;
