import { Router } from "express";
import linkModel from "../../../models/link.model.js";
import { defaultResponse } from "../../../utils.js";

const consolesByGroupRouter = Router();

consolesByGroupRouter.get("/", async (req, res, next) => {
    const group = req.query.group;
    const title = req.query.title;

    const page = Number(req.query.page);
    const perPage = Number(req.query.per_page);

    if (group) {
        try {
            const links = await linkModel.find(
                {
                    group: group,
                    ...(title
                        ? { title: { $regex: title, $options: "i" } }
                        : []),
                },
                null,
                {
                    ...(page ? { skip: page } : []),
                    ...(perPage ? { limit: perPage } : []),
                }
            );

            defaultResponse(req, res, links);
        } catch (error) {
            defaultResponse(req, res, null, error);
        }
    } else {
        next();
    }
});

export default consolesByGroupRouter;
