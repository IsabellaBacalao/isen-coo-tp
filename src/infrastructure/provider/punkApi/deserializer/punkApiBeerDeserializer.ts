import { Beer } from "../../../../domain/entity/Beer";
import { beerColorIntensityDeserializer } from "./beerColorIntensityDeserializer";

// function edcDeserialize(edcNeedle: number) {
//   BeerColorIntensity[
//     Object.values(BeerColorIntensity)[ebcIndex.findIndex((edcValue) => edcNeedle < edcValue)] as BeerColorIntensity
//   ];
// }

export class PunkApiBeerDeserializer {
  public static deserializeBeer(source: any): Beer {
    const beerDTO = new Beer({
      id: source.id,
      name: source.name,
    });
    beerDTO.description = source.description;
    beerDTO.url = source.image_url;
    beerDTO.alcoolByVolume = source.abv;
    beerDTO.bitterness = source.ibu;
    beerDTO.color = beerColorIntensityDeserializer(source.ebc);

    return beerDTO;
  }
}
