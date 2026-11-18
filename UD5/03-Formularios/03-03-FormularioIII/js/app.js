"use strict";
//FORMULARIOS DINÁMICOS
//Activación 
let form,expediente,salida;

document.addEventListener("DOMContentLoaded",()=>{
  form = document.forms.inscripcion;//acceso al formulario por name
  expediente = form.elements.expediente; //Acceso a la caja de texto con el número de expediente
  salida = document.querySelector('#salida');//Selección de la caja de texto para escribir la salida

  // Al marcar o desmarcar la casilla se habilita o deshabilita el expediente
  form.elements.esAlumno.addEventListener('change', (e) => {
    expediente.disabled = !e.target.checked;//Si el checkbox está marcado la caja de texto del expediente se activa

    if (expediente.disabled) {//Si se deshabilita se limpian posibles datos
      expediente.value = '';   // no dejar datos "fantasma" de un campo que ya no aplica
    } else {//Si lo activamos le damos el foco para que el usuario lo rellene
      expediente.focus();      // llevamos al usuario al campo que acaba de aparecer
    }
    mostrarEstado();
  });

  

      // reset devuelve la casilla a su estado inicial; hay que volver a deshabilitar el campo.
      // setTimeout: el evento reset se lanza ANTES de que los controles recuperen sus valores, por eso lo aplazamos
  form.addEventListener('reset', () => {
    //setTimeout fuerza a que el código que encierra se pnga a la cola de lo que hay que ejecutar
    //es decir, primero se limpian los controles y luego se ejecuta el código del setTimeout.
    //De no poner el setTimeout, se lanza el evento, ejecutando el código y luego se limpian los controles.
     setTimeout(() => {
       expediente.disabled = !form.elements.esAlumno.checked;
       mostrarEstado();
     });
  });
  mostrarEstado();
});
   

    // Muestra el estado del campo expediente
    function mostrarEstado(titulo = 'Estado actual') {
      salida.textContent = [
        titulo,
        `expediente.disabled      → ${expediente.disabled}`,
        `expediente.willValidate  → ${expediente.willValidate}   (false = no participa en la validación)`,
        //`expediente.validity.valid → ${expediente.validity.valid}`
      ].join('\n');
    }

   

    