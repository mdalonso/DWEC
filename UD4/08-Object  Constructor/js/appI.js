"use strict";
//USO DE OBJETOS LITERALES COMO PLANTILLAS

// Creamos un objeto que utilizaremos como prototipo
const animal = {
    comer: function() {
        console.log("El animal está comiendo");
    },

    dormir: function() {
        console.log("El animal está durmiendo");
    }
};


// Creamos un objeto utilizando animal como plantilla.
//En realidad lo que estamos haciendo es utilizar Object como plantilla pero forzando un prototipo
//distinto al que puede transmitir Object a partir de su propiedad prototype.
const perro = Object.create(animal);

//La inicialización de los objetos creados a partir de una plantilla
//deben ser inicializados de forma manual

// Añadimos una propiedad propia
perro.nombre = "Toby";

// Añadimos un método propio
perro.ladrar = function() {
    console.log("Guau, guau");
};

// Propiedad propiattt
console.log(perro.nombre);

// Método propio
perro.ladrar();

// Método heredado del prototipo
perro.comer();
perro.dormir();


//El prototipo de un objeto creado manualmente es Object.prototype por defecto.
console.log("Prototipo de ANIMAL:");
console.log(Object.getPrototypeOf(animal)==Object.prototype?"El prototipo de ANIMAL Object.prototype":"");
console.log(Object.getPrototypeOf(animal));
console.log(animal.prototype);//Undefined porque no se puede instanciar

console.log("Objeto de PERRO:");
console.log(perro);
//Cuando creo un objeto utilizando otro objeto como plantilla, ese objeto plantilla se convierte
//en prototipo del nuevo objeto
console.log("Prototipo de PERRO:");
console.log(Object.getPrototypeOf(perro)==animal?"El prototipo de PERRO es  Animal":"");
console.log(Object.getPrototypeOf(perro));

//Podemos comprobar que los prototipos de ambos objetos son diferentes
console.log(Object.getPrototypeOf(animal)===Object.getPrototypeOf(perro)?"Mismo prototipo":"Diferente prototipo");

//El método toString no está declarado en Animal pero se recorre la cadena de prototipos hasta encontrar 
//un objeto que lo tenga declarado. Si no se encontrara daría un error.
console.log(perro.toString());//Asciende por la cadena de prototipos Perro-->Anima-->Object y encuentra el método en Object
//console.log(perro.correr());//Esto va a dar un error por que no encuentra el método correr() en la cadena de prototipos




