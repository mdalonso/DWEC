"use strict"

/** ORDEN DE DISPARO DE LOS EVENTOS
 * En este ejemplo tenemos un index.html en el cual tenemos dos áreas superpuestas.
 * Si pulsamos click sobre el área interna (Capa secundaria) también estamos haciendo click
 * sobre el área que la contiene (Capa principal). ¿Qué evento se dispara en este caso?
 * Existen dos modelos: Captura y Burbujeo.
 * CAPTURA: Se lanza primero el evento correspondiente a la capa principal y después el evento
 * correspondiente a la capa secundaria.
 * BURBUJEO: Sólo se lanzará el evento correspondiente a la capa secundaria 
 * En base a esto, W3C establece un modelo de eventos en dos fases: Fase de Captura y Fase de Burbujeo.
 * (Ver página 25 de los contenidos)
 * En la fase de captura, el evento atraviesa toda la jerarquía padre-hijo hasta llegar
 * al hijo sobre el que se ha producido el evento.
 * En este ejemplo, el evento pasa por la CAPA PRINCIPAL y después por la CAPA SECUNDARIA.
 * Cuando el evento va pasando por la jerarquía, se comprueba si hay un manejador asociado
 * a ese evento. Si existe y Captura=true, se captura el evento y se dispara.
 * Si Captura=false, el evento no se captura.
 */
window.addEventListener("DOMContentLoaded",()=>{
    //eventoCaptura();
    eventoBurbujeo();
})

//Se hace uso del tercer parámetro que puede recibir addEventListener. 
//Recordamos que era un valor booleano:
//- True: El elemento registrará el evento en la fase de captura


//MÉTODO DE CAPTURA
//En este caso, cuando se hace click sobre la capa secundaria, el evento pasa primero
// por la capa principal. Se comprueba si la capa principal tiene un manejador
// asociado a ese evento con la marca a true. En ese caso, 
// lanza primero el evento de la capa principal y después prosigue con el de la capa secundaria.
const eventoCaptura=()=>{
    //Como el parámetro es true, este evento se lanza primero.
    document.querySelector("#capaPrincipal").addEventListener("click", function(event){
        alert("Capa principal");
        //event.stopPropagation();//Se detiene la propagación y no se disparará el listener de la capa secundaria
    },true);
    document.querySelector("#capaSecundaria").addEventListener("click", function(){
        alert("Capa Secundaria");
    })
}
//MÉTODO BURBUJEO
//En este caso, al hacer click sobre la capa secundaria, se busca un elemento padre que tenga
//la marca a true, como no lo encuentra, se lanza directamente su evento y después se van lanzando
//los eventos de los padres (se va subiendo en la jerarquía, mientras que en el método de captura
//se va bajando)

const eventoBurbujeo=()=>{
    document.querySelector("#capaPrincipal").addEventListener("click", function(){
        alert("Capa principal")
    },false);//El false es el valor por defecto, por lo que no es necesario ponerlo.
    document.querySelector("#capaSecundaria").addEventListener("click", function(event){
        alert("Capa Secundaria");
        //Si quiere que el evento no se propague hacia los padres
        // (que es lo habitual), utilizo el método stopPropagation
        //Esto no se puede hacer en el método de captura.
        //event.stopPropagation(); //detiene el flujo del evento
    })
}