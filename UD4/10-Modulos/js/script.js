"use strict";

import Estudiante from "./clases.js";
import {saludo} from "./clases.js";
import { mensaje } from "./modulo.js"

try{
    let pepe=new Estudiante("pepe","lopez",20);
    console.log(pepe.nombre);
    console.log(pepe.toString());
    pepe.nombre="José";
    console.log(pepe.toString());


}catch(error){
    console.log(error);
}

console.log(saludo);
console.log(mensaje());

export {Estudiante}; 