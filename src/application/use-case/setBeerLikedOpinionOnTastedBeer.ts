import { TastedBeerRepository } from "../../domain/repository/tastedBeerRepository";
import { SetBeerLikedOpinionOnTastedBeerBodyFormat } from "../../infrastructure/api/interface/request/bodyFormat/SetBeerLikedOpinionOnTastedBeerBodyFormat";

export type SetBeerLikedOpinionOnTastedBeerDependencies = {
  beerRepository: TastedBeerRepository;
  setBeerLikedOpinionOnTastedBeerBodyFormat: SetBeerLikedOpinionOnTastedBeerBodyFormat;
};

export const setBeerLikedOpinionOnTastedBeer = async ({
  beerRepository,
  setBeerLikedOpinionOnTastedBeerBodyFormat,
}: SetBeerLikedOpinionOnTastedBeerDependencies) => {
  return await beerRepository.setBeerLikedOpinionOnTastedBeer(setBeerLikedOpinionOnTastedBeerBodyFormat);
};
