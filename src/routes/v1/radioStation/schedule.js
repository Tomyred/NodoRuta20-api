import { Router } from "express";
import { ObjectId } from "mongodb";
import radioStationModel from "../../../models/radioStation.model.js";
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

        const document = await radioStationModel.findOne({ _id: id });

        const element = document.schedule.find(element => {
            return element.day === data.day;
        });
        if (!element) {
            const updated = await radioStationModel.findOneAndUpdate(
                { _id: id },
                { $push: { schedule: data } }
            );
            defaultResponse(req, res, updated);
        } else {
            const updated = await radioStationModel.findOneAndUpdate(
                { _id: id },
                {
                    $push: {
                        "schedule.$[elemX].broadcasts": data.broadcasts[0],
                    },
                },
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

        const updated = await radioStationModel.findOneAndUpdate(
            { _id: id },
            { $pull: { "schedule.$[elemX].broadcasts": data } },
            {
                arrayFilters: [
                    {
                        "elemX.day": day,
                    },
                ],
            }
        );

        defaultResponse(req, res, updated);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

scheduleRouter.put("/update/:id/:day", async (req, res) => {
    try {
        const id = req.params.id;
        const prevDay = req.params.day;
        const { hour, name, description, hosts, _id, day } = req.body;
        const editedBroadcast = { hour, name, description, hosts };

        if (ObjectId.isValid(id) === false) {
            const error = { message: `"${id}" is not a valid id` };
            defaultResponse(req, res, null, error);
        }

        const classroom = radioStationModel.findOne({ _id: id });
        if (prevDay === day) {
            const updated = await radioStationModel.findOneAndUpdate(
                { _id: id },
                {
                    $set: {
                        "schedule.$[elemX].broadcasts.$[elemY]": {
                            ...editedBroadcast,
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
            const classroom = await radioStationModel.findOne({ _id: id });
            const dayExist = classroom.schedule.find(
                element => element.day === day
            );
            await radioStationModel.findOneAndUpdate(
                { _id: id },
                { $pull: { "schedule.$[elemX].broadcasts": editedBroadcast } },
                {
                    arrayFilters: [
                        {
                            "elemX.day": prevDay,
                        },
                    ],
                }
            );
            if (dayExist) {
                const updated = await radioStationModel.findOneAndUpdate(
                    { _id: id },
                    {
                        $push: {
                            "schedule.$[elemX].broadcasts": editedBroadcast,
                        },
                    },
                    {
                        arrayFilters: [
                            {
                                "elemX.day": day,
                            },
                        ],
                    }
                );
                defaultResponse(req, res, updated);
            } else {
                const newScheduleElement = {
                    day,
                    broadcasts: [editedBroadcast],
                };

                const updated = await radioStationModel.findOneAndUpdate(
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
