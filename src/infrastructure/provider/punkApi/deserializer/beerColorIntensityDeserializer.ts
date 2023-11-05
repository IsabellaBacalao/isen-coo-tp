import { beerColorIntensityIndex } from "../../../../domain/entity/BeerColorIntensityIndex";
import { BeerColorIntensity } from "../../../../domain/enum/BeerColorIntensity";

export function beerColorIntensityDeserializer(europeanBreweryConventionNumber: number): BeerColorIntensity {
  for (let { nameOfBeer, intensity } of beerColorIntensityIndex) {
    if (europeanBreweryConventionNumber >= intensity) {
      return nameOfBeer;
    }
  }

  return BeerColorIntensity.UNKNOWN;
}
