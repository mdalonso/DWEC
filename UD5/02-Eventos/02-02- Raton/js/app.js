"use strict"
/**
 * ESTABLECIMIENTO DE VARIOS EVENTOS DE RATÓN
 * Pertenecen a la clase MouseEvent, la cual hereda de Event
 * 
 * - mouseover: meter el cursor del ratón dentro del área del objeto.
 *      Cuando esto ocurra, el fondo del input cambiará a color azul.
 * - mouseout: sacar el cursor del ratón fuera del área del objeto. Cuando esto ocurra
 *      el fondo del input cambiará al color establecido por defecto en la hoja de estilos
 * - click: hacer click en el objeto (se lanza después del mousedown y el mouseup)
 *      Cuando esto ocurra, el fondo del input cambiará a color verde.
 * - mousedown: mantener el botón pulsado.
 *      Este evento se combinará con el mousemove para que el fondo sea rojo mientras
 *      el botón izquierdo está pulsado y movemos el ratón
 * - mousemove: mover el ratón sobre el objeto
 * - mouseup: soltar el botón pulsado previamente
 */

let pintar=false;//esta variable nos permitirá combinar los eventos mousedown y mousemove


//Asociaremos los eventos a los objetos una vez se haya cargado el documento (Evento DOMContentLoaded)
window.addEventListener("DOMContentLoaded", ()=>{
    establecerEvent()
})

//La siguiente función es la que asocia los eventos a los componentes
const establecerEvent=()=>{
    //Los eventos van a ser establecidos sobre los campos de texto (INPUT)
    const elementosInput =document.querySelectorAll("input")
    console.log("Imputs encontrados:",{elementosInput});

    //Recorremos la lista de elementos de tipo INPUT, que en este caso son 2.
    for (const element of elementosInput) {
        //Cuando metamos el cursor en el área del campo de texto, el fondo cambiará de color.
        element.addEventListener("mouseover",function(){
            //this hace referencia al objeto del evento. Equivale a e.target
            this.style.background="#608ae5";
        })
        //Cuando saquemos el cursor del área del campo de texto, el fondo volverá al valor por defecto (el establcido en la
        //platilla CSS).
        element.addEventListener("mouseout",function(){
            this.style.background="";
        })
        //Cuando hagamos click en el área del campo de texto, el fondo cambiará de color a verde
        //Recordatorio: El evento click se lanza después del mousedown y el mouseup
        element.addEventListener("click",function(){
            this.style.background="green";
        })

        //Este evento se combina con el evento mousedown a través de la variable pintar
        element.addEventListener("mousemove", function() {
            //Si mientras el ratón se está moviendo, a la vez está pulsado el botón izquirdo (pintar=true)
            if(pintar) { //pinta cuando el ratón se mueve y el botón pulsado es el izquierdo
                this.style.background="red"
            }       
                
         
        }) 
        //establecer el evento mousedown
        
        //Cuando mantengamos el botón izquierdo del ratón pulsado sobre la caja de texto
        //estableceremos ciertas condiciones que van a condicionar el evento del movimiento de ratón
        //En este caso, pasamos como parámetro a la función, el evento que lo lanza para poder
        //examinar algunas de sus propiedades. El evento es un MouseEvent
        element.addEventListener("mousedown", function(e) {
            console.log(e);
            //buttons es una propiedad de MouseEvent que devuelve los botones que se han pulsado
            //Lo que hace es combinar valores asignados a los distintos botones.
            if (e.buttons==1){ //botón izquierdo
              pintar=true;//Establecemos a true la variable que establece la condición    
           }
        }) 
        //Cuando suelto el botón del ratón, desaparece a condición para que sólo se ponga de color rojo
        //cuando tenga el botón pulsado.
        element.addEventListener("mouseup", function(event) {
              pintar=false;    

        }) 
    }
        
    
    
}