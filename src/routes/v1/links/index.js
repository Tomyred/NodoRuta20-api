import { Router } from "express";
import contactsRouter from "./contacts.js";
import entitiesRouter from "./entities.js";
import accessionsRouter from "./accessions.js";
import affiliationsRouter from "./affiliations.js";
import citizenDefenseRouter from "./citizenDefense.js";
import citizenEducationRouter from "./citizenEducation.js";
import cooperativesRouter from "./cooperatives.js";
import DACBonusesRouter from "./DACBonuses.js";
import infoServiceRouter from "./infoService.js";
import jobBankRouter from "./jobBank.js";
import platformsRouter from "./platforms.js";
import projectsRouter from "./projects.js";
import scheduleRouter from "./schedule.js";
import formalitiesRouter from "./formalities.js";
import politicEducationRouter from "./politicEducation.js";

const linksRouter = Router();

linksRouter.use("/accessions", accessionsRouter);
linksRouter.use("/affiliations", affiliationsRouter);
linksRouter.use("/citizen-defense", citizenDefenseRouter);
linksRouter.use("/citizen-education", citizenEducationRouter);
linksRouter.use("/contacts", contactsRouter);
linksRouter.use("/cooperatives", cooperativesRouter);
linksRouter.use("/dac-bonuses", DACBonusesRouter);
linksRouter.use("/entities", entitiesRouter);
linksRouter.use("/info-service", infoServiceRouter);
linksRouter.use("/job-bank", jobBankRouter);
linksRouter.use("/platforms", platformsRouter);
linksRouter.use("/formalities", formalitiesRouter);
linksRouter.use("/projects", projectsRouter);
linksRouter.use("/schedule", scheduleRouter);
linksRouter.use("/politic-education", politicEducationRouter);

export default linksRouter;
