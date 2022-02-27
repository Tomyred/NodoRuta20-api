import { Router } from "express";
import linksRouter from "./links.js";
import linksByGroupRouter from "./linksByGroup.js";

export const router = Router();

router.use("/", linksByGroupRouter, linksRouter);

export default router;
