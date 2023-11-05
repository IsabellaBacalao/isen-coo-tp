import { SetBeerLikedOpinionOnTastedBeerBodyFormat } from "../../infrastructure/api/interface/request/bodyFormat/SetBeerLikedOpinionOnTastedBeerBodyFormat";
import { PersonalBeerStatistics } from "../entity/PersonalBeerStatistics";
import { TastedBeer } from "../entity/TastedBeer";

export interface TastedBeerRepository {
  getAllTastedBeers(): Promise<TastedBeer[]>;
  addTastedBeer(tastedBeer: TastedBeer): Promise<void>;
  setBeerLikedOpinionOnTastedBeer(
    setBeerLikedOpinionOnTastedBeerBodyFormat: SetBeerLikedOpinionOnTastedBeerBodyFormat,
  ): Promise<void>;
  getPersonalBeerStatistics(): Promise<PersonalBeerStatistics>;
}
