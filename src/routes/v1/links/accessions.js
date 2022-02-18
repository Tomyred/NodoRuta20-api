import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const accessionsRouter = defineEntityRouter("accession", schema);

export default accessionsRouter;
