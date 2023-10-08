import axios, { AxiosInstance } from "axios";
import { Beer } from "../../domain/entity/beer";
import { BeerRepository } from "../../domain/repository/beer-repository"

export class PunkAPIBeerRepository implements BeerRepository {

    private http: AxiosInstance; 

    constructor(){
    }

    getAllBeers(): Promise<Beer[]>{
        throw new Error("Method not implemented.");
    }
}