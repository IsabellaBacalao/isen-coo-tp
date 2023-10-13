import { Beer, BeerDependencies } from "./Beer";

export class BeerTasted extends Beer {
  public hasLiked = false;

  constructor(deps: BeerDependencies) {
    super(deps);
  }
}
