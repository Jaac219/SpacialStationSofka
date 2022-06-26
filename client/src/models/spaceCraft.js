class SpaceCraft{
    #name;
    #country;
    #type;
    #speed;
    #weight;
    #height;
    #fuelType;
    constructor(name, country, type, speed, weight, height, fuelType){
        this.#name = name;
        this.#country=country;
        this.#type=type;
        this.#speed=speed;
        this.#weight=weight;
        this.#height=height;
        this.#fuelType=fuelType;
    }
    get name(){return this.#name}
    get country(){return this.#country}
    get type(){return this.#type}
    get speed(){return this.#speed}
    get weight(){return this.#weight}
    get height(){return this.#height}
    get fuelType(){return this.#fuelType}

    takeOff(){
        return 'La nave ha despegado';
    }
    toLand(){
        return 'La nave ha aterrizado';
    }
}

export default SpaceCraft;