import { Router } from "express";
import { getAllBeers } from "../../application/use-case/getAllBeers";
import { makeBeerRepository } from "../provider/beer-repository-factory";

export function createBeerRouter() {
  const router = Router();
  const beerRepo = makeBeerRepository();

  router.get("/", async (_, res) => res.json(await getAllBeers({ beerRepository: beerRepo })));

  return router;
}
