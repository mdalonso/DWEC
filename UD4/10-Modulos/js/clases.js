"use strict";
export const saludo="Hola caracola";

export const mensajes=()=>{
    return "Esto es un mensaje"
}

export default class Alumno{
    #nombre;
    #apellidos;
    #edad;
    constructor(nombre,apellidos,edad){
        this.#nombre=nombre;
        this.#apellidos=apellidos;
        this.#edad=edad;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(value){
        if (value!="") {
            this.#nombre=value;
        }else{
            throw "Error. El nombre no puede estar vacío";
        }
    }

    get apellidos(){
        return this.#apellidos;
    }
    set apellidos(value){
        if (value!="") {
            this.#apellidos=value;
        }else{
            throw "Error. Apellidos no puede estar vacío";
        }
    }
    get edad(){
        return this.#apellidos;
    }
    set edad(value){
        if (value>=18) {
            this.#edad=value;
        }else{
            throw "Error. La edad debe ser mayor a 18 años";
        }
    }

    toString(){
        return `Nombre: ${this.#nombre} \n Apellidos:${this.#apellidos} \n Edad:${this.#edad}`;
    }
}