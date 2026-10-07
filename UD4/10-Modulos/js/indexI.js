"use strict";
//****************** MÓDULOS */
//Permiten partir el código en distintos archivos permitiendo su reutilización
//para diferentes proyectos o scripts
//propiedades y métodos privados

// ***************IMPORTAR UN MÓDULO

//Si quitamos el default en la exportación hay que importar Alumno con esta sintaxis
//import {Alumno} from "./modulo.js";//Quitar el comentario de esta línea y quitar el default en el export para probarlo
import {sumar} from "./modulo.js";//La función sumar no se importa porque no se utiliza.
//PepeLuis hace referencia a la clase Alumno del módulo, que está definida como default
import Alumno from "./modulo.js"; //Si exportamos alumno como default no necesita las {} y podemos darle el nombre que queramos

try {
    const alumno = new Alumno("Pepe", "Pérez Rodríguez", 23);
    console.log(alumno.nombre);
    
    alumno.edad = 20; //Esta línea va a lanzar un error
    //Se localiza el párrafo donde queremos mostrar los mensajes a través de su ID
    document.getElementById("mostrar").innerText=mensaje();//Se hace uso de la función mensaje, que ha sido importada del módulo
    console.log(saludo);//Se hace uso de la constante SALUDO que ha sido importada del módulo
} catch (error) {
    console.log(error);
}

//Además también se puede exportar un módulo que ha sido importado de otro módulo
//export {PepeLuis};//--> Esta línea funcionaría sin problema.
