import SpaceCraft from "./spaceCraft";
class LaunchVehicle extends SpaceCraft{
    #potency;
    #propulsionSystem;
    #payloadWeight;
    constructor({name, country, type, speed, weight, height, fuelType, potency, propulsionSystem, payloadWeight}){
        super(name, country, type, speed, weight, height, fuelType);
        this.#potency=potency;
        this.#propulsionSystem=propulsionSystem;
        this.#payloadWeight=payloadWeight;
    }
    get potency(){return this.#potency}
    get propulsionSystem(){return this.#propulsionSystem}
    get payloadWeight(){return this.#payloadWeight}
}

export default LaunchVehicle;