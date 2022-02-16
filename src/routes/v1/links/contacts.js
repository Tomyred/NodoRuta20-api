import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const linkRouter = defineEntityRouter("contacts", schema);

export default linkRouter;
