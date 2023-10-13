import { Router } from "express";
import { createBeerRouter } from "./beerRouter";

export const createBaseRouter = () => {
  const router = Router();

  router.get("/beer", createBeerRouter());

  router.get("/", (_, res) => {
    res.json({
      message: "andré martel aides nous stp",
    });
  });

  return router;
};
