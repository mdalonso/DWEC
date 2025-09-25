"use strict"; 
//AsignaciÓn por Destructuring: esto nos va a permitir extraer datos de objetos o arrays y
//asignarlos a una variable.

//declaraciones
const animales=["perro", "gato", "ratón", "león"];

//Forma tradicional de extraer un elemento del array a una variable
const animalPerro=animales.at(0);

console.log({animalPerro});

//Extracción de elementos de un array mediante DESTRUCTURING

//const [animalPerroII]=animales; //almacenar el primer elemento
const [animalPerroII, animalGatoII]=animales; //almacena el primer y segundo elemento
//Para ignorar un elemento lo sustituímos por una ,
const [,,,animalUltimo]=animales; //extraer el cuarto elemento
const [,...animalesII]=animales; //extrae en un array desde el segundo elemento usando el operador SPREAD

console.log({animalPerroII});
console.log({animalGatoII});
console.log({animalUltimo});
console.table(animalesII);

//USO DE DESTRUCTURING PARA INTERCAMBIAR VALORES DE VARIABLES
let x = 2;
let y = 5;

console.log({x},{y});
[x,y] = [y,x];//Esto evita la declaración de variables intermedias
console.log({x},{y})