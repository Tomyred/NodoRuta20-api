import { Router } from "express";
import consolesRouter from "./console.js";
import consolesByGroupRouter from "./consoleByGroup.js";
import consolesValues from "./consolesValues.js";
import linksRouter from "./links/links.js";

const router = Router();

router.use("/", consolesByGroupRouter, consolesRouter);
router.use("/values", consolesValues);
router.use("/links", linksRouter);

export default router;
