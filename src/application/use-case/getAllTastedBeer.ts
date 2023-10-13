export type GetAllBeersDependencies = {
  beerRepository: BeerRepository;
};

export const getAllBeers = async (deps: GetAllBeersDependencies) => {
  return await deps.beerRepository
    .getAllBeers()
    .then((serialisedBeers) => serialisedBeers.map((el) => PunkApiBeerDeserializer.deserializeBeer(el)));
};
