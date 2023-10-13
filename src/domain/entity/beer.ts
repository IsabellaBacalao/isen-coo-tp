type BeerDependencies = {
  id: number;
  name: string;
};

export class Beer {
  public id: number;
  public name: string;
  public description?: string;
  public url?: string;
  public alcoolDegree?: number;
  public bitterness?: number;
  public color?: string;

  constructor({ id, name }: BeerDependencies) {
    this.id = id;
    this.name = name;
  }
}
