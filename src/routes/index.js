import router from "../controllers/links/index.js";

export const register = app => {
    app.use("/v1/links", router);
};
