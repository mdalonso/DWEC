"use strict"; 
//Insertar datos al array al final y al principio del array.

//DECLARAMOS UN ARRAY MIXTO
const numeros=[1,2,3,4, "cinco"];


//script
//insertar un elemento al final. 
//Podemos hacerlo de dos formas
//1. Usando el valor de la longitud como índice
numeros[numeros.length]=6;
console.table(numeros);
//2. Mediante el método PUSH
numeros.push(7);//Inserta el valor 7 como un nuevo elemento al final del array.
console.table(numeros);

//insertar un elemento por delante del primer elemento del array mediante el método UNSHIFT
numeros.unshift(true);

console.table(numeros);