"use strict";

import Produccion from "./produccion.js";
import Jurado from "./jurado.js";
import Participante from "./participante.js";

export default class Festival{
    
    #nombre;
    #ciudad;
    #edicion;
    #descripcion;
    aProducciones=[];
    aParticipantes=[[],[]];

    constructor(nombre,ciudad,edicion,descripcion){
        this.nombre=nombre;
        this.ciudad=ciudad;
        this.edicion=edicion;
        this.descripcion=descripcion;
    }
   
    set nombre(n){
        if (n.length<3) throw "El nombre del festival no debe ser inferior a 3 caracteres";
        if (n.length==0) throw "El nombre del festival no puede estar en blanco";

        this.#nombre=n;
    }
    set ciudad(c){
        if (c.length==0) throw "La ciudad no puede estar en blanco";
        this.#ciudad=c;
    }
    set edicion(e){
        if (typeof e !=="number" || e<=0) throw "La edición debe ser un número mayor que 0";
        this.#edicion=e;
    }
    set descripcion(d){
        if (d.length>=300) throw "La descripción no puede tener más de 300 caracteres";
        this.#descripcion=d;
    }

    introducirProduccion(produccion){
        if (!(produccion instanceof Produccion)) return false;

        const resultado=this.aProducciones.filter(produc=>produc.titulo==produccion.titulo);
        if (resultado.length==0){//no existe
            this.aProducciones.push(produccion);
            return true;
        }else{
            return false;
        }

       /*  if (this.aProducciones.includes(produccion)) return false;

        this.aProducciones.push(produccion);
        return true; */
    }
    
    eliminarProduccion(titulo){
        let resultado=false;
        let aAux=[];
        this.aProducciones.forEach(element => {
            if (element.titulo!==titulo) {
                aAux.push(element);
            }
            else resultado=true;
        });
        this.aProducciones=aAux;
        return resultado;
    }

    anadirParticipante(participante){
        //Un objeto de tipo JURADO también de tipo PARTICIPANTE por eso hay
        //que tomar como referencia la clase Jurado a la hora de discriminar
        //donde se va a insertar el objeto
          if (participante instanceof Jurado){
            this.aParticipantes[1].push(participante);
        }
        else{
              this.aParticipantes[0].push(participante);
          }
    }

    
    toString(){
        let cadena;
        cadena=`<tr><td colspan=4 align='center'><h1>Festival:${this.#nombre}</h1></td></tr>`;
        cadena+=`<tr><td colspan=2><strong>Ciudad: ${this.#ciudad}</td><td colspan=2><strong>Edición:</strong> ${this.#edicion}</td></tr>`;
        cadena+=`<tr><td colspan=4><strong>Descripción</strong>:<br> ${this.#descripcion}</td></tr>`;
        return cadena;
    }
    
}