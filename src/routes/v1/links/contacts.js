import { schema } from "../../../models/link.model.js";
import { defineEntityRouter } from "../../base.js";

const contactsLinksRouter = defineEntityRouter("contacts", schema);

export default contactsLinksRouter;
