import { Router } from "express";
import linksRouter from "./v1/links/index.js";

export const router = Router();

export const register = app => {
    app.use("/v1/links", linksRouter);
};
