import { TastedBeerRepository } from "../../../domain/repository/tastedBeerRepository";
import { LocalTastedBeerRepository } from "../localApi/localTastedBeerRepository";

export function makeTastedBeerRepository(): TastedBeerRepository {
  return new LocalTastedBeerRepository();
}
