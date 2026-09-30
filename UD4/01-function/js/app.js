"use strict"; 

//EJEMPLOS DE DECLARACIONES DE FUNCIONES


//DECLARACIÓN BÁSICA
function multiplicar(a){
  return (a*5)
}

//DECLARACIÓN COMO EXPRESIÓN DE FUNCIÓN
//b es un parámetro con valor por defecto. 
//Si no se le pasa nada como valor, utilizará como argumento el valor 1.
const multiplicarII=function(a, b=1){
  return a*b;
}

//DECLARACIÓN de Arrow functions
//Forma 1 de Arrow Function
const multiplicarIII=(a, b=1)=>{
  return a*b;
}
//Forma 2 de Arrow Function (la más simple)
const multiplicarIV=(a, b=1)=>a*b;

//Si sólo tiene un parámetro, se eliminan los paréntesis

const multiplicarIIV=a=>a*2;


//cuerpo script

console.log(multiplicar(2)); 
console.log(multiplicarII(4,5));
console.log(multiplicarIII(8,9));
console.log(multiplicarIV(10,10));
console.log(multiplicarIV(62));//Hacemos uso del parámetro por defecto
console.log(multiplicarIIV(10));
