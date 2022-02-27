import { Router } from "express";
import queryRouter from "../../controllers/links/linksByGroup.js";

const linksRoutes = Router();

linksRoutes.use("/", queryRouter);

export default linksRoutes;
