"use strict";
// FUNCIONES DE CONSTRUCTOR

// Creamos una función constructora
function Animal(raza) {
    this.raza=raza;
}

//Si definimos el comportamiento dentro de su prototipo sólo habrá una copia compartida
//por todos los objetos creados a partir de la plantilla
Animal.prototype.comer=function() {
    console.log(`El ${this.raza} está comiendo`);
};
Animal.prototype.dormir=function() {
    console.log(`El ${this.raza} está durmiento`);
};
Animal.prototype.toString=function(){
    return `Ejemplar de ${this.raza}`;
}

//el objetivo es que todos los objetos creados con AnimalTerrestre tengan el comportamiento
//definido en el prototipo de Animal.
function AnimalTerrestre(raza,reproduccion,alimentacion){
    //uso de la función Animal como constructor de la clase base
    Animal.call(this,raza);

    this.reproduccion=reproduccion;
    this.alimentacion=alimentacion;

    this.toString=function(){
        return `El animal terrestre es un ejemplar de ${this.raza}`;
    }
}

const animal=new Animal("animal");
console.log("Objeto ANIMAL:");
console.log(animal);
//el prototipo del objeto ANIMAL es Animal.prototype
//Animal.prototype contiene todo el comportamiento definido para las
//instancias de Animal.
console.log("Prototipo de ANIMAL:");
console.log(Object.getPrototypeOf(animal)==Animal.prototype);
console.log(Object.getPrototypeOf(animal));

// Creamos un objeto a partir de la función constructora
const perro = new AnimalTerrestre("perro","mamifero","carnívoro");

console.log("Objeto PERRO:");
console.log(perro);

console.log("Prototipo de PERRO:");
console.log(Object.getPrototypeOf(perro)==AnimalTerrestre.prototype);
console.log(Object.getPrototypeOf(perro));
//para conseguir que perro adquiera el comportamiento definido en Animal tengo que conseguir que
//Animal sea el prototype de AnimalTerrestre. Esto permitiría que los objetos instanciados
//a partir de AnimalTerrestre "hereden" ese comportamiento
//perro.comer(); //Esto da error porque no se encuentra comer ya que está dentro del prototipo de Animal

console.log(perro.toString());//hace uso del toString declarado en AnimalTerrestre
//¿Si toString no estuviera redefinido cuál toString utilizaría?

//console.log(AnimalTerrestre.prototype.constructor);
//Para solucionar esto hay que reasignar los prototipos manualmente
//Creo un objeto a partir de Animal.prototype y lo asigno a AnimalTerrestre.prototype
AnimalTerrestre.prototype=Object.create(Animal.prototype);
//console.log(AnimalTerrestre.prototype.constructor);

//Antes de esta acción, hay que inspeccionar los prototipos para darnos cuenta de que el constructor
//ha cambiado y no es correcto. hay que reasignarlo para que quede correcto
AnimalTerrestre.prototype.constructor=AnimalTerrestre;
//console.log(AnimalTerrestre.prototype.constructor);

const gato = new AnimalTerrestre("gato","mamifero","omnivoro");

console.log("Objeto GATO:");
console.log(gato);
//El prototipo de perro es Gato sí es el correcto y por tanto puede
// acceder a todo el comportamiento
console.log("Prototipo de GATO:");
console.log(Object.getPrototypeOf(gato)==AnimalTerrestre.prototype);
console.log(Object.getPrototypeOf(gato));

console.log(gato.toString());//se usa el toString de AnimalTerrestre

gato.comer();









