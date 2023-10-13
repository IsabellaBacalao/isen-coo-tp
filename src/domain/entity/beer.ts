import { BeerColorIntensity } from "../enum/BeerColorIntensity";

export type BeerDependencies = {
  id: number;
  name: string;
};

export class Beer {
  public id: number;
  public name: string;
  public description?: string;
  public url?: string;
  public alcoolByVolume?: 0;
  public bitterness?: 0;
  public color?: BeerColorIntensity;

  constructor({ id, name }: BeerDependencies) {
    this.id = id;
    this.name = name;
  }
}
