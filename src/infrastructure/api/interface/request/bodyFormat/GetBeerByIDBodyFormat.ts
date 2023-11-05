export type GetBeerByIDBodyFormatDependencies = {
  beerID: number;
};

export class GetBeerByIDBodyFormat {
  public beerID: number;

  constructor({ beerID }: GetBeerByIDBodyFormatDependencies) {
    this.beerID = beerID;
  }
}
