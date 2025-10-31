"use strict";

import Participante from "./participante.js";

export default class Jurado extends Participante{
    
    #profesion;
    #genero;

    constructor(nombre,edad,profesion,genero){
        super(nombre,edad);
        this.profesion=profesion;
        this.genero=genero;
    }
   
    set profesion(p){
        if (p.length<5) throw "La profesión debe tener al menos 5 caracteres";
        this.#profesion=p;
    }

    set genero(g){
        const generos=["h","m","l","g","t","b","i","q","a","+"];
        if (generos.indexOf(g)==-1) throw "El género especificado no está registrado. Valores válidos: h,m,l,g,t,b,i,q,a,+";
        this.#genero=g;
    }
   
    toString(){
        return `<tr><td><strong>Nombre:</strong> ${super.nombre}</td><td><strong>Edad:</strong> ${super.edad}</td><td><strong>Profesión: ${this.#profesion}</strong></td><td><strong>Edad:</strong> ${this.#genero}</td></tr>`;
    }
    
}