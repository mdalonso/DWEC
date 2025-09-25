"use strict";
//declariones de variables

//declaraciones de funciones

//cuerpo del script
console.log(multiplicar(3,6));//la llamada sí es correcta porque se aplica HOISTING

function multiplicar(a,b=1){
    return(a*b);
}

//console.log(multiplicarI(4,4)); //esto no es correcto porque aún no se ha definido la función
const multiplicarI=function(a,b=1){
    return a*b;
}
//console.log(multiplicarII(6,4));//esto no es correcto porque aún no se ha definido la función
const multiplicarII=(a,b=1)=>a*b;

console.log(multiplicar(4,5));
console.log(multiplicarI(4,4));
console.log(multiplicarII(6,4));
