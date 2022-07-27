import { consoleSchema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const consolesRouter = defineEntityRouter("Console", consoleSchema);

export default consolesRouter;
