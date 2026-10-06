"use strict";
// FUNCIONES DE CONSTRUCTOR

// Creamos una función constructora
function Animal(nombre) {
    this.nombre=nombre;

    //Si definimos aquí el comportamiento, cada objeto creado a partir de esta plantilla
    //tendrá su propia copia.
    this.comer=function() {
        console.log(`El ${this.nombre} está comiendo`);
    };

    this.dormir=function(){
        console.log(`El ${this.nombre} está durmiendo`);
    }
}

// //Si definimos el comportamiento dentro de su prototipo sólo habrá una copia compartida
// //por todos los objetos creados a partir de la plantilla
// Animal.prototype.comer=function() {
//     console.log(`El ${this.nombre} está comiendo`);
// };
// Animal.prototype.dormir=function() {
//     console.log(`El ${this.nombre} está durmiento`);
// };

console.log(Animal);
//El prototipo de Animal es Function.prototype ya que es un objeto de tipo función.
console.log(Object.getPrototypeOf(Animal)==Function.prototype);
console.log(Animal.prototype);

// Creamos un objeto a partir de la función constructora
const perro = new Animal("perro");

// El prototipo de un objeto creado con new es Animal.prototype
console.log("Objeto PERRO:");
console.log(perro);
console.log("Prototipo de PERRO:");
//El prototipo de perro es Animal.prototype ya que perro se ha creado a partir de Animal.
console.log(Object.getPrototypeOf(perro)==Animal.prototype);
//if (Object.getPrototypeOf(perro)==Object.getPrototypeOf(Animal)) console.log("Su prototipo es Animal");
console.log(Object.getPrototypeOf(perro));

console.log("perro.prototype:"+perro.prototype);//Las instancias no tienen prototype pero sí tienen prototipo

const gato = new Animal("gato");

// El prototipo de un objeto creado con new es Animal.prototype
console.log("Objeto GATO:");
console.log(gato);
console.log("Prototipo de GATO:");
//como gato se ha creado con new a partir de Animal, su prototipo es Animal.prototype.
console.log(Object.getPrototypeOf(gato)==Animal.prototype);
console.log(Object.getPrototypeOf(gato));
console.log("gato.prototype:"+gato.prototype);

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



