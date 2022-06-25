import SpaceCraft from "./spaceCraft";
class Manned extends SpaceCraft{
    #objective;
    #peopleCapacity;
    #distanceFromEarth;
    constructor({name, country, type, speed, weight, height, fuelType, objective, peopleCapacity, distanceFromEarth}){
        super(name, country, type, speed, weight, height, fuelType);
        this.#objective=objective;
        this.#peopleCapacity=peopleCapacity;
        this.#distanceFromEarth=distanceFromEarth;
    }
    get objective(){return this.#objective}
    get peopleCapacity(){return this.#peopleCapacity}
    get distanceFromEarth(){return this.#distanceFromEarth}
}

export default Manned;