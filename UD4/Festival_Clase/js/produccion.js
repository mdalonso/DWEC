"use strict";

export default class Produccion{
    
    #titulo;
    #nacionalidad;
    #genero;
    #anio;

    constructor(titulo,nacionalidad,genero,anio){
        this.#titulo=titulo;
        this.#nacionalidad=nacionalidad;
        this.genero=genero;
        this.anio=anio;
    }
   
    get titulo(){
        return this.#titulo;
    }
    
    set genero(g){
        let cadena;
        if (g.length>0){
            cadena=g.charAt(0).toUpperCase();
            cadena+=g.slice(1).toLowerCase();
        }
        this.#genero=cadena;
    }

    set anio(a){
        if (typeof a != "number") throw "El año de producción debe ser un número";
        if (a<1999) throw "El año no puede ser anterior a 1999";
        this.#anio=a;
    }
   
    toString(){
        return `<tr><td><strong>Título:</strong> ${this.#titulo}</td><td><strong>Nacionalidad:</strong>${this.#nacionalidad}</td><td>Género: ${this.#genero}</td><td><strong>Año:</strong> ${this.#anio}</td></tr>`;
    }
    
}