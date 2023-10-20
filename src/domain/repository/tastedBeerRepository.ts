import { BeerTasted } from "../entity/BeerTasted";

export interface TastedBeerRepository {
  getAllTastedBeers(): Promise<BeerTasted[]>;
  addTastedBeers(beer: BeerTasted): Promise<void>;
  setBeerLikedOpinionOnTastedBeer(id: number, hasLiked: boolean): Promise<void>;
}
