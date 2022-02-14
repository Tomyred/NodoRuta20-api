import { schema } from "../../models/link.model.js";
import { defineEntityRouter } from "../base.js";

const linkRouter = defineEntityRouter("link", schema);

export default linkRouter;
