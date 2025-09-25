"use strict"; 

//FORMAS DE REDUCIR EL ARRAY A UN SÓLO VALOR, POR EJEMPLO, LA SUMA DE SUS ELEMENTOS: método REDUCE
//declaraciones

const numeros=[20,3, 5, 7, 8, 100, 35];

//1- La forma más básica sería utilizando un bucle for

//2- suma los números del array con forEach
//RECORDATORIO: ForEach recibe como parámetro una función que se aplica a cada elemento del array.
//              El primer parámetro de esa función es el elemento del array al que se está aplicando la función.
//              En este caso, la variable numero.
let total=0;
numeros.forEach(numero => {
    total+=numero
});
console.log(`La suma del array números es ${total}`);

//3- método reduce 
//REDUCE permite aplicar una función reductora al conjunto de elementos del array.
//La función reductora recibe como primer parámetro una variable acumuladora y como segundo parámetro el elemento el array
//sobre el que se está aplicando la función.
//Puede recibir también un tercer parámetro que es el índice del elemento sobre el que se aplica la función y un 
//cuarto parámetro que es el array en sí mismo.
//La función reductora puede hacer lo que queramos, no solo sumar.
//El método reduce, puede recibir como segundo parámetro el valor inicial del acumulador.
const resultado=numeros.reduce((suma, numero)=>suma+numero);

console.log(`La suma del array números es ${resultado}`);