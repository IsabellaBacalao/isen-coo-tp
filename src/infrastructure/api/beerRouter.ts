import { Router } from "express";
import { getAllBeers } from "../../application/use-case/getAllBeers";
import { BeerRepository } from "../../domain/repository/beerRepository";
import { PunkApiBeerRepository } from "../provider/punkApi/punkApiBeerRepository";

export const createBeerRouter = () => {
  const router = Router();
  const beerRepo: BeerRepository = new PunkApiBeerRepository();

  router.get("/beer", async (_, res) => {
    res.json(await getAllBeers({ beerRepository: beerRepo }));
  });

  return router;
};
