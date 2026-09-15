"use strict"; //Obligatorio declarar variables y constantes
//declarar variables y constantes globales

//La función prompt puede mostrar un valor por defecto en la caja de texto.
let numSemana = prompt("Introduzca nº del día de la semana [1-7]", "1");
let resultado;

//Aunque el valor es numérico, al ser introducido por el usuario mediante una caja de texto se considera string.
console.log(typeof numSemana);
switch (numSemana) {
  case "1"://como numSemana contiene una cadena, los valores de comprobación van entrecomillados.
    resultado = "Lunes";
    break;
  case "2":
    resultado = "Martes";
    break;
  case "3":
    resultado = "Miércoles";
    break;
  case "4":
    resultado = "Jueves";
    break;
  case "5":
    resultado = "Viernes";
    break;
  case "6":
    resultado = "Sábado";
    break;
  case "7":
    resultado = "domingo";
    break;
  default:
    resultado = "Dato erróneo. Debe estar entre 1-7";
    break;
}
console.log(`El día de la semana ${numSemana} es ${resultado}`);
