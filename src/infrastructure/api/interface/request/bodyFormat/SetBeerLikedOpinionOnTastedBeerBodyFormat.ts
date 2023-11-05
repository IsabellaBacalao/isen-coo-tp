export type SetBeerLikedOpinionOnTastedBeerBodyFormatDependencies = {
  beerID: number;
  hasLiked: boolean;
};

export class SetBeerLikedOpinionOnTastedBeerBodyFormat {
  public beerID: number;
  public hasLiked: boolean;

  constructor({ beerID: beerID, hasLiked }: SetBeerLikedOpinionOnTastedBeerBodyFormatDependencies) {
    this.beerID = beerID;
    this.hasLiked = hasLiked;
  }
}
