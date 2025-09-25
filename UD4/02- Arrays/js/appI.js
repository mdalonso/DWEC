"use strict"; 
/*FORMAS DE DECLARAR UN ARRAY, DIMENSIÓN DE LOS ARRAY Y ACCESO A LOS ELEMENTOS

*/

//Forma tradicional (en desuso)
const nombre=new Array(6); //Declara un Array vacío de 6 elementos
const provincias=new Array("Córdoba", "Jaén", "Huelva", "Málaga");//Declara un array de 4 elementos asignándole su contenido.

//Forma más habitual
const numeros=[1,2,3,4];//Declara un array de 4 elementos y le asigna valores.
const letras=[];//Declara un array vacío.

//Asignación de valor a un elemento del array más allá de su tamaño.
//En la definición del array NOMBRE, el índice del último elemento es 5.
nombre[nombre.length]='hola'; // Equivale a nombre[6]='hola'. La propiedad lenght devuelve el tamaño de un array.
                                //Ahora NOMBRE tendrá longitud 7.

//Se pueden asignar elementos más allá del límite del array lo que amplía su tamaño.

//en este caso, el array PROVINCIAS tenía 4 elementos y se le ha asignado valor al elemento en la posición 7, por lo que ahora su tamaño será 8.
provincias[7]= "Huelva;"

 //En la versión de 2022, otra forma de acceder a los elementos de un array
console.log(provincias.at(5)); 
console.log(provincias.at(7)); 

//cuerpo script
nombre[0]="lola"

//Cuando imprimimos el array, sin especificar un elemento, me imprime todos los elementos del array.
//En la consola podemos ver información más detallada
//0 (es la posición): "valor"
//y después la longitud del array

console.log(nombre);
console.log(nombre.length);
//También se puede mostrar el array por consola conformato de TABLA.
console.table(provincias);//Muestra el array en forma de tabla.
console.table(numeros);
console.table(letras);//no imprime nada porque el array está vacío
