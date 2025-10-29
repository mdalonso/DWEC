"use strict";

// import Persona from "./Persona.js";
import Profesor from "./Profesor.js";
import Alumno from "./Alumno.js";
import Grupo from "./Grupo.js";
import Centro from "./Centro.js";


try{
 
    let centro=new Centro("IES Trassierra","Córdoba");


    let grupo1=new Grupo("1º Desarrollo de Aplicaciones Web","1DAW",25);
    let grupo2=new Grupo("2º Desarrollo de Aplicaciones Multiplataforma","2DAM",23);

    let alumno1G1=new Alumno("Marta Villegas",new Date(1990,5,3),2022,"./images/default.png");
    let alumno2G1=new Alumno("Marta Sánchez",new Date(2001,7,5),2023,"./images/default.png");
    let alumno3G1=new Alumno("Daniel Marquez",new Date(2000,1,18),2024,"./images/default.png");
    
    

    if(!grupo1.altaAlumno(alumno1G1)){
        throw "No se ha podido insertar el alumno";
    }
    grupo1.altaAlumno(alumno2G1);
    grupo1.altaAlumno(alumno3G1);

    let alumno1G2=new Alumno("Juana Villegas",new Date(1991,5,3),2022,"./images/default.png");
    let alumno2G2=new Alumno("María Apellido",new Date(1980,7,5),2023,"./images/default.png");
    let alumno3G2=new Alumno("Nacho Capote",new Date(2003,1,18),2024,"./images/default.png");
    
    grupo2.altaAlumno(alumno1G2);
    grupo2.altaAlumno(alumno2G2);
    grupo2.altaAlumno(alumno3G2);

    centro.addComunidad(grupo1);
    centro.addComunidad(grupo2);

    let profesor1=new Profesor("Profesor Snape",new Date(1960,5,1),"Informatica",25);
    let profesor2=new Profesor("Profesor Dumbledore",new Date(1900,5,1),"Madera",30);
    let profesor3=new Profesor("Profesor McGonnagal",new Date(1951,5,1),"Mecanica",25);

    centro.addComunidad(profesor1);
    centro.addComunidad(profesor2);
    centro.addComunidad(profesor3);
    

    const capa=document.getElementById("mostrar");
    //console.log(centro.toString());
    capa.innerHTML=centro.toString();
 



  



}catch(error){
    console.log(error);
}