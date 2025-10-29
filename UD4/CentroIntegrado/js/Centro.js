"use strict";
import Profesor from "./Profesor.js";
import Grupo from "./Grupo.js";

export default class Centro{
    #nombre;
    #ciudad;
    #aComunidad=[];

    constructor(nombre,ciudad){

        this.#nombre=nombre;
        this.#ciudad=ciudad;
        this.#aComunidad=[[],[]];
    }

    get nombre(){
        return this.#nombre; 
    }

    get ciudad(){
        return this.#ciudad; 
    }

    set nombre(value){
        if (typeof value != "string") throw "Error! El nombre del centro debe ser una cadena";
        if (value=="") throw "Error! El nombre del centro  no puede estar en blanco";

        this.#nombre=value;
    }

    set ciudad(value){
        if (typeof value != "string") throw "Error! LA ciudad debe ser una cadena";
        if (value==""){
            this.#ciudad="Córdoba";
        }else{
            this.#ciudad=value;
        }
    }


    addComunidad(objeto){
        if (objeto instanceof Profesor){
            this.#aComunidad[1].push(objeto);
        }else{
            this.#aComunidad[0].push(objeto);
        }
    }

    toString(){
        let cadena="<table border='1'>"
        
        cadena+=`<tr><td><h1>${this.#nombre} en ${this.#ciudad}</h1></td></tr>`;
        
        cadena+=`<tr><td>Grupos</td></tr>`;
        console.log(this.#aComunidad[0]);
        if (this.#aComunidad[0]!=undefined){

            
                cadena+=this.#aComunidad[0].toString();
        
        }
        
        cadena+=`<tr><td>Profesores</td></tr>`;

        if (this.#aComunidad[1]!=undefined){
           
                cadena+=this.#aComunidad[1].toString();
       

        }


        cadena+="</table>"

        return cadena;
    }


}