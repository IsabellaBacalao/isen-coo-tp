import { AddTastedBeerBodyFormat } from "../../infrastructure/api/interface/request/bodyFormat/AddTastedBeerBodyFormat";
import { TastedBeerRepository } from "../../domain/repository/tastedBeerRepository";
import { BeerRepository } from "../../domain/repository/beerRepository";
import { TastedBeer } from "../../domain/entity/TastedBeer";
import { GetBeerByIDBodyFormatDeserializer } from "../../infrastructure/api/interface/deserializer/GetBeerByIDBodyFormatDeserializer";

export type addTastedBeersDependencies = {
  beerTastedRepository: TastedBeerRepository;
  beerRepository: BeerRepository;
  addTastedBeerBodyFormat: AddTastedBeerBodyFormat;
};

export const addTastedBeer = async ({
  beerTastedRepository,
  beerRepository,
  addTastedBeerBodyFormat,
}: addTastedBeersDependencies) => {
  const getBeerByIDBodyFormat =
    GetBeerByIDBodyFormatDeserializer.deserializeGetBeerByIDBodyFormat(addTastedBeerBodyFormat);
  const tastedBeer = (await beerRepository.getBeerByID(getBeerByIDBodyFormat)) as TastedBeer;
  if (!tastedBeer) {
    throw new Error("Beer not found: ");
  }
  tastedBeer.hasLiked = false;
  return await beerTastedRepository.addTastedBeer(tastedBeer);
};
