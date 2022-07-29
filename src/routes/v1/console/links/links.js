import { Router } from "express";
import { ObjectId } from "mongodb";
import consoleModel from "../../../../models/console.model.js";
import { defaultResponse } from "../../../../utils.js";

const linksRouter = Router();

linksRouter.put("/add/:id", async (req, res) => {
    try {
        const consoleId = req.params.id;
        console.log(consoleId);
        const data = req.body;

        if (ObjectId.isValid(consoleId) === false) {
            const error = { message: `"${id}" is not a valid id` };
            defaultResponse(req, res, null, error);
        }

        const updated = await consoleModel.findOneAndUpdate(
            { _id: consoleId },
            { $push: { links: data } }
        );

        if (!updated) {
            defaultResponse(req, res, null, { message: "Document not found" });
        } else {
            defaultResponse(req, res, updated);
        }
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

linksRouter.put("/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        if (ObjectId.isValid(id) === false) {
            const error = { message: `"${id}" is not a valid id` };
            defaultResponse(req, res, null, error);
        }

        const updated = await consoleModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    "links.$[elemX]": data,
                },
            },
            {
                arrayFilters: [
                    {
                        "elemX._id": data._id,
                    },
                ],
            }
        );

        if (updated) {
            defaultResponse(req, res, updated);
        } else {
            defaultResponse(req, res, null, {
                message: "Could not update the document",
            });
        }
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

linksRouter.put("/remove/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        if (ObjectId.isValid(id) === false) {
            const error = { message: `"${id}" is not a valid id` };
            defaultResponse(req, res, null, error);
        }

        const updated = await consoleModel.findOneAndUpdate(
            { _id: id },
            { $pull: { links: data } }
        );

        if (updated) {
            defaultResponse(req, res, updated);
        } else {
            const error = { message: "Could not remove the document" };
            defaultResponse(req, res, null, error);
        }
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

export default linksRouter;
