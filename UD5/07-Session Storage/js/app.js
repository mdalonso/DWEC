"use strict"
//Funciona exactamente de la misma manera que localStorage
//La persistencia de la información es menor.
//La información se elimina cuando se cierra el navegador.

//declaración variables, funciones y eventos
let clave, valor;
document.addEventListener("DOMContentLoaded", () => {
    //establecer objetos
    clave = document.querySelector("#clave");
    valor = document.querySelector("#valor");

    //eventos 
    document.querySelector("#crear").addEventListener("click", addCookie);
    document.querySelector("#buscar").addEventListener("click", findCookie);
    document.querySelector("#listar").addEventListener("click", listCookie);
    document.querySelector("#eliminar").addEventListener("click", delCookie);
})
const addCookie = () => {
    sessionStorage.setItem(clave.value, encodeURIComponent(valor.value))
    //limpiar campos
    clave.value = "";
    valor.value = "";

}
const delCookie = () => {
    if(sessionStorage.getItem(clave.value)!=null){
        sessionStorage.removeItem(clave.value);
        valor.value = "cookie borrada";
    }else{
        valor.value = "cookie no existe";
    }
    
        
    
}
const findCookie = () => {
    valor.value = decodeURIComponent(sessionStorage.getItem(clave.value));
    if (valor.value == "" || valor.value==null) {
        valor.value = "cookie no existe"
    }


}
const listCookie = () => {
    let listar = "<h4>Listado de cookies</h4>"
    document.querySelector("#capa").innerHTML="";
    for (let index = 0; index < sessionStorage.length; index++) {
        document.querySelector("#capa").innerHTML += sessionStorage.key(index) + " = " + decodeURIComponent(sessionStorage.getItem(sessionStorage.key(index))) + "<br>"

    }

}