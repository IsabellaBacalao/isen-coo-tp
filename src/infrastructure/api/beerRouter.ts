import { Router } from "express";
import { getAllBeers } from "../../application/use-case/getAllBeers";
import { makeBeerRepository } from "../provider/factory/beerRepositoryFactory";
import { makeTastedBeerRepository } from "../provider/factory/tastedBeerRepositoryFactory";
import { getAllTastedBeers } from "../../application/use-case/getAllTastedBeer";
import { addTastedBeer } from "../../application/use-case/addTastedBeer";

export function createBeerRouter() {
  const router = Router();
  const beerRepository = makeBeerRepository();
  const tastedBeerRepository = makeTastedBeerRepository();

  router.get("/", async (_, res) => res.json(await getAllBeers({ beerRepository: beerRepository })));

  router.get("/me", async (_, res) => res.json(await getAllTastedBeers({ beerRepository: tastedBeerRepository })));

  router.post("/me", async (req, res) =>
    res.json(await addTastedBeer({ beerRepository: tastedBeerRepository, tastedBeer: req.body })),
  );

  return router;
}
