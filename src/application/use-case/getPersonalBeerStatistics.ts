import { TastedBeerRepository } from "../../domain/repository/tastedBeerRepository";

export type GetAllTastedBeersDependencies = {
  beerRepository: TastedBeerRepository;
};

export const getPersonalBeerStatistics = async ({ beerRepository }: GetAllTastedBeersDependencies) => {
  return await beerRepository.getPersonalBeerStatistics();
};
