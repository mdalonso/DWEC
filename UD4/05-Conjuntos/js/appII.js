"use strict"

/**
 * 
 * @description DISTINTAS OPERACIONES CON CONJUNTOS:
 * - Determinar el  tamaño del conjunto 
 * - buscar un elemento, 
 * - convertir un conjunto en un array
 */



//CREACIÓN DEL CONJUNTO
//El conjunto tiene 3 elemtos: 1, 2 y 3
const conjunto=new Set().add(1).add(2).add(3);
console.log(conjunto);


//OBTENER EL TAMAÑO DE UN CONJUNTO
//Propiedad size. Al ser una propiedad no hay que poner los () al final.
console.log(conjunto.size);


//buscar un elemento dentro del conjunto
//Método HAS(): Devuelve TRUE si se localiza el valor dentro del conjunto. En caso contario devuelve FALSE
console.log(conjunto.has(4));

//convertir un conjunto en un array
//Operador Spread ... Se puede aplicar a conjuntos. Se devuelve un Array cuyos elementos son los elementos del conjunto.
const aNum=[...conjunto];
console.table(aNum);