import { Router } from "express";
import linkModel from "../../models/link.model.js";
import { defaultResponse } from "../../utils.js";

const linksByGroupRouter = Router();

linksByGroupRouter.get("/", async (req, res, next) => {
    const group = req.query.group;

    const page = Number(req.query.page);
    const perPage = Number(req.query.per_page);

    console.log(group);
    if (group) {
        try {
            const links = await linkModel.find({ group }, null, {
                ...(page ? { skip: page } : []),
                ...(perPage ? { limit: perPage } : []),
            });

            if (links.length > 0) {
                defaultResponse(req, res, links);
            } else {
                const error = { code: `No data of group "${group}" found` };
                defaultResponse(req, res, null, error);
            }
        } catch (error) {
            defaultResponse(req, res, null, error);
        }
    } else {
        next();
    }
});

export default linksByGroupRouter;
