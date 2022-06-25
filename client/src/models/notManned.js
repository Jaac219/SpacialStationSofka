import SpaceCraft from "./spaceCraft";
class NotManned extends SpaceCraft{
    #studyObjective;
    #state;
    #thrust;
    constructor({name, country, type, speed, weight, height, fuelType, studyObjective, state, thrust}){
        super(name, country, type, speed, weight, height, fuelType);
        this.#studyObjective=studyObjective;
        this.#state=state;
        this.#thrust=thrust;
    }
    get studyObjective(){return this.#studyObjective}
    get state(){return this.#state}
    get thrust(){return this.#thrust}
}

export default NotManned;