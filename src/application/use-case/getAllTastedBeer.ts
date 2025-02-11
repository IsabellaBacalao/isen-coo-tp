import { TastedBeerRepository } from "../../domain/repository/tastedBeerRepository";

export type GetAllTastedBeersDependencies = {
  beerRepository: TastedBeerRepository;
};

export const getAllTastedBeers = async ({ beerRepository }: GetAllTastedBeersDependencies) => {
  return await beerRepository.getAllTastedBeers();
};
