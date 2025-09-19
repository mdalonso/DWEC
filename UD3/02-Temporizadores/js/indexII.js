"use strict"; //Obligatorio declarar variables y constantes
//setTimeout establece un temporizador que permite realizar una acción en diferido
//según el tiempo programado una sola vez.
let ventana= open("", "ventana", "height=200,width=200");
let intervalo;

//crear funciones
function comenzar() {
  //pasar el foco a la ventana secundaria
  ventana.focus();
  //crear temporizador. Dentro de 500 milisegundos se ejecuta la función color()
  intervalo=setTimeout(color,2000);
}

//La función color alterna el fondo de la ventana secundaria entre verde y rojo.
function color(){
  if(ventana.document.body.bgColor=="red"){
    ventana.document.body.bgColor="green";
  }else{
    ventana.document.body.bgColor="red";
  }
}

function parar() {
  //"limpiaa" el temporizador aunque para ver el efecto hay que poner un lapso de tiempo
  //mayor en la definición del mismo (probamos a poner 2000)
  clearTimeout(intervalo);
  //pasar el foco a la ventana secundaria
  ventana.focus();
}
