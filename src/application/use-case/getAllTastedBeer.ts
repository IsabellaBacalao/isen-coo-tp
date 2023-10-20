import { TastedBeerRepository } from "../../domain/repository/tastedBeerRepository";

export type GetAllTastedBeersDependencies = {
  beerRepository: TastedBeerRepository;
};

export const getAllTastedBeers = async (deps: GetAllTastedBeersDependencies) => {
  return await deps.beerRepository.getAllTastedBeers();
};
