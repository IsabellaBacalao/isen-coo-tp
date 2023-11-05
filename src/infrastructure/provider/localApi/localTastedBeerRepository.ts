import { promises } from "fs";
import { join } from "path";
import { TastedBeer } from "../../../domain/entity/TastedBeer";
import { TastedBeerRepository } from "../../../domain/repository/tastedBeerRepository";
import { PersonalBeerStatistics } from "../../../domain/entity/PersonalBeerStatistics";
import { SetBeerLikedOpinionOnTastedBeerBodyFormat } from "../../api/interface/request/bodyFormat/SetBeerLikedOpinionOnTastedBeerBodyFormat";

export class LocalTastedBeerRepository implements TastedBeerRepository {
  private filePath: string;

  constructor() {
    this.filePath = join(__dirname, "../../../../data/tasted-beer.json");
  }
  async getPersonalBeerStatistics(): Promise<PersonalBeerStatistics> {
    let personalBeerStatistics = new PersonalBeerStatistics();
    const tastedBeers = await this.getAllTastedBeers();
    personalBeerStatistics.generatePersonalBeerStatistics(tastedBeers);
    return personalBeerStatistics;
  }

  async getAllTastedBeers(): Promise<TastedBeer[]> {
    try {
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

  async setBeerLikedOpinionOnTastedBeer(
    setBeerLikedOpinionOnTastedBeerBodyFormat: SetBeerLikedOpinionOnTastedBeerBodyFormat,
  ): Promise<void> {
    const id = setBeerLikedOpinionOnTastedBeerBodyFormat.beerID;
    const hasLiked = setBeerLikedOpinionOnTastedBeerBodyFormat.hasLiked;
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
