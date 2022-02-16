import { Router } from "express";
import contactsLinkRouter from "./v1/links/contacts.js";
import entitiesLinkRouter from "./v1/links/entities.js";

export const router = Router();

export const register = app => {
    app.use("/v1/links/contacts", contactsLinkRouter);
    app.use("/v1/links/entities", entitiesLinkRouter);
};
