import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const affiliationsRouter = defineEntityRouter("affiliation", schema);

export default affiliationsRouter;
