"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#cambiaContenido").addEventListener("click",cambiaContenido);
});

function cambiaContenido(){
    //Utilizamos fetch para acceder al archivo txt.
    //Por defecto se realiza un GET
    fetch("holamundo.txt")
    //El primer .then gestiona el resolve de la promesa que genera fetch
    //La función que se le pasa como parámetro recibe como parámetro de entrada
    //un objeto response
    //En este primer .then gestionamos la adquisición de los datos que vienen envueltos
    //dentro del objeto response.
    .then(response=>{
        console.log(response);
        if(!response.ok){
            throw new Error(`Error: ${response.status}`);
        }
        //Rescatamos los datos (esta vez en formato texto), que vienen envueltos
        //en el objeto response (el cual devuelve una promesa) para que sean gestionados en el 2º .then.
        return response.text();
    })
    //El segundo .then gestiona los datos propiamente dichos
    .then(data => {
        document.querySelector("#texto").innerHTML = data;
    })
    //Gestion del reject de la promesa que genera el fetch
    .catch(error =>{
        console.error("Error del servidor", error);
    })
}