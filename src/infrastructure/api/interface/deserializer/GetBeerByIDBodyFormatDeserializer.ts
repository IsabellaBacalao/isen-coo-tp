import { GetBeerByIDBodyFormat } from "../request/bodyFormat/GetBeerByIDBodyFormat";

export class GetBeerByIDBodyFormatDeserializer {
  public static deserializeGetBeerByIDBodyFormat(source: any): GetBeerByIDBodyFormat {
    const getBeerByIDBodyFormatDTO = new GetBeerByIDBodyFormat({ beerID: source.beerID });
    return getBeerByIDBodyFormatDTO;
  }
}
