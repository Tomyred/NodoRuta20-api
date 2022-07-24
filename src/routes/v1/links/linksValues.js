import { Router } from "express";
import linkModel from "../../../models/link.model.js";
import { defaultResponse } from "../../../utils.js";

const linksValues = Router();

linksValues.get("/titles", async (req, res) => {
    try {
        const linkTitlesObj = await linkModel.find({}).select("title");

        const titlesArray = linkTitlesObj.map(title => title.title);

        defaultResponse(req, res, titlesArray);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

linksValues.get("/groups", async (req, res) => {
    try {
        const linkGroupsObj = await linkModel.find({}).select("group");
        const groupsArray = linkGroupsObj.map(group => group.group);

        defaultResponse(req, res, groupsArray);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

export default linksValues;
