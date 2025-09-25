"use strict"; 

//PARA EXPLICAR EL ámbito o scope de una variable en funciones

//Se define una variable global al script
let mensaje='variable global';

//Definición mediante expresión de función
const mostrar=function(){
  //Esta función muestra en la consola el contenido de las variables mensaje y nombre
  let mensaje ='variable local';
  var nombre='Luis';
  console.log({mensaje}, {nombre});//muestra las variables locales a la función.
  //Si pongo las variables entre llaves, muestra más información por consola acerca del objeto
  //pero se puede poner sin {}
  //console.log(mensaje, nombre);
}

//cuerpo programa
mostrar();
console.log({mensaje});//es la variable global a la función.
//console.log({mensaje}, {nombre});//esto no funciona porque la variable nombre no existe en este ámbito (global del script)