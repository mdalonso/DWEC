"use strict"; 
//BUSCAR INFORMACIÓN DENTRO DEL ARRAY

//declaraciones

const numeros=[20,3, 5, 7, 8, 100, 35, 8];
const letras=['a','b'];

//1- MÉTODO FILTER: EXTRAER ELEMENTOS QUE CUMPLEN UNA DETERMINADA CONDICIÓN
    //El método FILTER aplica una función a cada elemento del array. ESta función immplementa una condición.
    //Se devuelve un array con los elementos que cumplen la condición
    //Esa función recibe como parámetro el elemento del array sobre el que se aplica la función.
    //También puede recibir como segundo parámetro el índice del elemento y como tercer argumento el array en sí mismo.

//crear un nuevo array con el filtro indicado
const resultado=numeros.filter(numero=>numero>10);
console.table(resultado);

//2- MÉTODO FIND: Devuelve el primer elemento (NO SU POSICIÓN) que cumple una determinada condición.
//El método FIND aplica una función a cada elemento del array. ESta función immplementa una condición.
    //Se devuelve el primer elemento que cumple la condición (no su posición)
    //Esa función recibe como parámetro el elemento del array sobre el que se aplica la función.
    //También puede recibir como segundo parámetro el índice del elemento y como tercer argumento el array en sí mismo.
    //Si no se encuentra, devuelve UNDEFINED
const resultadoII=numeros.find(numero=>numero==8);
console.table(resultadoII);

//every; devuelve true cuando todos los elementos cumplen la condición
//3- MÉTODO EVERY: Devuelve true si todos los elementos del array cumplen con una determinada condición.
//El método EVERY aplica una función a cada elemento del array. Esta función immplementa una condición.
    //Si algún elemento no cumple la condición devuelve false
    //Esa función recibe como parámetro el elemento del array sobre el que se aplica la función.
    //También puede recibir como segundo parámetro el índice del elemento y como tercer argumento el array en sí mismo.
const resultadoIII=numeros.every(numero=>numero>10);
console.table(`every->${resultadoIII}`); //devolverá false

//some; devuelve true cuando alguno de los elementos cumplen la condicion
//4- MÉTODO SOME: Devuelve true si ALGUNO DE los elementos del array cumplen con una determinada condición.
//El método SOME aplica una función a cada elemento del array. Esta función immplementa una condición.
    //Si algún elemento  cumple la condición devuelve TRUE y devuelve FALSE si ninguno de los elemento cumple la condición.
    //Esa función recibe como parámetro el elemento del array sobre el que se aplica la función.
    //También puede recibir como segundo parámetro el índice del elemento y como tercer argumento el array en sí mismo.
const resultadoIV=numeros.some(numero=>numero>10);
console.table(`some->${resultadoIV}`); //devolverá true

//concat; concatena varios arrays
//5- MÉTODO CONCAT: Devuelve un nuevo ARRAY que es concatenación de otros.

const nueva=numeros.concat(letras);
console.table(nueva);
//OTRA FORMA DE CONCATENAR ARRAYS ES USANDO EL OPERADOR SPREAD ...
const nueva2=[...letras, ...numeros];
console.table(nueva2);


