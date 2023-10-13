import express from "express";
import morgan from "morgan";
import { createBaseRouter } from "./infrastructure/api/baseRouter";

const application = express();

application.use(morgan("dev"));

application.get("/beer", createBaseRouter());

application.listen(3000, () => console.log("[Server] Development server started"));
