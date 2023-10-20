import { TastedBeer } from "../../domain/entity/TastedBeer";
import { TastedBeerRepository } from "../../domain/repository/tastedBeerRepository";

export type addTastedBeersDependencies = {
  beerRepository: TastedBeerRepository;
  tastedBeer: TastedBeer;
};

export const addTastedBeer = async ({ beerRepository, tastedBeer }: addTastedBeersDependencies) => {
  return await beerRepository.addTastedBeer(tastedBeer);
};
