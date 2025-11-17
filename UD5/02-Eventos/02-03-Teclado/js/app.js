"use strict"
/**
 * Este ejemplo ilustra la captura de diferentes eventos de teclado sobre los objetos de un
 * formulario.
 * Los eventos de teclado pertenecen a la clase KeyBoardEvent, la cual hereda de Event
 * - keydown: Se lanza cuando se pulsa cualquier tecla independientemente de que esa pulsación
 *              produzca un caracter o no.
 * - keypress (Deprecated): Se lanza al pulsar una tecla que devuelve un carácter alfanumérico o el espacio.
 *              Distingue entre mayúsculas y minúsculas Por ejempo code(a)=97 y code (A)=65. KeyDown y Keyup
 *              no distinguen por lo que hay que controlar si también se ha pulsado shift a la vez
 *              mediante las propiedades del evento.
 * - keyup: Se lanza cuando se suelta una tecla (es el opuesto a keydown)
 * - input: Se lanza cuando se produce un cambio en el contenido del objeto (no todas las teclas producen cambios)
 */

window.addEventListener("DOMContentLoaded", ()=>{
    establecerEvent();
})

const establecerEvent=()=>{
    //Se localizan todos los elementos INPUT para asociarles los eventos a todos ellos.
    //elementosInputs contiene una colección de objetos de tipo Element.
    const elementosInput =document.querySelectorAll("input")
    for (const element of elementosInput) {
        
        //***Evento KEYDOWN:
        element.addEventListener("keydown",function(event){
            //al pulsar una tecla se imprime por consola el contenido del elemento
            //Vemos también el objeto evento (KeyboartdEvent) que ha sido lanzado con todas sus propiedades.
            console.log(`keydown->  ${element.value}`,event);

            //Entre las propiedades del evento podemos ver key, que devuelve el valor de carácter de
            //la tecla que ha sido pulsada y el código interno que utiliza js para 
            //identificar a la tecla (puede variar entre navegadores y plataformas), entre otras.

            //Podemos utilizar las propiedades del evento para controlar la entrada de datos
            //Por ejemplo, para que sólo se puedan teclear caracteres alfabéticos.
            if (!(event.code.startsWith("Key") || event.code.startsWith("Space") || event.code.startsWith("Bac"))){
                //Si no es un carácter alfabético, se anula el efecto que tiene el evento (imprimir el carácter).
                event.preventDefault()
            }
            //El siguiente código hace que sólo se admitan números.
            /* if (event.code.startsWith('Digit')){
                     event.preventDefault()
             } */

        })

       
        //***Evento KEYUP: Cuando se suelta una tecla
        element.addEventListener("keyup",function(event){
            console.log(`keyup -> ${element.value}`,event);
        })

        //***Evento INPUT: se produce un cambio en el input text
        //Por ejemplo: pulsar una tilde no produce un cambio en el contenido y por tanto no se
        //lanza este evento (lo mismo con la tecla Scape y otras)
        //El evento INPUT se lanza antes que el keyDown
        element.addEventListener("input",function(event){
            console.log(`input ->  ${element.value}`,event);
            
        })
        
    }
        
    
    
}
