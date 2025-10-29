"use strict";
import Persona from "./Persona.js";

export default class Profesor extends Persona{
    #especialidad;
    #antig;
    constructor(nomApe,fechaNac,especialidad,antig){
        super(nomApe,fechaNac);
        this.#especialidad=especialidad;
        this.#antig=antig;
    }

    get especialidad(){
        return this.#especialidad;
    }

    set especialidad(value){
        const esp=["informatica","mecanica","electronica","cocina","madera"];
        if (typeof value!="string") throw "Error! La especialidad debe ser una cadena";
        if (esp.find(valor=>valor==value.toLowerCase())==undefined) throw "Error! La especialidad debe ser Informática, Mecánica, Electrónica, Cocina o Madera";

        this.#especialidad=value;
    }
    get antig(){
        return this.#antig;
    }

    set antig(value){
        if (typeof value!="number") throw "Error! La antigüedad debe ser un número";
        if (value<1 || value>35) throw "Error! La antigüedad debe estar comprendida entre 1 y 35";

        this.#antig=value;
    }

    toString(){
        //return `${super.toString()} Especialidad ${this.#especialidad} antigüedad=${this.#antig} años`;
        return `<tr><td>${super.toString()} Especialidad=${this.#especialidad} antigüedad= ${this.#antig} años</td></tr>`;
    }
}

