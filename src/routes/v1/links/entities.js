import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const entitiesRouter = defineEntityRouter("entity", schema);

export default entitiesRouter;
