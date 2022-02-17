import { Router } from "express";
import contactsLinksRouter from "./contacts.js";
import entitiesLinksRouter from "./entities.js";

const linksRouter = Router();

linksRouter.use("/contacts", contactsLinksRouter);
linksRouter.use("/entities", entitiesLinksRouter);

export default linksRouter;
