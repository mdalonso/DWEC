"use strict"; 
//eliminación de elementos del array


//declaraciones
const numeros=[1,2,3,4, "cinco"];


//script
console.log(numeros);
//FORMAS DE ELIMINAR UN ELEMENTO DE UN ARRAY
//1. CON DELETE 
delete numeros[2]; //no es operativo ya que borra el dato pero el espacio de memoria perdura
console.log(numeros); //podemos comprobar en la consola que se mantiene en longitud 5 y aparecerá un valor empty

//2. Eliminar el último con POP
console.log(numeros.pop());//El método POP devuelve el último elemento y lo elimina del array. Hace que el array pueda funcionar como una pila junto con PUSH
console.log(numeros);

//3. Eliminar el primero con SHIFT
console.log(numeros.shift());//El método SHIFT junto con el método PUSH puede hacer que el array funcione como una cola.
console.log(numeros);

//4. Eliminar el elemento que se encuetra en una posición específica de forma correcta.(SPLICE)
//Extrae desde la posición inicial tantos elementos como se indiquen en el segundo argumento.
//Devuelve un array con los elementos que se han extraído.
console.log(numeros.splice(1,1));//Esto elimina el elemento vacío
console.log(numeros);

//SPLICE TAMBIÉN PERMITE AÑADIR FÁCILMENTE ELEMENTOS EN MITAD DE UN ARRAY (INSERTAR) O ELIMINAR E INSERTAR
//La siguiente línea elimina el elemento que se encuentra en la posición 1 y después añadir elementos
numeros.splice(1,1,"otro número",3,5); 
console.table(numeros);
//La siguiente línea inserta los valor 85,86 y 87 a partir de la posición 2
numeros.splice(2,0,85,86,87);
console.table(numeros);
//La siguiente línea sustituye dos elementos a partir de la posición 2 por los valores 101,102 y 103
numeros.splice(2,2,101,102,103);
console.table(numeros);
