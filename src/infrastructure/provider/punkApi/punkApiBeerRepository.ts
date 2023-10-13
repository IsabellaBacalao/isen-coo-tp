import { Beer } from "../../../domain/entity/Beer";
import { BeerRepository } from "../../../domain/repository/beerRepository";
import { httpClient } from "../httpClient";
import { PunkApiBeerDeserializer } from "./deserializer/punkApiBeerDeserializer";

export class PunkApiBeerRepository implements BeerRepository {
  public async getAllBeers(): Promise<Beer[]> {
    const response = await httpClient.get("/beers");
    const beers = await response.data;

    if (!beers?.length) return [];

    return beers.map((beer: any) => {
      return PunkApiBeerDeserializer.deserializeBeer(beer);
    });
  }
}
