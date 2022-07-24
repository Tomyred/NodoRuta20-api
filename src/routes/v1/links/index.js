import { Router } from "express";
import linksRouter from "./links.js";
import linksByGroupRouter from "./linksByGroup.js";
import linksTitles from "./linksTitles.js";

const router = Router();

router.use("/", linksByGroupRouter, linksRouter);
router.use("/titles", linksTitles);

export default router;
