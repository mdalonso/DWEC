"use strict"; 
//RECORRIDO DE UN ARRAY

//Se declara un array mixto de 5 elementos.
const numeros=[1,2,3,, "cinco"];

//VAMOS A CREAR FUNCIONES QUE RECORRAN EL ARRAY CON DIFERENTES TIPOS DE BUCLES.

//RECORRIDO CON UN BUCLE FOR (TRADICIONAL)
const recorrerFor=function(){//Se declara una función con una EXPRESIÓN DE FUNCIÓN.
    console.log('For tradicional');
    for (let index = 0; index < numeros.length; index++) {
        console.log(`${index}- ${numeros[index]}`);
    }
}

//RECORRIDO CON BUCLE FOR IN ESPECIAL IDEADO PARA RECORRER ARRAYS Y COLECCIONES DE OBJETOS
const recorrerForIn=()=>{//Se declara la función utilizando una FUNCIÓN FLECHA. Como la función no tiene parámetros, es necesario poner los paréntesis.
    console.log('For In');
    //index toma el valor del índice pero no de forma numérica, SINO QUE TRATA ELEMENTO DEL ARRAY COMO UN OBJETO CON UNA PROPIEDAD, que sería su valor.
    //Cada elemento del array se considera un objeto con una propiedad (el valor que contiene). La clave por la que se accede a esa propiedad es el índice
   //ESte tipo de bucle es más apropiado para recorrer las propiedades de un objeto pero también se puede usar para recorrer arrays
    //Este tipo de bucle ignora los elementos vacíos del array
    for (const index in numeros) {//en este caso index no es una variable numérica y se redefine en cada iteración, por eso se puede declarar con const
        console.log(`${index}- ${numeros[index]}`);
    }
}

//RECORRIDO CON OTRO FOR OF ESPECIAL. FOR OF RECORRE EL ARRAY A NIVEL DE ELEMENTO. 
//no se necesita un índice para recorrer el array sino que se accede a cada elemento en bloque.
const recorrerForOf=()=>{//Se declara la función utilizando una función flecha.
    console.log('For OF');
    for (const elemento of numeros) {
        console.log(` ${elemento}`);
    }
    //Este tipo de bucle sí recorre los elementos vacíos del array.
}

//RECORRIDO CON FOREACH.
//EJECUTA UNA FUNCIÓN POR CADA ELEMENTO DEL ARRAY. Esta función se puede definir como una función flecha.
const recorrerForEach=()=>{//Función que estamos creando
    console.log('For each');
    //El primer parámetro que se pasa a la función es el elemento del array y el segundo parámetro es su índice (se incrementa en cada iteración)
    //Se le puede pasar un tercer parámetro que es el ARRAY sobre el que se está aplicando el forEach
    numeros.forEach((elemento,index) => {//Función que le pasamos al forEach en forma de función flecha.
        console.log(`${index}- ${elemento}`);
    });//De este bucle no se puede salir con un BREAK (del resto sí). IGNORA LOS ELEMENTOS VACÍOS DEL ARRAY.
}

//script
//Llamamos a las tres funciones. Hay que hacerlo después porque este tipo de declaración no admite HOISTING
 recorrerFor();
 recorrerForIn();
 recorrerForOf();
 recorrerForEach();
