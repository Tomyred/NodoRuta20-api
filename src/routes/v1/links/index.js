import { Router } from "express";
import linksRouter from "./links.js";
import linksByGroupRouter from "./linksByGroup.js";
import linksValues from "./linksValues.js";

const router = Router();

router.use("/", linksByGroupRouter, linksRouter);
router.use("/values", linksValues);

export default router;
