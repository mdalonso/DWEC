"use strict"; 

//EJEMPLO DE HOISTING

/*LA ESTRUCTURA MÁS CORRECTA PARA EL CONTENIDO DE UNA FUNCIÓN PARA MAYOR CLARIDAD DE CÓDIGO ES ESTE
  //declaraciones de variables
 
  //declaraciones/expresiones de funciones

  //cuerpo del script

  Pero el HOISTING permite alterar esta estructura cuando definimos funciones en su forma básica
*/

/*PARA EXPLICAR EL EJEMPLO PRIMERO DECLARAR LAS FUNCIONES MULTIPLICARX*/

//hoisting permite usar funciones y variables antes de que se hayan declarado

console.log(multiplicar(2)); 
//Con estas funciones no se puede hacer hoisting (para que el script funciones hay que moverlas al final)
console.log(multiplicarII(4,5)); //expresión de función
console.log(multiplicarIII(8,9));//Arrow function
console.log(multiplicarIV(8,10));//arrow function

//declaración básica
function multiplicar(a,b=1){
  return (a*b)
}
//declaración con Expresión de función
const multiplicarII=function(a, b=1){
  return a*b;
}

//Arrow functions
const multiplicarIII=(a, b=1)=>{
  return a*b;
}
const multiplicarIV=(a,b=1)=>a*b;

//cuerpo script
/* las llamadas aquí sí funcionan para este tipo de funcione
//quitar los comentarios para probarlo
console.log(multiplicarII(4,5)); 
console.log(multiplicarIII(8,9));
console.log(multiplicarIV(8,10));
*/
