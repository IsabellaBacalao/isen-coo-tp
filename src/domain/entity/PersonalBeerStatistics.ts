import { BeerColorIntensity } from "../enum/BeerColorIntensity";
import { TastedBeer } from "./TastedBeer";

export class PersonalBeerStatistics {
  public likedBeerPercentage?: number;
  public meanOfAlcoolByVolumeOnTastedBeers?: number;
  public topThreeMostBitterBeer?: TastedBeer[];
  public beerColorPrefered?: BeerColorIntensity;

  constructor() {}

  generateLikedBeerPercentage(TastedBeers: TastedBeer[]): void {
    let nbBeerLiked = 0;
    let nbBeerTasted = TastedBeers.length;

    TastedBeers.forEach((currentTastedBeer) => {
      if (currentTastedBeer.hasLiked === true) {
        nbBeerLiked++;
      }
    });

    this.likedBeerPercentage = (nbBeerLiked / nbBeerTasted) * 100;
  }

  generateMeanOfAlcoolByVolumeOnTastedBeers(TastedBeers: TastedBeer[]): void {
    let nbBeerTasted = TastedBeers.length;
    let alcoolByVolume = 0;

    TastedBeers.forEach((currentTastedBeer) => {
      alcoolByVolume += currentTastedBeer.alcoolByVolume;
    });

    this.meanOfAlcoolByVolumeOnTastedBeers = alcoolByVolume / nbBeerTasted;
  }

  generateTopThreeMostBitterBeer(tastedBeers: TastedBeer[]): void {
    if (tastedBeers.length <= 3) {
      this.topThreeMostBitterBeer = tastedBeers;
    } else {
      tastedBeers.sort((tastedBeer1, tastedBeer2) => tastedBeer1.alcoolByVolume - tastedBeer2.alcoolByVolume);
      this.topThreeMostBitterBeer = tastedBeers.slice(0, 3);
    }
  }

  generateBeerColorPrefered(tastedBeers: TastedBeer[]): void {
    let colors = [
      { color: BeerColorIntensity.PALE_LAGER, value: 0 },
      { color: BeerColorIntensity.GOLDEN_ALE, value: 0 },
      { color: BeerColorIntensity.IPA, value: 0 },
      { color: BeerColorIntensity.SAISON, value: 0 },
      { color: BeerColorIntensity.EXTRA_SPECIAL_BITTER, value: 0 },
      { color: BeerColorIntensity.GARDE, value: 0 },
      { color: BeerColorIntensity.AMBER, value: 0 },
      { color: BeerColorIntensity.DUNKEL, value: 0 },
      { color: BeerColorIntensity.PORTER, value: 0 },
      { color: BeerColorIntensity.STOUT, value: 0 },
      { color: BeerColorIntensity.BALTIC_PORTER, value: 0 },
      { color: BeerColorIntensity.EXPORT_STOUT, value: 0 },
      { color: BeerColorIntensity.IMPERIAL_STOUT, value: 0 },
      { color: BeerColorIntensity.WEISS, value: 0 },
      { color: BeerColorIntensity.UNKNOWN, value: 0 },
    ];
    tastedBeers.forEach((currentTastedBeer) => {
      const currentBeerColorIndex = colors.findIndex(({ color }) => color == currentTastedBeer.color);
      colors[currentBeerColorIndex].value++;
    });
    this.beerColorPrefered = colors.sort((color1, color2) => color2.value - color1.value)[0].color;
  }

  generatePersonalBeerStatistics(tastedBeers: TastedBeer[]): void {
    this.generateLikedBeerPercentage(tastedBeers);
    this.generateTopThreeMostBitterBeer(tastedBeers);
    this.generateMeanOfAlcoolByVolumeOnTastedBeers(tastedBeers);
    this.generateBeerColorPrefered(tastedBeers);
  }
}
