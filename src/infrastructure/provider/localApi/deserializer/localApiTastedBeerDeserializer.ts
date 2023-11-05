import { Beer } from "../../../../domain/entity/Beer";
import { TastedBeer } from "../../../../domain/entity/TastedBeer";

export class LocalApiTastedBeerDeserializer {
  public static deserializeTastedBeer(beer: Beer): TastedBeer {
    const tastedBeerDTO = beer as TastedBeer;
    return tastedBeerDTO;
  }
}
