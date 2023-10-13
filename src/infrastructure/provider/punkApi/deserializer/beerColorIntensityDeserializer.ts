import { BeerColorIntensity } from "../../../../domain/enum/BeerColorIntensity";

export function beerColorIntensityDeserializer(europeanBreweryConventionNumber: number): BeerColorIntensity {
  return BeerColorIntensity.UNKNOWN;
}
