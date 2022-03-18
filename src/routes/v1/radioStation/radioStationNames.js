import { Router } from "express";
import radioStationModel from "../../../models/radioStation.model.js";
import { defaultResponse } from "../../../utils.js";

const radioStationNamesRouter = Router();

radioStationNamesRouter.get("/", async (req, res) => {
    const page = Number(req.query.page);
    const perPage = Number(req.query.per_page);

    try {
        const radioStation = await radioStationModel
            .find({}, null, {
                ...(page ? { skip: page } : []),
                ...(perPage ? { limit: perPage } : []),
            })
            .select({ stationName: 1 });

        defaultResponse(req, res, radioStation);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

export default radioStationNamesRouter;
