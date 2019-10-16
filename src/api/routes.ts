import { Router } from "express";

import { getPageHealth } from "./page-health.route";

export const apiRouter = Router();

apiRouter.get("/page-health", getPageHealth);
