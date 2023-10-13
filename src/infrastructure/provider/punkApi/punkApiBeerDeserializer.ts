import { Beer } from "../../../domain/entity/beer";

export class PunkApiBeerDeserializer {
  public static deserializeBeer(source: any): Beer {
    const deserializedBeer = new Beer({
      id: source.id,
      name: source.name,
    });
    deserializedBeer.description = source.description;
    deserializedBeer.url = source.image_url;
    deserializedBeer.alcoolDegree = source.abv;
    deserializedBeer.bitterness = source.ibu;
    deserializedBeer.color = source.ebc;

    return deserializedBeer;
  }
}
