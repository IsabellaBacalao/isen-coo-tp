import { json } from "body-parser";
import express from "express";
import morgan from "morgan";
import { createBaseRouter } from "./infrastructure/api/baseRouter";
import { createBeerRouter } from "./infrastructure/api/beerRouter";

const application = express();

application.use(morgan("dev"));

application.use(json());

application.use("/", createBaseRouter());
application.use("/beers", createBeerRouter());

application.listen(3000, () => console.log("[Server] Development server started"));
