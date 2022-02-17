import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const entitiesLinksRouter = defineEntityRouter("entities", schema);

export default entitiesLinksRouter;
