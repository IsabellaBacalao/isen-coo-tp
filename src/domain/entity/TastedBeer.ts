import { Beer, BeerDependencies } from "./Beer";

export class TastedBeer extends Beer {
  public hasLiked = false;

  constructor(deps: BeerDependencies) {
    super(deps);
  }
}
