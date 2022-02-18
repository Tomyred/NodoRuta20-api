import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const infoServiceRouter = defineEntityRouter("infoService", schema);

export default infoServiceRouter;
