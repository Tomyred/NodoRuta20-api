import { linkSchema } from "../../models/link.model.js";
import { defineEntityRouter } from "../base.js";

const linksRouter = defineEntityRouter("Link", linkSchema);

export default linksRouter;
