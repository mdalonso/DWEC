"use strict";
// FUNCIONES DE CONSTRUCTOR

// Creamos una función constructora
function Animal(nombre) {
    this.nombre=nombre;

    //Si definimos aquí el comportamiento, cada objeto creado a partir de esta plantilla
    //tendrá su propia copia.
    // this.comer=function() {
    //     console.log(`El ${this.nombre} está comiendo`);
    // };

    // this.dormir=function(){
    //     console.log(`El ${this.nombre} está durmiendo`);
    // }
}

//Si definimos el comportamiento dentro de su prototipo sólo habrá una copia compartida
//por todos los objetos creados a partir de la plantilla
Animal.prototype.comer=function() {
    console.log(`El ${this.nombre} está comiendo`);
};
Animal.prototype.dormir=function() {
    console.log(`El ${this.nombre} está durmiento`);
};



// Creamos un objeto a partir de la función constructora
const perro = new Animal("perro");

// El prototipo de un objeto creado con new es Animal.prototype
console.log("Prototipo de PERRO:");
console.log(perro);
console.log(Object.getPrototypeOf(perro));

const gato = new Animal("gato");

// El prototipo de un objeto creado con new es Animal.prototype
console.log("Prototipo de GATO:");
console.log(gato);
console.log(Object.getPrototypeOf(gato));

perro.dormir();
gato.comer();


//Además, para cada objeto, puedo definir nueva funcionalidad y propiedades
perro.ladrar=function(){
    console.log(`El ${this.nombre} está ladrando`);
}


gato.maullar=function(){
    console.log(`El ${this.nombre} está maullando`);
}

perro.ladrar();
gato.maullar();

