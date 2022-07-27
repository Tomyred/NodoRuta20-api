import classroomRouter from "./v1/classroom/index.js";
import consolesRouter from "./v1/console/index.js";
import radioStationRouter from "./v1/radioStation/index.js";

export const register = app => {
    app.use("/v1/consoles", consolesRouter);
    app.use("/v1/radioStation", radioStationRouter);
    app.use("/v1/classroom", classroomRouter);
};
