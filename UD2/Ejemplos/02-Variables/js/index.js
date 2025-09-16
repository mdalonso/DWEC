"use strict"; //Obligatorio declarar variables y constantes
//declarar variables y constantes


//Las variables definidas con let son visibles dentro del ámbito en el que se declaran.

//nombre es una variable local al bloque. Como en este caso está fuera de cualquier bloque, será visible desde
//cualquier parte del código (igual que si la definiéramos con var)

let nombre="María";

//apellidos es una variable cuyo ámbito es una función (aún no hemos visto las funciones)
var apellidos="García";

//edad es una constante
const edad=23;
//Si intentamos asignar un nuevo valor a edad, se producirá un error.
//edad=34;

//En este caso, tanto las variables nombre y apellidos como la constante edad son visibles desde cualquier
//lugar del código porque no están definidas dentro de ningún bloque ni de ninguna función.



if (nombre==="María") {
    //Define otra constante edad distinta a la anterior
    const edad=30;
    //nombre es otra variable local diferente a la definida anteriormente
    let nombre="Jaime"

    // CÓMO MOSTRAR EL CONTENIDO DE LAS VARIABLES...
    //La variable apellidos es la misma que se definió fuera del if
    console.log("Se llama "+ nombre + " "+ apellidos  + " y tiene "+ edad + " años.");

    //Utilizando interpolación de variables ${expresión} y template strings
    console.log(`Se llama ${nombre} ${apellidos} y tiene ${edad} años.`);
}

//Muestra la cadena tomando los valores de las variables nombre, apellidos y edad definidas en primer lugar
console.log(`Se llama ${nombre} ${apellidos} y tiene ${edad} años.`);
