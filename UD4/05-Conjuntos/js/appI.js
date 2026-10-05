"use strict"

/**
 * 
 * @description Los sets o conjuntos son estructuras de datos muy parecidas a los arrays con
 * la particularidad que no permiten valores duplicados. Si hay elementos duplicados los elimina de forma automática.
 * 
 * Creación de conjuntos
 */

//FORMAS DE CREAR UN CONJUNTO
const conjunto =new Set();//Crea un conjunto vacío

const conjuntoII = new Set([1,2,4,5]);//Crea un conjunto de 4 elementos pasándole un array (que es un objeto iterable)
const conjuntoIIBis=new Set([1,2,3,3,4]); //JS elimina automáticamente los elementos duplicados.

//Creación de un conjunto a partir de un array previamente existente
const aNum=[10,20,30,40,50];
const conjuntoIII=new Set(aNum);//Crea un conjunto a partir de un array


console.log({conjunto});
console.log({conjuntoII});
console.log({conjuntoIIBis});
console.log({conjuntoIII});


//*********RECORRIDO DE UN CONJUNTO
//1- CON FOR-OF
console.log('RECORRIDO CON FOR OF');
for (const elemento of conjuntoII) {//elemento es una variable que en cada iteración contiene un elemento del array sin necesidad del índice
    console.log({elemento});
}
//2- CON FOREACH
console.log('forEach');
conjuntoII.forEach(elemento => {
    console.log({elemento});
});

//*****************AÑADIR UN ELEMENTO A UN CONJUNTO
//Método ADD
conjuntoII.add(6);
//se puede utilizar repetidamente en la misma sentencia.
//No se añaden valores que ya existen.
conjuntoII.add(7).add(3).add(6); //el SEGUNDO 6 no lo incluye por ese valor ya existe en el conjunto.

console.log({conjuntoII});

//**************ELIMINAR ELEMENTOS DE UN CONJUNTO

//Método DELETE - Eliminar un único elemento
//Elimina el elemento del conjunto con el valor especificado.
/*****El delete utilizado con arrays era un operador de Javascript y no un método del objeto Array.
En ese caso, el objeto SET sí que implementa el método deleteº */
conjuntoII.delete(6);
console.log({conjuntoII});


//Método CLEAR - Elimina todos los elementos del conjunto
conjuntoII.clear()
console.log({conjuntoII});//el conjunto está vacío




