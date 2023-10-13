import fetch from "node-fetch";
import { Beer } from "../../../domain/entity/beer";
import { BeerRepository } from "../../../domain/repository/beerRepository";
import { PunkApiBeerDeserializer } from "./punkApiBeerDeserializer";

export class PunkApiBeerRepository implements BeerRepository {
  public async getAllBeers(): Promise<Beer[]> {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const beers = await response.json();

    return beers.map((beer: any) => {
      return PunkApiBeerDeserializer.deserializeBeer(beer);
    });
  }
}
