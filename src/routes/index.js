import { Router } from "express";
import linkRouter from "./v1/link.js";

export const router = Router();

export const register = app => {
    app.use("/v1/links", linkRouter);
};
