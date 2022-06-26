import SpaceCraft from "./spaceCraft";
class LaunchVehicle extends SpaceCraft{
    #potency;
    #propulsionSystem;
    #payloadWeight;
    constructor({id, name, country, type, speed, weight, height, fuelType, potency, propulsionSystem, payloadWeight}){
        super(id, name, country, type, speed, weight, height, fuelType);
        this.#potency=potency;
        this.#propulsionSystem=propulsionSystem;
        this.#payloadWeight=payloadWeight;
    }
    get potency(){return this.#potency}
    get propulsionSystem(){return this.#propulsionSystem}
    get payloadWeight(){return this.#payloadWeight}

    refuel(){
        return 'El tanque esta lleno de combustible';
    }
}

export default LaunchVehicle;