"use strict";

const num1=new Number(23),num2=23;
const num3=10.852326;
let numDato;

console.log(num1==num2);
console.log(num1===num2);
console.log(`Tipo de num1 ${typeof num1} - Tipo de num2 ${typeof num2}`);

// numDato=prompt("Introduce un número:");
// while(isNaN(numDato) || numDato!==null && numDato.trim()===""){
//     numDato=prompt("Error. Debes introducir un numero valido:");
// }

console.log(num1+7);
console.log(num3.toFixed(3));
console.log(num3.toPrecision(5));

console.log(num1.toString(2));
console.log(num1.toString(16));
console.log(num1.toString());





