type BeerDepedencies = {
    id: number; 
    name: string;
}

export class Beer{

    public id: number;

    public name: string;

    public description?: string; 

    public urlImage?: string;

    public alcoholDegre?: number; 

    public bitternessLevel?: number; 

    public color?: string;
       
    constructor({id, name }: BeerDepedencies){
        this.id = id; 
        this.name = name;
    }

}