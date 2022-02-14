import { Router } from "express";
import mongoose from "mongoose";
import { defaultResponse } from "../utils.js";
import { ObjectId } from "mongodb";

const defineEntityRouter = (schemaName, schema) => {
    const router = Router();
    const model = mongoose.model(schemaName, schema);

    router.get("/", async (req, res) => {
        const page = Number(req.query.page);
        const perPage = Number(req.query.perPage);

        try {
            const data = await model.find(null, null, {
                ...(page ? { skip: page } : []),
                ...(perPage ? { limit: perPage } : []),
            });

            defaultResponse(req, res, data);
        } catch (err) {
            defaultResponse(req, res, null, err);
        }
    });

    router.get("/:id", async (req, res, next) => {
        const id = req.params.id;

        if (ObjectId.isValid(id) === false) {
            return next();
        }

        try {
            const data = await model.findById(id);
            if (data) {
                defaultResponse(req, res, data);
            } else {
                const error = { message: `No data with id "${id}" found` };
                defaultResponse(req, res, null, error);
            }
        } catch (err) {
            defaultResponse(req, res, null, err);
        }
    });

    router.post("/", async (req, res) => {
        try {
            const data = req.body;
            if (!data) {
                throw new Error("Malformed request.");
            }

            const entity = await model.create(data);

            defaultResponse(req, res, entity);
        } catch (error) {
            defaultResponse(req, res, null, error);
        }
    });

    router.put("/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;

            const document = await model.findOne({ _id: id });

            if (document === null || document === undefined) {
                throw new Error("entity not found.");
            }

            document.set(data);

            const entity = await document.save();

            defaultResponse(req, res, entity);
        } catch (error) {
            defaultResponse(req, res, null, error);
        }
    });

    router.delete("/:id", async (req, res, next) => {
        try {
            const id = req.params.id;
            if (ObjectId.isValid(id) === false) {
                return next();
            }

            const entity = await model.findByIdAndDelete(id);

            defaultResponse(req, res, entity);
        } catch (error) {
            defaultResponse(req, res, null, error);
        }
    });

    return router;
};

export { defineEntityRouter };
