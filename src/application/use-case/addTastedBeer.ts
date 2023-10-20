import { TastedBeerRepository } from "../../domain/repository/tastedBeerRepository";

export type GetAllTastedBeersUseCaseDependencies = {
  beerRepository: TastedBeerRepository;
};

export const getAllTastedBeerUseCase = async (deps: GetAllTastedBeersUseCaseDependencies) => {
  return await deps.beerRepository.getAllTastedBeers();
};
