"use strict"
/**
 * @description Los mapas permiten tener una colección de datos organizados en forma
 * de pares "clave-valor", en las cuales las claves no se pueden repetir.
 * Creación, recorrido
 */

//CREACIÓN DE MAPAS

//Definimos el mapa TELEFONOS el cual tiene tres elementos.
//Cada uno de esos elementos es un par clave-valor. El primer valor de cada elemento es la clave asociada al segundo valor.
//En este caso María, Javier y Fernando son las claves para acceder a los valores 111111111,22222222 y 333333333
const telefonos=new Map([
    ['María',111111111],
    ['Javier',22222222],
    ['Fernando',33333333],
]);


console.log(telefonos);

//RECORRIDO DE UN MAPA
//AL SER UN OBJETO ITERABLE SE PUEDE RECORRER CON UN FOR_OF
//teléfono es una variable que sirve para recorrer el mapa y en cada iteración contendrá el par clave-valor correspondiente
for (const telefono of telefonos) {
    console.log(telefono);
}

//Si quiero acceder a cada ITEM por separado necesito dos variable que se asignarán por DESTRUCTURING
//en cada iteración nombre contendrá la clave del elemento del mapa y telefono contendrá el valor asociado a esa clave.
for (const [nombre,telefono] of telefonos) {
        console.log(`El tlfno. de ${nombre} es ${telefono}`);
}

//ACCESO A LAS CLAVES
//El método KEYS() devuelve un objeto iterable con los valores de todas las claves, por eso se puede recorrer con un FOR_OF
//(FOR_OF PERMITE RECORRER OBJETOS ITERABLES)
for (const nombre of telefonos.keys()) {
    console.log({nombre});
}

//ACCESO A LOS VALORES
//El método VALUES() devuelve un objeto iterable con los valores. Por eso se puede recorrer con un FOR_OF
for (const valor of telefonos.values()) {
    console.log({valor});
}

//AÑADIR ELEMENTOS A UN MAPA
//Método SET(): Hay que pasarle un par clave-valor separados por comas
telefonos.set('José', 12121212);
telefonos.set('María',88888888)//Si se pasa una clave que ya existe dentro del mapa, se actualiza el valor asociado a esa clave.
console.log(telefonos);

//ELIMINAR ELEMENTOS DE UN MAPA
//Método DELETE(): Se le pasa el valor de una clave para localizar el elemento del mapa que se quiere eliminar.
telefonos.delete('José')
console.log(telefonos);

//BUSCAR UN ELEMENTO DENTRO DEL MAPA
//Método HAS(): Realiza la búsqueda por el valor de la clave.
//Devuelve TRUE si existe un elemento en el mapa con esa clave y FALSE en caso contrario.
console.log(telefonos);
if (telefonos.has('Javier')){
    console.log('El teléfono existe');
}else{
    console.log('el teléfono no existe');
}

//DETERMINAR EL TAMAÑO DE UN MAPA
//Propiedad SIZE.
console.log(telefonos.size);


//ACCESO A UN ELEMENTO POR SU CLAVE
//Método GET(): Se le pasa una clave y devuelve el valor asociado a esa clave.

console.log(telefonos.get("Javier"));

//CONVERSIÓN A ARRAY
//Operador Spread ...
//Crea un array bidimensional donde cada elemento de la primera dimensión es un par clave-valor. La primera columna contiene las claves
//y la segunda columna contiene los valores.
const aTelefonos=[...telefonos];
console.log(aTelefonos);