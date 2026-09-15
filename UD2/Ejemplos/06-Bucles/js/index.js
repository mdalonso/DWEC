"use strict"; //Obligatorio declarar variables y constantes
//declarar variables y constantes globales
let numero,total = 1;

//bucle for
for (let index = 0; index < 20; index++) {
  console.log(`El número es ${index}`);
}

//bucle do...while
do {
  //recogida de datos
  //Parseamos el valor introducido por el usuario porque vamos a realizar operaciones aritméticas
  numero = parseInt(prompt("do-while: Introduzca un número 0->Fin"));
  //Como 0 es la condición de salida, no se realiza la operación si el usuario ha introducido un 0 en
  //la primera solicitud de info.
  if (numero != 0) {
    total *= numero;
  }
} while (numero != 0);
console.log(`El resultado de la operación es ${total}`);


//Utilizar bucle while
total=1;//Inicializamod de nuevo el acumulador
numero = parseInt(prompt("while: Introduzca un número 0->Fin"));
while (numero != 0) {
  total *= numero;
  numero = parseInt(prompt("Introduzca un número 0->Fin"));
}
console.log(`El resultado de la operación es ${total}`);
