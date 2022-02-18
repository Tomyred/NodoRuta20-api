import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const platformsRouter = defineEntityRouter("platform", schema);

export default platformsRouter;
