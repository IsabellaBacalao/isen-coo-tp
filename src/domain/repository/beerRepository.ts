import { GetBeerByIDBodyFormat } from "../../infrastructure/api/interface/request/bodyFormat/GetBeerByIDBodyFormat";
import { Beer } from "../entity/Beer";

export interface BeerRepository {
  getAllBeers(): Promise<Beer[]>;
  getBeerByID(numberID: GetBeerByIDBodyFormat): Promise<Beer | undefined>;
}
