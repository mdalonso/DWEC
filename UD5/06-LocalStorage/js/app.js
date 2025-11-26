"use strict"
//Gestión de estado de la navegación con LocalStorage
//Mismo ejemplo que en cookies pero utilizando LocalStorage
//localStorage es un objeto de la navegación que está asociado a una página.
//No se elimina a no ser que se fuerce o lo haga el usuario manualmente.

//MÉTODOS-------------
// - setItem :añade una dato (par clave, valor)
// - getItem : localiza un dato dentro del almacenamiento y devuelve su valor.
// - key : localiza un dato por su posición dentro de la colección localStorage (como en arrays)
// - removeItem : elimina un dato en base a su clave.
// - length: Número de datos almacenados.
// - clear : elimina el contenido de todo el almacenamiento.

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
//Para añadir un elemento a LocalStorage --> setItem(clave,valor)
const addCookie = () => {
    //Es conveniente codificar el valor.
    //Tanto clave como valor deben ser cadenas.
    localStorage.setItem(clave.value, encodeURIComponent(valor.value));
    //limpiar campos
    clave.value = "";
    valor.value = "";
}
//PAra localizar un elemento almacenado en LocalStorage --> getItem(clave)
//El elemento se localiza por la clave.
const findCookie = () => {
    valor.value = decodeURIComponent(localStorage.getItem(clave.value));
    if (valor.value == "" || valor.value==null) {
        valor.value = "cookie no existe"
    }
}

//Para acceder a la lista de cookies podemos hacerlo por su índice.
const listCookie = () => {
  
    let listar = "<h4>Listado de cookies</h4>"
    document.querySelector("#capa").innerHTML="";
    //LocalStorage se gestiona como una colección, por tanto tiene una propiedad length
    for (let index = 0; index < localStorage.length; index++) {
        //El método key(index) permite acceder a la clave en una posición de la colección localStorage
        //accediendo a esta posición mediante su índice
        //Este paso es necesario ya que getItem sólo puede acceder por la clave, no por el índice.
        document.querySelector("#capa").innerHTML += localStorage.key(index) + " = " + decodeURIComponent(localStorage.getItem(localStorage.key(index))) + "<br>"

    }

}
//Eliminar una cookie --> removeItem(clave)
const delCookie = () => {
    //Si la cookie existe...
    if(localStorage.getItem(clave.value)!=null){
        //...se elimina
        localStorage.removeItem(clave.value);
        valor.value = "cookie borrada";
    }else{
        valor.value = "cookie no existe";
    }
 
}