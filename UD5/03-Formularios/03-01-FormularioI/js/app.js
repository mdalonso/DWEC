"use strict";

/** Qué hace este ejemplo:
 * Al pulsar el botón Enviar, se carga información en la capa "mostrar"
 */

/** Evento SUBMIT: Es un evento de un formulario que se lanza cuando el formulario es enviado
 *                al servidor para el tratamiento de sus datos.
*                El evento submit se asocia directamente al objeto formulario.
 *               Este evento se lanza siempre que se pulsa un elemento de button de tipo submit
 * El tipo de elemento <button></button>, si se omite su propiedad type, por defecto tiene valor submit (envío de
 * formulario).
 * Además, este ejemplo ilustra cómo se accede al contenido de una caja de texto de un formulario a
 * través de diferentes propiedades
*/


//declaración de función
//Los evento se asocian al cargar el documento (evento DOMContentLoaded)
document.addEventListener("DOMContentLoaded", ()=>{
  const formulario=document.querySelector("#formBusqueda");
  //En lugar de asociar el controlador al botón en su click, lo haremos en el evento submit,
  //el cual se lanza por defecto al pulsar el botón debido a lo que se ha explicado más arriba.
  formulario.addEventListener("submit", ejecutar);
})

const ejecutar=(e)=> {
  
  //Objeto contiene el área donde queremos mostrar resultados
  let objeto=document.querySelector("#mostrar");

  //Cambiaremos el contenido de este área a través de su propiedad innerHTML (esta propiedad
  //interpreta la cadena que recibe como una cadena HTML generando los objetos en el DOM si
  //fuera necesario)
  //A diferencia de la propiedad innerText, que escribe la cadena literalmente sin interpretarla
  //(Quitar comentarios de las dos siguientes líneas para probarlo, primero a una y luego a la otra)
  objeto.innerHTML="";
  //objeto.innerHTML='<button class="botons" id="Enviar">Otro botón</button>';
  //objeto.innerText='<button class="botons" id="Enviar">Otro botón</button>';
  
  //diferentes formas de acceder al contenido de un elemento del formulario
  // (en este caso una caja de texto)

  //*** 1ª mediante el nombre del formulario y el nombre del elemento al que necesitamos acceder
  // (en este caso la caja de texto nombre) utilizando el operador .
  objeto.innerHTML += "Mediante operador . :"+document.formNameBusq.nombre.value;
  
  //Se puede utilizar esta forma tanto para rescatar el valor como para modificarlo
  // pasa al atributo value del input el valor Juan
  document.formNameBusq.nombre.value="Juan Juanez";

  //***2ª mediante la colección de elementos del formulario (elements), a través de su índice
  //¿Cuántos elementos tiene el formulario?
  objeto.innerHTML += `<br>Nº de elementos del formulario ${document.formNameBusq.elements.length}`
  //La caja de texto es el primer elemento de la colección.
  //Es la forma menos general
  objeto.innerHTML += `<br>Mediante la colección elements (índice): ${document.formNameBusq.elements[0].value}`;
  

  //***3ª mediante la colección de elementos del formulario, a través de la propiedad name
  //La propiedad FORMS del document devuelve una lista con todos los formularios contenidos 
  //en el document. Como solo hay uno, podemos acceder a través de su índice, pero también podemos
  //acceder mediante su nombre
  //Accedemos al formulario por su índice dentro de la colección form y a la caja de texto
  //utilizando su nombre para localizarlo dentro de la colección elements
  objeto.innerHTML += `<br>Mediante la colección elements (nombre): <br>${document.forms[0].elements["nombre"].value}`; //Esta también es correcta pero poco general
  //Accedemos al formulario por su nombre dentro de la colección form
  objeto.innerHTML += `<br>Mediante la colección elements:<br>${document.forms["formNameBusq"].elements["nombre"].value}`;

  //4ª Localizando la caja de texto mediante un selector
  //document.formNameBusq.nombre.value="Mediante el ID";
  objeto.innerHTML += `<br>Mediante un selector:<br>${document.querySelector("#nombreId").value}`;

  //El formulario se ha definido sin destino (action=""), por lo que si no anulamos la
  //acción por defecto asociada al evento submit, la página fallará
  e.preventDefault(); //anula el envío (evento)
}