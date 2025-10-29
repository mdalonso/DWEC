"use strict";

export default class Persona{
    #nomApe;
    #fechaNac;

    constructor(nomApe,fechaNac){
        this.#nomApe=nomApe;
        this.#fechaNac=fechaNac;
    }

    get nomApe(){
        return this.#nomApe;
    }

    set nomApe(value){
        if (typeof value != "string") throw "Error. El nombre debe ser una cadena";
        if (value.length<5) throw "Error. El nombre debe tener una longitud mínima de 5 caracteres";
        
        this.#nomApe=value.toUpperCase();
    } 

    get fechaNac(){
        return this.#nomApe;
    }

    set fechaNac(value){
        if (!value instanceof Date) throw "Error. La fecha de nacimiento debe ser un valor de tipo fecha";
        if (value<new Date(1963,1,1) || value >new Date(2022,11,31)) throw "Error. La fecha debe estar comprendida entre el 01/04/1963 y el 31/12/2022";
 
        this.#fechaNac=value;
    }
    
    toString(){
        return `${this.nomApe} Fecha de Nacimiento=${this.#fechaNac.toLocaleDateString()}`
    } 
}




