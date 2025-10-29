"use strict";

export default class Grupo{
    #nomGrupo;
    #grupo;
    #nAlumnos;
    #aAlumnos=[];

    constructor(nomGrupo,grupo,nAlumnos){
        this.#nomGrupo=nomGrupo;
        this.#grupo=grupo;
        this.#nAlumnos=nAlumnos;
    }

    get nomGrupo(){
        return this.#nomGrupo;
    }
    get grupo(){
        return this.#grupo;
    }
    get nAlumnos(){
        return this.#nAlumnos;
    }

    set nomGrupo(value){
        if (typeof value != "string") throw new Error("Error! El nombre del grupo debe ser una cadena");
        if (value=="") throw new Error("Error! El nombre del grupo no puede estar vacío");

        this.#nomGrupo=value.slice(0,1).toUpperCase()+value.slice(1).toLowerCase();
        //console.log(this.#nomGrupo);
        
    }

    set grupo(value){
        if (typeof value != "string") throw new Error("Error! El nombre abreviado del grupo debe ser una cadena");
        if (value.length!=4) throw new Error("Error! El nombre abreviado del grupo debe tener 4 caracteres");

        this.#grupo=value.toUpperCase();
    }

    set nAlumnos(value){
        if (typeof value != "number") throw new Error("Error! El número de alumnos debe ser una cantidad numérica");
        if (value<20||value>30) throw new Error("Error! El grupo debe tener entre 20 y 30 alumnos.");

        this.#nAlumnos=value;
    }

    toString(){
        let cadena=`<tr><td>${this.#nomGrupo} - ${this.#grupo} - nº Alumnos: ${this.#nAlumnos}</td</tr>`;

        for (let i=0;i<this.#aAlumnos.length;i++){
            cadena+=`${this.#aAlumnos[i].toString()}`;
        }

        return cadena;
    }

    altaAlumno(alumno){
        const pos=this.#aAlumnos.findIndex((elemento)=>elemento.nomApe==alumno.nomApe);
        if (pos<0){
            this.#aAlumnos.push(alumno);
            return true;
        }else{
            return false;
        }
    }

    eliminarAlumno(nomApe){
        if (this.#aAlumnos.some((elemento)=>elemento.nomApe==nomApe)){
            const pos=this.#aAlumnos.findIndex((elemento)=>elemento.nomApe==nomApe);
            this.#aAlumnos.splice(pos,1);
            return true;
        }else{
            return false;
        }
    }

    ordenarAlumnos(){
        this.#aAlumnos.sort((a,b)=>a.nomApe.localeCompare(b.nomApe));
    }




}