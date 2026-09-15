"use strict"; //Obligatorio declarar variables y constantes

//declarar variables y constantes globales (fuera de cualquier bloque de código)
let nombre="María", numero;

//ACCEDER AL TIPO DE LAS VARIABLES (accedemos al tipo del valor contenido en la variable ya que
//la variable no se declara asociada a un tipo en particular)

//El tipo de la variable nombre es String.
console.log(`El tipo de la variable que contiene ${nombre} es ${typeof nombre}`);
//El tipo de la variable numero será undefined porque no se le ha asignado ningún valor.
console.log(`El tipo de la variable que contiene ${numero} es ${typeof numero}`);
//Una vez se le asigna un valor, el tipo de la variable numero es Number
numero=23;
console.log(`El tipo de la variable que contiene ${numero} es ${typeof numero}`);
//Si le asignamos un valor booleano, su tipo será Boolean
numero=true;
console.log(`El tipo de la variable que contiene ${numero} es ${typeof numero}`);
//Si le asignamos una cadena
numero="23";
console.log(`El tipo de la variable que contiene ${numero} es ${typeof numero}`);

//El operador + concatena cadenas. cadena1+=valor concatena el contenido de cadena1 con valor (convirtiéndolo
//previamente en cadena) y lo almacena en cadena1.
numero+=20;
console.log(`El tipo de la variable que contiene ${numero} es ${typeof numero}`);

//Probar las sentencias siguientes descomentando de una en una

numero=parseInt("32");//devuelve 32
//numero=parseInt("Numero 32");//devuelve NaN
//numero=parseInt("32 es un número");//devuelve 32
//numero=parseInt("32.5");//Devuelve 32

console.log(numero);

//Probar las sentencias siguientes descomentando de una en una
numero=parseFloat("32");//devuelve 32, no 32.0
//numero=parseFloat("32.5");//devuelve 32.5
//numero=parseFloat("32.5 es un número decimal");//devuelve 32.5
//numero=parseFloat("El número decimal es 32.5");//devuelve NaN

console.log(numero);

//Si se suma un número y un string, se devuelve una cadena. Para realizar la suma numérica hay que parsear
let nume1=4, nume2="6"
console.log(nume1+nume2,typeof (nume1+nume2));
console.log(nume1+parseInt(nume2),typeof (nume1+parseInt(nume2)));






