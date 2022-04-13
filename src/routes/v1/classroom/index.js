import { Router } from "express";
import classroomRouter from "./classroom.js";
import classroomNamesRouter from "./classroomTypes.js";
import scheduleRouter from "./schedule.js";

export const router = Router();

router.use("/", classroomRouter);
router.use("/t", classroomNamesRouter);
router.use("/schedule", scheduleRouter);

export default router;
