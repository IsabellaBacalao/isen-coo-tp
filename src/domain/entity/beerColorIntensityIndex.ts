import { BeerColorIntensity } from "../enum/BeerColorIntensity";

export const beerColorIntensityIndex: Array<{ nameOfBeer: BeerColorIntensity; intensity: number }> = [
  { nameOfBeer: BeerColorIntensity.IMPERIAL_STOUT, intensity: 138 },
  { nameOfBeer: BeerColorIntensity.EXPORT_STOUT, intensity: 79 },
  { nameOfBeer: BeerColorIntensity.BALTIC_PORTER, intensity: 69 },
  { nameOfBeer: BeerColorIntensity.STOUT, intensity: 57 },
  { nameOfBeer: BeerColorIntensity.PORTER, intensity: 47 },
  { nameOfBeer: BeerColorIntensity.DUNKEL, intensity: 39 },
  { nameOfBeer: BeerColorIntensity.AMBER, intensity: 33 },
  { nameOfBeer: BeerColorIntensity.GARDE, intensity: 26 },
  { nameOfBeer: BeerColorIntensity.EXTRA_SPECIAL_BITTER, intensity: 20 },
  { nameOfBeer: BeerColorIntensity.SAISON, intensity: 16 },
  { nameOfBeer: BeerColorIntensity.IPA, intensity: 12 },
  { nameOfBeer: BeerColorIntensity.WEISS, intensity: 8 },
  { nameOfBeer: BeerColorIntensity.GOLDEN_ALE, intensity: 6 },
  { nameOfBeer: BeerColorIntensity.PALE_LAGER, intensity: 4 },
];
