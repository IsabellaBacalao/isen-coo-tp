import { BeerRepository } from "../../domain/repository/beerRepository";

export type GetAllBeersDependencies = {
  beerRepository: BeerRepository;
};

export const getAllBeers = async (deps: GetAllBeersDependencies) => {
  return await deps.beerRepository.getAllBeers();
};
