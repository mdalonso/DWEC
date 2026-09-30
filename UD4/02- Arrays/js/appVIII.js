"use strict"; 
//arrays bidimensionales
//Cada uno de los elementos del array contiene dos elementos, por tanto estamos creando un array de 3x2
const electrodomesticos=[["Lavadora",100],['Microondas',200],['Horno',250]];

//mostramos el array bidimensional
console.table(electrodomesticos);
//Para acceder a cada elemento del array podemos hacerlo utilizando los índices.
console.log(electrodomesticos[1][0]); //mostrando Microondas
console.log(electrodomesticos[1][1]); //mostrando el precio del microondas 200


// ****************** RECORRER EL ARRAY ***********************
// 1- PODEMOS RECORRER EL ARRAY CON UN BUCLE FOR ANIDADO
//necesitamos un bucle for por cada dimensión.
for (let index = 0; index < electrodomesticos.length; index++) {
    for (let  col= 0; col < electrodomesticos[index].length; col++) {
        console.log(electrodomesticos[index][col]);
    }
}

// 2- PODEMOS HACERLO TAMBIÉN CON UN FOREACH
//RECORDATORIO: la función forEach recibe como parámetro una función que se aplicará sobre cada elemento del array.
//              El primer parámetro que se le pasa a esa función es el elemento del array sobre el que se aplica la función
//              En este caso, el elemento será un array unidimensional de longitud 2.
//              (se le pueden pasar si es necesario dos parámetros más: el índice del elemento y el propio array)
electrodomesticos.forEach(electro=>{
    //En este caso le estamos pasando a la función un único parámetro que es el elemento del array.
    //cada elemento de electrodomésticos es un array unidimensional de 2 elementos.
    console.log(electro)//Aquí podemos comprobar que efectivamente el elemento sobre el que se está aplicando la función es un array.
    let cadena="";
    //Como ELECTRO es un array, podemos también aplicarle un forEach.
    //En este caso la función recibirá dos parámetros que son el elemento sobre el que se aplica la función y el índice de ese elemento.
    electro.forEach((elemento,index)=>{
        if (index==0){
            cadena=`El nombre es ${elemento}`;
        }else{
            cadena+=` y su precio es ${elemento}`;
        }
    });
    console.log(cadena);
 });

//AÑADIR UN ELEMENTO AL FINAL
electrodomesticos.push(['Lavavajillas',300]);
console.table(electrodomesticos);
//También podemos añadir elementos aumentando el tamaño de la segunda dimensión, es decir, aumentando el número de columnas.
//Lo convertimos en un array de 3x3
electrodomesticos.push(['Frigorífico',500,'prueba']);
console.table(electrodomesticos);



