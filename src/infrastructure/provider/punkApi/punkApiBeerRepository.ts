import { Beer } from "../../../domain/entity/Beer";
import { BeerRepository } from "../../../domain/repository/beerRepository";
import { GetBeerByIDBodyFormat } from "../../api/interface/request/bodyFormat/GetBeerByIDBodyFormat";
import { httpClient } from "../httpClient";
import { PunkApiBeerDeserializer } from "./deserializer/punkApiBeerDeserializer";

export class PunkApiBeerRepository implements BeerRepository {
  public async getBeerByID(getBeerByIDBodyFormat: GetBeerByIDBodyFormat): Promise<Beer | undefined> {
    const beerID = getBeerByIDBodyFormat.beerID;
    try {
      const response = await httpClient.get("/beers/" + beerID);
      const beer = await response.data[0];
      if (!beer) {
        return undefined;
      }
      return PunkApiBeerDeserializer.deserializeBeer(beer);
    } catch {
      return undefined;
    }
  }

  public async getAllBeers(): Promise<Beer[]> {
    try {
      const response = await httpClient.get("/beers");
      const beers = await response.data;

      if (!beers?.length) return [];

      return beers.map((beer: any) => {
        return PunkApiBeerDeserializer.deserializeBeer(beer);
      });
    } catch {
      return [];
    }
  }
}
