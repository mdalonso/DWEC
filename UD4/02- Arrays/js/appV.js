"use strict"; 
//copias de arrays mediante el operador Spread


//declaraciones
const numeros=[1,2,3,4, "cinco"];
const numerosBis=numeros; //NUMEROSBIS no es una copia del array sino una referencia al mismo array.

//hacer copias 
//Se pueden hacer copias de dos maneras
//1. Utilizando el método slice()
    //Slice devuelve un array que es una porción del array original si se especifica el primer índice y la última posición absoluta (no en índice)
    //numeros.slice(1,3)--> Devuelve un array con los elementos en las posiciones 1 y 2 (ya que el índice 2 es la posición 3 del array)
    //Si no se pasan parámetros, devuelve todo el array.
 //const numerosSpread=numeros.slice(); // DESCOMENTAR ESTA LÍNEA PARA HACER LAS COMPROBACIONES.
 //2. Concatenando arrays.
    //En la siguiente sentencia se está concatenando un array vacío al array números, por tanto se está haciendo una copia del array
    //CONCAT es un método que puedo aplicar a cualquier array ejemplo: array1.concat(array2) devuelve un array que es la concatenación
    //de array1 y array2.
 //const numerosSpread=[].concat(numeros); //DESCOMENTAR ESTA LÍNEA PARA HACER LAS COMPROBACIONES.
 //3. Utilizando el operador ... (Spread)
    //Puedo hacer una copia del array NUMEROS utilizando la siguiente sintaxis.
    const numerosSpread=[...numeros];

    //también PUEDO USARLO PARA INSERTAR UNA COPIA EN CUALQUIER OTRO LADO. 
    //en este caso, creo un nuevo array u a partir del tercer elemento INSERTO una copia del array NUMEROS.
    const numerosSpreadII=["uno", "dos",...numeros, 6, 7];


//script
console.table(numeros);
console.table(numerosBis);
//Si modifico el array numeros añadiéndole, por ejemplo, un nuevo elemento...
numeros.push(6);
//...puedo comprobar que también cambia el valor de NUMEROSBIS, porque es una referencia al mismo array. Al contrario sucede lo mismo.
console.table(numeros);
console.table(numerosBis);
//Sin embargo, NUMEROSPREAD no ha variado su contenido porque sí es un array totalmente diferente (es una copia)
console.table(numerosSpread);
console.table(numerosSpreadII);