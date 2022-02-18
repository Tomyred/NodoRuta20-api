import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const cooperativesRouter = defineEntityRouter("cooperative", schema);

export default cooperativesRouter;
