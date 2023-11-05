export type AddTastedBeerBodyFormatDependencies = {
  beerID: number;
};

export class AddTastedBeerBodyFormat {
  public beerID: number;

  constructor({ beerID }: AddTastedBeerBodyFormatDependencies) {
    this.beerID = beerID;
  }
}
