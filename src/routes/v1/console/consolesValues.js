import { Router } from "express";
import consoleModel from "../../../models/link.model.js";
import { defaultResponse } from "../../../utils.js";

const consolesValuesRouter = Router();

consolesValuesRouter.get("/console-names", async (req, res) => {
    try {
        const consoleNamesObj = await consoleModel
            .find({})
            .select("consoleName");

        const namesArray = consoleNamesObj.map(
            consoleName => consoleName.consoleName
        );

        defaultResponse(req, res, namesArray);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

consolesValuesRouter.get("/groups", async (req, res) => {
    try {
        const consoleGroupsObj = await consoleModel.find({}).select("group");
        const groupsArray = consoleGroupsObj.map(group => group.group);

        defaultResponse(req, res, groupsArray);
    } catch (error) {
        defaultResponse(req, res, null, error);
    }
});

export default consolesValuesRouter;
