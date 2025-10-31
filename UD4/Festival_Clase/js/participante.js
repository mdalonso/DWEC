"use strict";

export default class Participante{
    
    #nombre;
    #edad;

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    
    get nombre(){
        return this.#nombre;
    }
    set nombre(n){
        this.#nombre=n;
        if (n.length<3) this.#nombre+="...";
    }
    get edad(){
        return this.#edad;
    }
    set edad(e){
        if (isNaN(e) || e==="" || e===null || e===undefined) throw "La edad debe ser un número";
        this.#edad=e;
        if (this.#edad<18) this.#edad=18;
    }
   
    toString(){
        return `<tr><td colspan=2><strong>Nombre:</strong> ${this.#nombre}</td><td colspan=2><strong>Edad:</strong> ${this.#edad}</td></tr>`;
    }
    
}