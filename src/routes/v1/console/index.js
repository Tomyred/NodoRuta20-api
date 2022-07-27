import { Router } from "express";
import consolesRouter from "./console.js";
import consolesByGroupRouter from "./consoleByGroup.js";
import consolesValues from "./consolesValues.js";

const router = Router();

router.use("/", consolesByGroupRouter, consolesRouter);
router.use("/values", consolesValues);

export default router;
