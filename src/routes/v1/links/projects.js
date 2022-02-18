import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const projectsRouter = defineEntityRouter("project", schema);

export default projectsRouter;
