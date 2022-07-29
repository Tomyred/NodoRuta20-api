import { Router } from "express";
import { ObjectId } from "mongodb";
import classroomModel from "../../../models/classroom.model.js";
import { defaultResponse } from "../../../utils.js";

const scheduleRouter = Router();

scheduleRouter.put("/:id", async (req, res) => {
    try {
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
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

scheduleRouter.put("/remove/:id/:day", async (req, res) => {
    try {
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

        if (updated) {
            defaultResponse(req, res, updated);
        } else {
            const error = { message: "Could not update the document" };
            defaultResponse(req, res, null, error);
        }
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

scheduleRouter.put("/update/:id/:day", async (req, res) => {
    try {
        const id = req.params.id;
        const prevDay = req.params.day;
        const { hour, name, description, hosts, _id, day } = req.body;
        const editedCourse = { hour, name, description, hosts };

        if (ObjectId.isValid(id) === false) {
            const error = { message: `"${id}" is not a valid id` };
            defaultResponse(req, res, null, error);
        }

        if (prevDay === day) {
            const updated = await classroomModel.findOneAndUpdate(
                { _id: id },
                {
                    $set: {
                        "schedule.$[elemX].courses.$[elemY]": {
                            ...editedCourse,
                            _id,
                        },
                    },
                },
                {
                    arrayFilters: [
                        {
                            "elemX.day": day,
                        },
                        {
                            "elemY._id": _id,
                        },
                    ],
                }
            );
            defaultResponse(req, res, updated);
        } else {
            const classroom = await classroomModel.findOne({ _id: id });
            const dayExist = classroom.schedule.find(
                element => element.day === day
            );
            await classroomModel.findOneAndUpdate(
                { _id: id },
                { $pull: { "schedule.$[elemX].courses": editedCourse } },
                {
                    arrayFilters: [
                        {
                            "elemX.day": prevDay,
                        },
                    ],
                }
            );
            if (dayExist) {
                const updated = await classroomModel.findOneAndUpdate(
                    { _id: id },
                    { $push: { "schedule.$[elemX].courses": editedCourse } },
                    {
                        arrayFilters: [
                            {
                                "elemX.day": day,
                            },
                        ],
                    }
                );

                if (updated) {
                    defaultResponse(req, res, updated);
                } else {
                    const error = { message: "Could not update the document" };
                    defaultResponse(req, res, null, error);
                }
            } else {
                const newScheduleElement = { day, courses: [editedCourse] };

                const updated = await classroomModel.findOneAndUpdate(
                    { _id: id },
                    { $push: { schedule: newScheduleElement } }
                );
                defaultResponse(req, res, updated);
            }
        }
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

export default scheduleRouter;
