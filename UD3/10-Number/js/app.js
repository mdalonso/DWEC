"use strict";
//declaración de variables, constantes globales
const num1 = new Number(23),
      num2 = 23,
      numeroEjemplo= 123.456789;
let numDato;
//mostrar igualdad
console.log(num1 === num2 ? "son iguales" : "no son iguales");
console.log(`typeof num1 ${typeof num1} -  typeof num2 ${typeof num2}`);

//entrada de números, controlando que debe ser un número y no debe estar vacío
numDato =prompt("Introduzca un número");

while (isNaN(numDato) || numDato !== null && numDato.trim() === "") {
  //dato erróneo
  numDato = prompt("Error, debe ser un número\nIntroduzca un número");
}

if (numDato !== null) {
  console.log(
    `La suma del número ${numDato} +50 es= ${Number(numDato) + 50}`
  );
}

document.write(`<h1>Ejemplo del Objeto Number en JavaScript</h1>`);

// Usando toFixed() para formatear el número a un número específico de decimales
document.writeln(`<strong>Original:</strong> ${numeroEjemplo}<br>`);
document.writeln(`<strong>toFixed(2):</strong> ${numeroEjemplo.toFixed(2)}<br>`);
document.writeln(`<strong>toFixed(4):</strong> ${numeroEjemplo.toFixed(4)}<br><br>`);

// Usando toPrecision() para formatear el número a una precisión específica
document.writeln(`<strong>toPrecision(5):</strong> ${numeroEjemplo.toPrecision(5)}<br>`);
document.writeln(`<strong>toPrecision(2):</strong> ${numeroEjemplo.toPrecision(2)}<br><br>`);

// Usando toString() para convertir el número a una cadena
document.writeln(`<strong>toString():</strong> ${numeroEjemplo.toString()}<br>`);
document.writeln(`<strong>toString(2):</strong> ${numeroEjemplo.toString(2)} (en binario)<br>`);
document.writeln(`<strong>toString(16):</strong> ${numeroEjemplo.toString(16)} (en hexadecimal)<br><br>`);

// Mostrando las propiedades MAX_VALUE y MIN_VALUE
document.writeln(`<strong>Number.MAX_VALUE:</strong> ${Number.MAX_VALUE}<br>`);
document.writeln(`<strong>Number.MIN_VALUE:</strong> ${Number.MIN_VALUE}<br>`);
