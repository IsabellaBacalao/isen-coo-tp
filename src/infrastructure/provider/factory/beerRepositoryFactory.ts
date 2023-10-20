import { BeerRepository } from "../../../domain/repository/beerRepository";
import { PunkApiBeerRepository } from "../punkApi/punkApiBeerRepository";

export function makeBeerRepository(): BeerRepository {
  return new PunkApiBeerRepository();
}
