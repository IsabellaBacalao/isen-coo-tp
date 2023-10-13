import { Router } from "express";
import { getAllBeers } from "../../application/use-case/getAllBeers";

export const createBeerRouter = () => {
  const router = Router();

  router.get("/", (_, res) => {
    res.json({
      beers: getAllBeers(),
    });
  });

  return router;
};
