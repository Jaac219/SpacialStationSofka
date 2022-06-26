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

    changeState(){
        console.log(this.#state);
        if(this.#state == "active") this.#state = "inactive";
        else this.#state = "active";
        return this;
    }
    toLand(){
        return 'La asistencia de piloto automatico para el aterrizaje se ha activado';
    }
}

export default NotManned;