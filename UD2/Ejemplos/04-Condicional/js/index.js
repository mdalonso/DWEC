"use strict"; //Obligatorio declarar variables y constantes
//declarar variables y constantes globales

const numero = "123";
//El operador == convierte ambos valores a un tipo común, por lo que la comparación devuelve true
if (numero == 123) {
  console.log("Los números son iguales");
}
//El operador === devuelve false porque aunque numero contiene una cadena y 123 es un literal numérico.
if (numero===123) {
    console.log("Los números son iguales");
} else {
    console.log("Los números no son iguales"); 
}

//Si el bloque de código contiene una sola sentencia no se requieren las llaves {}
if (numero == 123) console.log("Los números son iguales");

//operador ternario
//Si numero===123 devuelve true, la variable resultado toma el valor 'Los números son iguales'
let resultado= numero===123?'Los números son iguales':'No son iguales';
console.log(resultado);