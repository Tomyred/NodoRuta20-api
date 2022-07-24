import { Router } from "express";
import linkModel from "../../../models/link.model.js";
import { defaultResponse } from "../../../utils.js";

const linksTitles = Router();

linksTitles.get("/", async (req, res) => {
    try {
        const linkTitlesObj = await linkModel.find({}).select("title");

        const titlesArray = linkTitlesObj.map(title => title.title);

        defaultResponse(req, res, titlesArray);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

export default linksTitles;
