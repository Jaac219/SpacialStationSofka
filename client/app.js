// class Pelicula{
//   // Encapsulamiento
//   #nombre = "";
//   #id = 0;
//   constructor(nombre, id){
//     this.#nombre = nombre;
//     this.#id = id;
//   }

//   get nombre(){
//     return this.#nombre;
//   }
//   set nombre(newName){
//     this.#nombre = newName;
//   }

//   reproducir(){
//     return `Reproducir pelicula ${this.#id}`;
//   }
// }

// class Serie extends Pelicula{ 
//   constructor(nombre, id, apellido){
//     super(nombre, id);
//     this.apellido = apellido;
//   }
//   reproducirCapitulo(){
//     return `Reproducir capitulo... ${this.apellido}`
//   }

//   //Polimorfismo dinamico con sobreescritura (override)
//   reproducir(){
//     let vl = super.reproducir();
//     return vl + ` ` + this.apellido;
//   }

//   correr(vl){
//     return `Trotando ` + val;
//   }

//   correr(){
//     return `Corriendo`
//   }
// }

// let peli = new Serie('Johan', 1, 'arteaga');
// console.log(peli.correr(5));

import LaunchVehicle from "./src/models/launchVehicle.js";
import Manned from "./src/models/manned.js";
import NotManned from "./src/models/notManned.js";