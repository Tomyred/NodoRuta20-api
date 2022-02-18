import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const jobBankRouter = defineEntityRouter("jobBank", schema);

export default jobBankRouter;
