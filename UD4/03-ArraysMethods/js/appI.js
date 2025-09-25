"use strict"; 
//declaraciones

const provincias=["Córdoba", "Jaén", "Huelva", "Málaga"];

//FORMAS DE AVERIGUAR SI EXISTE UN ELEMENTO DENTRO DEL ARRAY.

//1- Utilizando el método indexOf.
//indexOf devuelve el índice en el que se encuentra el elemento. Devuelve -1 si el elemento no existe en el array
const existe=provincias.indexOf("Huelva");
if (existe!=-1){
    console.log(`Existe  en la ${existe} posición`);
}else{
    console.log(`No Existe`);
}

//2- Utilizando el método lastIndexOf.
//lastIndexOf devuelve el índice en el que se encuentra la última ocurrencia del elemento. Devuelve -1 si el elemento no existe en el array
//Si sólo existe una vez sería equivalente a IndexOf
const existeII=provincias.lastIndexOf("Huelva");
if (existeII >-1){
    console.log(`Existe  en la ${existeII} posición`);
}else{
    console.log(`No Existe`);
}

//3- Utilizando el mátodo includes
//INCLUDES devuelve TRUE si el elemento existe dentro del array y FALSE en caso contrario.
const existeIII=provincias.includes("Huelva"); //true o false
if (existeIII){
    console.log(`Existe`);
}else{
    console.log(`No Existe`);
}

//4- Utilizando el método SOME
//El método SOME recibe una función cuyo primer parámetro es el elemento del array sobre el que se aplica la función.
//SOME recorre el array aplicando la función a cada uno de los elementos.
//La función debe implementar una condición por lo que devolverá TRUE en caso de que la condición se cumple y FALSE en caso contrario
const existeIV=provincias.some(provincia=>provincia=="Huelva"); //true o false
console.log(existeIV);
if (existeIII){
    console.log(`Existe`);
}else{
    console.log(`No Existe`);
 
    
}

//mostrar el índice en el que se encuentra el elemento. Se puede realizar de dos maneras:
//1- A través de indexOf
console.log(provincias.indexOf("Huelva2"));
//2- Utilizando el método findIndex
//El método FINDINDEX recibe una función cuyo primer parámetro es el elemento del array sobre el que se aplica la función.
//Es similar a SOME salvo que en este caso devuelve el índice del elemento que cumple la condición implementada en la función.
//Si ningún elemento cumple la condición devuelve -1
console.log(provincias.findIndex(p=>p=='Huelva2'));
