import { BeerTasted } from "../entity/BeerTasted";

export interface TastedBeerRepository {
  getAllTastedBeer(): Promise<BeerTasted[]>;
  addTastedBeer(beer: BeerTasted): Promise<void>;
  setBeerLikedOpinionOnTastedBeer(id: number, hasLiked: boolean): Promise<void>;
}
