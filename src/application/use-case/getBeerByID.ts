import { BeerRepository } from "../../domain/repository/beerRepository";
import { GetBeerByIDBodyFormat } from "../../infrastructure/api/interface/request/bodyFormat/GetBeerByIDBodyFormat";

export type GetBeerByIDDependencies = {
  beerRepository: BeerRepository;
  getBeerByIDBodyFormat: GetBeerByIDBodyFormat;
};

export const getBeerByID = async ({ beerRepository, getBeerByIDBodyFormat }: GetBeerByIDDependencies) => {
  return await beerRepository.getBeerByID(getBeerByIDBodyFormat);
};
