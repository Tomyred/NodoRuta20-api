import { classroomSchema } from "../../../models/classroom.model.js";
import { defineEntityRouter } from "../../base.js";

const classroomRouter = defineEntityRouter("classroom", classroomSchema);

export default classroomRouter;
