"use strict"; //Obligatorio declarar variables y constantes
//usando setInterval (la acción se repite periódicamente según el número de milisegundos especificado)
//Para el ejemplo alternaremos el color de fondo de la ventana entre verde y rojo de
//forma automatizada 

//Se abre una ventana secundaria con name="ventana"
let ventana= open("", "ventana", "height=200,width=200,top=400");
let intervalo;

//crear funciones
//La funcioón comenzar dispara el temporizador.
function comenzar() {
  //pasar el foco a la ventana secundaria
  ventana.focus();
  //crear temporizador. 
  //El temporizador llama a la función color cada 200 milisegundos.
  intervalo=setInterval(color,200);
}

//La función color alterna el color de fondo del documento entre verde y rojo
function color(){
    ventana.document.body.bgColor=="red"?ventana.document.body.bgColor="green": ventana.document.body.bgColor="red";
}

//La función parar detiene la ejecución automática.
function parar() {
  //clearInterval "limpia" el temporizador
  clearInterval(intervalo);
  //pasar el foco a la ventana secundaria
  ventana.focus();
}
