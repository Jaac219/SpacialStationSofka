import LaunchVehicle from "./models/launchVehicle.js";
import Manned from "./models/manned.js";
import NotManned from "./models/notManned.js";

class Main{
  #spaceCrafts = [];

  //Se instancia una nueva nave espacial segun el tipo y se agrega al arreglo spaceCrafts que 
  //contiene todas las instancias de naves espaciales creadas
  setSpaceCraft(data){
    switch (data.type) {
      case "LaunchVehicle":
        this.#spaceCrafts = [...this.#spaceCrafts, new LaunchVehicle(data)]
        break;
      case "Manned":
        this.#spaceCrafts = [...this.#spaceCrafts, new Manned(data)]
        break;
      case "NotManned":
        this.#spaceCrafts = [...this.#spaceCrafts, new NotManned(data)]
        break;
    }
  }

  get spaceCrafts(){
    return this.#spaceCrafts;
  }
}

export default Main;