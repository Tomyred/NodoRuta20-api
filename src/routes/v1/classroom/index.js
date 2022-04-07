import { Router } from "express";
import classroomRouter from "./classroom.js";
import classroomNamesRouter from "./classroomNames.js";
import scheduleRouter from "./schedule.js";

export const router = Router();

router.use("/", classroomRouter);
router.use("/names", classroomNamesRouter);
router.use("/schedule", scheduleRouter);

export default router;
