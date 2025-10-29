"use strict";
import Persona from "./Persona.js";

export default class Alumno extends Persona{
    #anioMatriculado;
    #foto;

    constructor(nomApe,fechaNac,anio,foto){
        super(nomApe,fechaNac);
        this.#anioMatriculado=anio;
        this.#foto=foto;
    }

    get anioMatriculado(){
        return this.#anioMatriculado;
    }

    set anioMatriculado(value){
        if (typeof value != "number") throw "Error! El año de matriculación debe ser un número";
        if (value=="") throw "Error! El año de matriculación no puede estar vacío";
        if (value>new Date().getFullYear()) throw "Error! El año de matriculación no puede ser posterior al año actual.";

        this.#anioMatriculado=value;
    }

    get foto(){
        return this.#foto;
    }

    set foto(value){
        if (typeof value !="string") throw "Error! La foto debe ser una cadena";
        const cadena=value.split(".");
        if (cadena.length<2 || (cadena[cadena.length-1]!="jpg" && cadena[cadena.length-1]!="png")){
            this.#foto="./images/default.png";
        }else{
            this.#foto=value;
        }
    }
    
    toString(){
        return `<tr><td><img src='${this.#foto}'>${super.toString()} Año Matriculado=${this.#anioMatriculado}</td></tr>`;
    }
}