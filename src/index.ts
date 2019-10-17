import express from "express";

import { apiRouter } from "./api/routes";

express()
  .use("/api", apiRouter)
  .listen(process.env.PORT || 4000);
