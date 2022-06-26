import LaunchVehicle from "./models/launchVehicle.js";
import Manned from "./models/manned.js";
import NotManned from "./models/notManned.js";

class Main{
  //Se crea una copia de las naves para mantener su integridad de los objetos cuando se busca y se filtra
  #spaceCrafts = [];
  #idSpaceCrafts = [];

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
    console.log(this.#spaceCrafts);
    this.initViews();
  }

  get spaceCrafts(){
    return this.#spaceCrafts;
  }
  get idSpaceCrafts(){
    return this.#idSpaceCrafts;
  }

  initViews(){
    this.#idSpaceCrafts = this.#spaceCrafts.map((val)=>val.id);
  }
  search(txt){
    this.#idSpaceCrafts = this.#spaceCrafts.map((val)=>{
      txt = txt.toLowerCase();
      if(val.name?.toLowerCase().includes(txt) || val.country?.toLowerCase().includes(txt) || val.type?.toLowerCase().includes(txt) || val.fuelType?.toLowerCase().includes(txt)) return val.id; //cambiar tambien por id 
    })
  }
  filter(filters){
    this.#idSpaceCrafts = this.#spaceCrafts.map((val)=>{
      if (filters.country && filters.speed) {
        if(val.country.toLowerCase() == filters.country.toLowerCase()){
          if (filters.speed == 1 && val.speed < 100) return val.id; //cambiar tambien por id
          else if (filters.speed == 2 && val.speed > 500) return val.id; //cambiar tambien por id
          else if (filters.speed == 3 && val.speed >= 100 && val.speed <= 500) return val.id; //cambiar tambien por id
        }
      }else if(filters.country && !filters.speed){
        if(val.country.toLowerCase() == filters.country.toLowerCase()) return val.id; //cambiar tambien por id
      }else if(filters.speed && !filters.country){
        if (filters.speed == 1 && val.speed < 100) return val.id; //cambiar tambien por id
        else if (filters.speed == 2 && val.speed > 500) return val.id; //cambiar tambien por id
        else if (filters.speed == 3 && val.speed >= 100 && val.speed <= 500) return val.id; //cambiar tambien por id
      }
    })
    if (!filters.country && !filters.speed) this.initViews();
  }
}

export default Main;