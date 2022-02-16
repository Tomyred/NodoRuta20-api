import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const linkRouter = defineEntityRouter("entities", schema);

export default linkRouter;
