import linksRouter from "./v1/links/index.js";
import radioStationRouter from "./v1/radioStation/index.js";

export const register = app => {
    app.use("/v1/links", linksRouter);
    app.use("/v1/radioStation", radioStationRouter);
};
