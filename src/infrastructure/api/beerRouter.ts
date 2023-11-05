import { Router } from "express";
import { getAllBeers } from "../../application/use-case/getAllBeers";
import { makeBeerRepository } from "../provider/factory/beerRepositoryFactory";
import { makeTastedBeerRepository } from "../provider/factory/tastedBeerRepositoryFactory";
import { getAllTastedBeers } from "../../application/use-case/getAllTastedBeer";
import { addTastedBeer } from "../../application/use-case/addTastedBeer";
import { getPersonalBeerStatistics } from "../../application/use-case/getPersonalBeerStatistics";
import { setBeerLikedOpinionOnTastedBeer } from "../../application/use-case/setBeerLikedOpinionOnTastedBeer";
import { AddTastedBeerBodyFormat } from "./interface/request/bodyFormat/AddTastedBeerBodyFormat";

export function createBeerRouter() {
  const router = Router();
  const beerRepository = makeBeerRepository();
  const tastedBeerRepository = makeTastedBeerRepository();

  router.get("/", async (_, res) => res.json(await getAllBeers({ beerRepository: beerRepository })));

  router.get("/me", async (_, res) => res.json(await getAllTastedBeers({ beerRepository: tastedBeerRepository })));

  router.post("/me", async (req, res) => {
    const addTastedBeerBodyFormat: AddTastedBeerBodyFormat = req.body;

    //Nous n'avons pas trouvée comment être clean pour la gestion d'erreur :/
    if (!addTastedBeerBodyFormat.beerID) {
      return res.status(400).json({ error: "Bad request: Invalid request body format" });
    }
    res.json(
      await addTastedBeer({
        beerRepository: beerRepository,
        beerTastedRepository: tastedBeerRepository,
        addTastedBeerBodyFormat: addTastedBeerBodyFormat,
      }),
    );
  });

  router.put("/me", async (req, res) =>
    res.json(
      await setBeerLikedOpinionOnTastedBeer({
        beerRepository: tastedBeerRepository,
        setBeerLikedOpinionOnTastedBeerBodyFormat: req.body,
      }),
    ),
  );

  router.get("/me/stats", async (_, res) =>
    res.json(await getPersonalBeerStatistics({ beerRepository: tastedBeerRepository })),
  );

  return router;
}
