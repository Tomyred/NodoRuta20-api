import { Router } from "express";
import { ObjectId } from "mongodb";
import radioStationModel from "../../../models/radioStation.model.js";
import { defaultResponse } from "../../../utils.js";

const scheduleRouter = Router();

scheduleRouter.put("/:id", async (req, res) => {
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
            { $push: { "schedule.$[elemX].broadcasts": data.broadcasts[0] } },
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
});

export default scheduleRouter;
