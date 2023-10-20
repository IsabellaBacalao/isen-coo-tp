import { promises } from "fs";
import { join } from "path";
import { TastedBeer } from "../../../domain/entity/TastedBeer";
import { TastedBeerRepository } from "../../../domain/repository/tastedBeerRepository";

export class LocalTastedBeerRepository implements TastedBeerRepository {
  private filePath: string;

  constructor() {
    this.filePath = join(__dirname, "../../../../data/tasted-beer.json");
  }

  async getAllTastedBeers(): Promise<TastedBeer[]> {
    try {
      console.log(this.filePath);
      const data = await promises.readFile(this.filePath);

      return JSON.parse(data.toString()).tastedBeers;
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  async addTastedBeer(tastedBeer: TastedBeer): Promise<void> {
    const tastedBeers = await this.getAllTastedBeers();

    const hasAlreadyTasted = !!tastedBeers.find(({ id }) => id === tastedBeer.id);

    if (hasAlreadyTasted) {
      return;
    }

    tastedBeers.push(tastedBeer);

    await promises.writeFile(
      this.filePath,
      JSON.stringify({
        tastedBeers,
      }),
    );
  }

  async setBeerLikedOpinionOnTastedBeer(id: number, hasLiked: boolean): Promise<void> {
    const tastedBeers = await this.getAllTastedBeers();
    const tastedBeer = tastedBeers.find((tastedBeer) => tastedBeer.id === id);

    if (!tastedBeer) {
      throw new Error("Not found");
    }

    const indexOfTastedBeer = tastedBeers.map(({ id }) => id).indexOf(id);

    tastedBeer.hasLiked = hasLiked;

    tastedBeers[indexOfTastedBeer] = tastedBeer;

    await promises.writeFile(
      this.filePath,
      JSON.stringify({
        tastedBeers,
      }),
    );
  }
}
