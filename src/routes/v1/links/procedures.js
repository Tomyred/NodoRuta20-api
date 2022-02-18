import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const proceduresRouter = defineEntityRouter("procedure", schema);

export default proceduresRouter;
