"use strict"
/** DESCRIPCIÓN
 * En este ejemplo tenemos un INDEX.HTML con formulario con dos elementos de entrada de datos
 * (input) y un botón (Ver index.html)
 * Nos va a servir para conocer distintas formas de acceder 
 * a los elementos contenidos en un formulario.
 */

//Tenemos una función acceso, sin parámetros de entrada que utiliza diferentes formas de acceder
//a los elementos de un formulario.
const acceso=()=>{
    //SELECCIÓN POR ID**************************************
    //Método getElementById: permite acceder al objeto del documento cuyo id es nombreId
    //const nombre=document.getElementById("nombreId");
    const nombre = document.querySelector("#nombreId");//Forma moderna de hacerlo
    console.log({nombre});
    
    /**** El uso de {} en el console permite:
     * - Desambiguar múltiples valores en la consola: En lugar de solo mostrar el valor de la variable, se muestra también el nombre de la clave, lo que facilita la lectura y depuración.
     * - Hacer más descriptiva la salida: Al inspeccionar varios valores en el mismo contexto, puedes identificar fácilmente qué variable está asociada con cada valor. */
    
    console.log(nombre instanceof Element); //Comprobamos que es un elemento de tipo Element

    //Una vez que lo tenemos localizado se pueden cambiar las propiedades del objeto.
    // La siguiente línea establece el objeto como un botón en lugar
    //de una caja de texto, tal y como está establecido en index.html (descomentar la línea para probarlo)
    //nombre.type="button" //(descomentar para probar)
    
    //la variable nombre, en definitiva, es un objeto de JS y como tal tiene un atributo value
    //value: Devuelve el contenido del objeto, en este caso la cadena escrita en la caja de texto.
    console.log(nombre.value);
    
//SELECCIÓN POR ATRIBUTO NAME **************************************
    //****Método getElementsByName: Permite acceder al objeto del document por el valor 
    //asignado en la propiedad name
    //En este caso, como hay dos elementos del document con el mismo nombre, devuelve una lista con los dos objetos.
    //Los objetos se van introduciendo en la lista por orden de aparición desde el nodo raíz del documento.
    const nombres=document.getElementsByName("nombre")
    //const nombres = document.querySelectorAll("[name='nombre']");//forma moderna de hacerlo
    console.log({nombres});
    
    //Pero sí que puedo acceder a cada elemento de esa lista a través de su índice
    //? actúa como operador de encadenamiento opcional --> Si nombres[1] existe (no es null ni
    //undefined), se ejecuta el .value. Si no existe, devuelve undefined. Esto evita errores de
    //ejecución.
    console.log(`Valor del segundo campo (by name): ${nombres[1]?.value}`);

//SELECCIÓN POR TAG (ETIQUETA HTML) **************************************
//Método getElementsByTagName: Permite acceder al objeto del documents por el tag (etiqueta HTML)*********
    const nombreTag=document.getElementsByTagName("input");
    //const nombreTag = document.querySelectorAll("input");//Forma moderna de hacerlo
//Hay dos elementos INPUT en el documento.
//mostrar elementos
//Como es una lista (objeto iterable implementado mediante un array) podemos determinar cuántos elementos hay
//mediante el atributo lenght
console.log(`Los elementos de nombreTag son ${nombreTag.length}`);
console.log({nombreTag});

//Y también podemos acceder al valor de uno de los elementos en particular mediante su índice.
//acceder al value de apellidos
console.log(`Valor del segundo input: ${nombreTag[1].value}`);

//SELECCIÓN POR CLASE **************************************
  const nombreClass =document.getElementsByClassName("controls")
  //const nombreClass = document.querySelectorAll(".controls");
  console.log({ nombreClass });
  console.log(`Valor de apellidos (by class): ${nombreClass[1].value}`); 

  //querySelectorAll devuelve una NodeList que tiene ventajas sobre las HTML Collections
  for (const elemento of nombreClass) {
    console.log(`El value es ${elemento.value}`);
  }
  /* nombreClass.forEach(elemento => { //El foreach no funciona con HTMLCollection pero sí con NodeList
    console.log(`El value es ${elemento.value}`);
  }); */

}

//script
acceso();