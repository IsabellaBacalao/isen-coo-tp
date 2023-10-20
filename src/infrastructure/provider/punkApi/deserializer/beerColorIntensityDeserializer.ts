import { BeerColorIntensity } from "../../../../domain/enum/BeerColorIntensity";

export function beerColorIntensityDeserializer(europeanBreweryConventionNumber: number): BeerColorIntensity {
  console.log(europeanBreweryConventionNumber);

  return BeerColorIntensity.UNKNOWN;
}
