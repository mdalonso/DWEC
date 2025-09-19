/*ESTE EJEMPLO PERMITE ABRIR UNA VENTANA SECUNDARIA Y SÓLO UNA*/ 

"use strict"; //Obligatorio declarar variables y constantes
let ventana;
 

//crear funciones
//SOLO SE PERMITE ABRIR UNA ÚNICA VENTANA SECUNDARIA
function crearVentSec() {
  //Si la variable VENTANA no contiene nada (no ha recibido ninguna ventana mediante el método open) o está cerrada...
  if (ventana==undefined || ventana.closed){
  //Abrimos una nueva ventana cuyo name es "ventana"
    ventana = open("", "ventana", "heigth=200,width=200");
    //crear una etiqueta h1 y un botón en la ventana secundaria
    ventana.document.write("<h1>Ventana Secundaria</h1>");
    ventana.document.write("<button type='button' onclick='self.close();'>Cerrar ventana Sec</button>");
  
  }else{
    //Si la ventan secundaria contiene algo o bien no ha sido cerrada se lanza un aviso al usuario
    alert("La ventana secundaria ya está abierta") 
  }
}
//CIERRA LA VENTANA PRINCIPAL PERO SÓLO SI NO HAY NINGUNA VENTANA SECUNDARIA ABIERTA. 
function cerrarVentPrin() {
  if ( ventana==undefined ||ventana.closed){ 
    //Sólo se cierra la ventana principal si la ventana secundaria ha sido cerrada previamente
    //o bien aún no se ha abierto ninguna ventana secundaria.
      self.close(); //cerrar ventana principal
  }else {
    //Si hay una ventana secundaria abierta, se da al usuario la posibilidad de cerrarla
    //desde la misma acción de cerrar la ventana principal
    let resultado=confirm("Ventana secundaria abierta\n¿Desea cerrarla?");
    if (resultado){
      //if(confirm("Ventana secundaria abierta\n¿Desea cerrarla?")){//la comprobación se puede hacer directmente en el if, no hace flta almacenar la respuesta del usuario en una variable.
      //Si el usuario confirma que realmente quiere cerrar la ventana secundaria,
      //la cerramos mediante la variable ventana y cerramos la ventana principal.
      ventana.close(); //cerrar ventana secundaria
      self.close(); //cierra ventana principal
    }
  }
  
}
