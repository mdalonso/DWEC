"use strict"; 
//declaraciones
//Podemos almacenar información relacionada como variables separadas...

//const nombre='Frigorífico', precio=300, color='red';
//...o bien definiendo un objeto. En este caso, un objeto literal.

//objeto literal, agrupar todo en una variable
//Aquí estamos definiendo dos objetos literales.
const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red'
}
const electro1={
    nombre:'Horno',
    precio:200,
    color:'blue'
}
console.log(electro);
//Para acceder a una de las propiedades del objeto podemos utilizar el operador . (punto)
console.log(electro.nombre);
//También podemos acceder a una propiedad a través del nombre de esa propiedad (clave)
console.log(electro['nombre']);//muestra el contenido de la propiedad nombre
//Podemos asignar valor a las propiedades accediendo a ellas a través del nombre de la propiedad
electro['color']="amarillo"
console.log(electro.color);
//También podemos asignar valores accediendo a las propiedades con el operador .
electro.color='white';
console.log(electro.color);

//permite agregar propiedades
//Podemos también agregar propiedades que no existían simplemente haciendo referencia a ellas y asignándoles un valor
electro.disponible=true;
console.log(electro);

//eliminar propiedades
//Podemos eliminar una propiedad con el operador DELETE haciendo referencia a ella a con el operador .
delete electro.precio;
console.log(electro);

//SE PUEDEN ASIGNAR VALORES DE LAS PROPIEDADES A VARIABLES MEDIANTE destructuring (también se podría hacer de forma individual)
//extraer datos a una variable
//const nombreObjeto=electro.nombre
 const {nombre,disponible}=electro;
console.log(`Propiedad nombre ${nombre}` );
console.log(`Propiedad disponible ${disponible}` );
