import express, {json}from "express";
import mongoose from "mongoose";
import config from "./config/index.js";
import cors from "cors";
import morgan from "morgan";
import * as routes from "./routes/index.js";

const app = express()
const port = process.env.PORT || 8080;

app.use(morgan("tiny"));
app.use(cors())
app.use(json({ limit: "30mb"}));

routes.register(app)

mongoose.connect(config.MongoDbConnection, {  });

app.listen({port}, () => {

    console.log(`Server started at http://localhost:${port}`);
});

