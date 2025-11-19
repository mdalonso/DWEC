"use strict";
//declaración de función
/**
 * Este ejemplo implementa el controlador para index.html en el cual encontramos dos formularios:
 * - frmFirst que contiene dos cajas de texto.
 * - frmSec que contiene el botón de envío del formulario.
 * Este documento html también tiene una zona <div></div> para mostrar datos.
 * Mediante este controlador ilustraremos el uso de las colecciones forms y elements.
 */

//como el botón submit está en el formulario 2, las acciones se llevarán a cabo en el submit
//de ese formulario. El botón submit lanza el evento submit del formulario en el que se encuentra
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("frmSec").addEventListener("submit", ejecutar);
});

const ejecutar = (e) => {
  //Localizamos la capa para mostrar la información.
  let mostrar = document.querySelector("#mostrar");

  //mostrar el nº de formularios del body
  //El document tiene una colección forms que devuelve un array con todos los formularios del documento,
  //en este caso 2.
  mostrar.innerHTML = `El nº de formularios es ${document.forms.length}`;

  //Cada formulario tiene una colección elements con todos los componentes del formulario.
  //mostrar el nº de elementos de cada formulario
  //Se puede acceder a cada formulario por su TagName, como a cuaquier otro elemento del document
  //Recordamos que getElementByTagName devuelve una colección con todos los elementos de ese tag.

  //Podemos también acceder a información diversa de cada formulario en cuestión:
  // - el id, mediante la propiedad id de cada elemento form (al cual estamos accediendo por índice)
  // - el número de elementos que contiene, a través de su colección elements (que devuelve
  //    un array con todos los elementos del formulario). Esta vez hemos accedido al formulario
  //    por su id.
  //Esta forma es muy poco general pero permite ilustrar el acceso.
  mostrar.innerHTML += `<br>Los elementos del ${
    document.querySelectorAll("form")[0].id
  } son ${document.querySelector("#frmFirst").elements.length}`;
  mostrar.innerHTML += `<br>Los elementos del ${document.forms[1].id} son ${
    document.querySelector("#frmSec").elements.length
  }`;
  
  //Una forma más general de hacerlo es utilizando un bucle para recorrer las colecciones
  
  //mostrar todos los elementos de los diferentes formularios que hay dentro del body
  //Dado que forms y elements son colecciones, podemos recorrerlas de forma más genérica con
  // un for-of
  for (let frm of document.forms) {
    //recorrer todos los formularios del body
    mostrar.innerHTML += `<hr><br><br>Formulario ${frm.id}`;
    //mostrar los elementos del formulario
    for (let ele of frm.elements) {
      //recorrer todos los elementos del formulario
      mostrar.innerHTML += `<br> El id es ${ele.id}`;
      mostrar.innerHTML += `<br> El type es ${ele.type}`;
      mostrar.innerHTML += `<br> El valor es ${ele.value}<br>`;
    }
 }
 //Dado que el elemento button, por defecto es de tipo submit, al pulsarlo se lanzará el 
 //evento submit. Como el formulario no tiene asociado un servidor para el tratamiento
 //de los datos, se producirá un error. Por ello, evitamos que se realize la acción por defecto
 //asociada al evento submit (envío de formulario)
  e.preventDefault();
};
