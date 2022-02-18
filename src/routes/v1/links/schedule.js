import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const scheduleRouter = defineEntityRouter("schedule", schema);

export default scheduleRouter;
