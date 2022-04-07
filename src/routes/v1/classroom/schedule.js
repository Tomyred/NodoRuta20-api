import { Router } from "express";
import { ObjectId } from "mongodb";
import classroomModel from "../../../models/classroom.model.js";
import { defaultResponse } from "../../../utils.js";

const scheduleRouter = Router();

scheduleRouter.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    if (ObjectId.isValid(id) === false) {
        const error = { message: `"${id}" is not a valid id` };
        defaultResponse(req, res, null, error);
    }

    const document = await classroomModel.findOne({ _id: id });

    const element = document.schedule.find(element => {
        return element.day === data.day;
    });
    if (!element) {
        const updated = await classroomModel.findOneAndUpdate(
            { _id: id },
            { $push: { schedule: data } }
        );
        defaultResponse(req, res, updated);
    } else {
        const updated = await classroomModel.findOneAndUpdate(
            { _id: id },
            { $push: { "schedule.$[elemX].courses": data.courses[0] } },
            {
                arrayFilters: [
                    {
                        "elemX.day": data.day,
                    },
                ],
            }
        );

        defaultResponse(req, res, updated);
    }
});

scheduleRouter.put("/remove/:id/:day", async (req, res) => {
    const id = req.params.id;
    const day = req.params.day;
    const data = req.body;

    if (ObjectId.isValid(id) === false) {
        const error = { message: `"${id}" is not a valid id` };
        defaultResponse(req, res, null, error);
    }

    const updated = await classroomModel.findOneAndUpdate(
        { _id: id },
        { $pull: { "schedule.$[elemX].courses": data } },
        {
            arrayFilters: [
                {
                    "elemX.day": day,
                },
            ],
        }
    );

    defaultResponse(req, res, updated);
});

scheduleRouter.put("/update/:id/:day", async (req, res) => {
    const id = req.params.id;
    const day = req.params.day;
    const data = req.body;

    if (ObjectId.isValid(id) === false) {
        const error = { message: `"${id}" is not a valid id` };
        defaultResponse(req, res, null, error);
    }
    // res.json(data);
    const updated = await classroomModel.findOneAndUpdate(
        { _id: id },
        { $set: { "schedule.$[elemX].courses.$[elemY]": data } },
        {
            arrayFilters: [
                {
                    "elemX.day": day,
                },
                {
                    "elemY._id": data._id,
                },
            ],
        }
    );

    defaultResponse(req, res, updated);
});

export default scheduleRouter;
