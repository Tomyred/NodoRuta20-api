import { Router } from "express";
import classroomModel from "../../../models/classroom.model.js";
import { defaultResponse } from "../../../utils.js";

const classroomNamesRouter = Router();

classroomNamesRouter.get("/", async (req, res) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.per_page);

    try {
        const classroom = await classroomModel
            .find({}, null, {
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
