import express from "express";

import { apiRouter } from "./api/routes";

const PORT = process.env.PORT || 4000;
const app = express();
app.use("/api", apiRouter).listen(PORT);
