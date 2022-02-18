import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const formalitiesRouter = defineEntityRouter("formality", schema);

export default formalitiesRouter;
