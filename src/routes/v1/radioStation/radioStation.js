import { radioStationSchema } from "../../../models/radioStation.model.js";
import { defineEntityRouter } from "../../base.js";

const radioStationRouter = defineEntityRouter(
    "RadioStation",
    radioStationSchema
);

export default radioStationRouter;
