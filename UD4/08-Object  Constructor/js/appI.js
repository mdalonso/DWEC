"use strict";
//EJEMPLIFICACIÓN DE CÓMO FUNCIONAN LOS PROTOTIPOS EN JS

// Creamos un objeto que utilizaremos como prototipo
const animal = {
    comer: function() {
        console.log("El animal está comiendo");
    },

    dormir: function() {
        console.log("El animal está durmiendo");
    }
};

//El prototipo de un objeto creado manualmente es Object por defecto.
console.log("Prototipo de ANIMAL:");
console.log(Object.getPrototypeOf(animal));


// Creamos un objeto utilizando animal como plantilla.
const perro = Object.create(animal);
//Cuando creo un objeto utilizando otro objeto como plantilla, ese objeto plantilla se convierte
//en prototipo del nuevo objeto
console.log("Prototipo de PERRO:");
console.log(Object.getPrototypeOf(perro));

//Podemos comprobar que los prototipos de ambos objetos son diferentes
console.log(Object.getPrototypeOf(animal)===Object.getPrototypeOf(perro)?"Mismo prototipo":"Diferente prototipo");

//La inicialización de los objetos creados a partir de una plantilla
//deben ser inicializados de forma manual

// Añadimos una propiedad propia
perro.nombre = "Toby";

// Añadimos un método propio
perro.ladrar = function() {
    console.log("Guau, guau");
};


// Propiedad propia
console.log(perro.nombre);

// Método propio
perro.ladrar();

// Método heredado del prototipo
perro.comer();
perro.dormir();