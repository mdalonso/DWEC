"use strict";
//Grabar un objeto en localStorage --> Utilizar JSON para convertirlo en un cadena
//el objeto JSON permite convertir objetos en cadena y viceversa.
let nombre, ape, edad
document.addEventListener("DOMContentLoaded", () => {
    nombre = document.querySelector("#nombreId");
    ape = document.querySelector("#apellidosId");
    edad = document.querySelector("#edadId");
    //establecer los eventos a los botones
    document.querySelector("#crear").addEventListener("click", crearC);
    document.querySelector("#listar").addEventListener("click", listarC);
    document.querySelector("#limpiar").addEventListener("click", ()=>{
        localStorage.clear();
    });
    
})

const crearC = () => {
    //Se crea un objeto con los valores introducidos
    //(Habría que hacer previamente las validaciones de datos)
    let objeto = {
        nom: nombre.value.trim(),
        ape: ape.value.trim(),
        edad: parseInt(edad.value)
    }
    //convertir objeto a cadena
    console.log(objeto)
    //STRINGIFY convierte el objeto JS en una objeto JSON que es un formato estándar para representar
    // datos estructurados en forma de texto. Este proceso de conversión se llama serialización
    objeto = JSON.stringify(objeto);
    console.log(objeto)
    //Almacenamos el objeto en el localStorage, codificándolo previamente.
    //Tenemos que decidir cuál será la clave. En este caso se construye una clave
    //que tiene la estructura "Persona+número de elementos almacenados en el localStorage"
    //El valor será todo el objeto serializado 
    localStorage.setItem("Persona" + (localStorage.length + 1), encodeURIComponent(objeto));

    //limpiar inputs
    for (let elemento of document.getElementsByTagName("input")) {
        elemento.value = ""
    }


}

//Acceder a los elementos de localStorage cuando estos son objetos
const listarC = () => {
    //El resultado se va a mostrar en el área CAPA del documento html
    document.querySelector("#capa").innerHTML = "";
    //Se recorre el localStorage por índice
    for (let i = 0; i < localStorage.length; i++) {
        //En cada iteración OBJETO contiene una cookie
        let objeto = localStorage.getItem(localStorage.key(i)); //string
        console.log(objeto);
        //convertir la cadena a objeto-->método parse del objeto JSON
        //En este proceso estamos parseando o desearializando convirtiendo un objeto JSON en un objeto JS
        let persona = JSON.parse(decodeURIComponent(objeto));
        console.log(persona);
        //Una vez parseada la cadena JASON en un objeto, podemos acceder a las propiedades del objeto
        document.querySelector("#capa").innerHTML += "Nombre= " + persona.nom + " Apellidos=" + persona.ape + " Edad=" + persona.edad + "<br>"

    }
}


