import { Router } from "express";
import classroomModel from "../../../models/classroom.model.js";
import { defaultResponse } from "../../../utils.js";

const classroomNamesRouter = Router();

classroomNamesRouter.get("/:type", async (req, res) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.per_page);
    const type = req.params.type;

    try {
        const classrooms = await classroomModel.find({ type }, null, {
            ...(page ? { skip: page } : []),
            ...(perPage ? { limit: perPage } : []),
        });

        defaultResponse(req, res, classrooms);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

classroomNamesRouter.get("/names/:type", async (req, res) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.per_page);
    const type = req.params.type;

    try {
        const classroom = await classroomModel
            .find({ type }, null, {
                ...(page ? { skip: page } : []),
                ...(perPage ? { limit: perPage } : []),
            })
            .select({ classroomName: 1 });

        defaultResponse(req, res, classroom);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

export default classroomNamesRouter;
