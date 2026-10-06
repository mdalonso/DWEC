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


function AnimalTerrestre(raza,reproduccion,alimentacion){
    //uso de la función Animal como constructor
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
console.log("Prototipo de ANIMAL:");
console.log(Object.getPrototypeOf(animal));

// Creamos un objeto a partir de la función constructora
const perro = new AnimalTerrestre("perro","mamifero","carnívoro");

console.log("Objeto PERRO:");
console.log(perro);
//El prototipo de perro es AnimalTerrestre.prototype, por tanto no tiene el comportamiento definido dentro
//del prototipo de Animal
console.log("Prototipo de PERRO:");
console.log(Object.getPrototypeOf(perro));

//perro.comer(); //Esto da error porque no se encuentra comer ya que está dentro del prototipo de Animal

console.log(perro.toString());//hace uso del toString declarado en AnimalTerrestre
//¿Si toString no estuviera redefinido cuál toString utilizaría?

//Para solucionar esto hay que reasignar los prototipos manualmente
AnimalTerrestre.prototype=Object.create(Animal.prototype);
//Antes de esta acción, hay que inspeccionar los prototipos para darnos cuenta de que el constructor
//ha cambiado y no es correcto. hay que reasignarlo para que quede correcto
AnimalTerrestre.prototype.constructor=AnimalTerrestre;

const gato = new AnimalTerrestre("gato","mamifero","omnivoro");

console.log("Objeto GATO:");
console.log(gato);
//El prototipo de perro es Gato sí es el correcto y por tanto puede
// acceder a todo el comportamiento
console.log("Prototipo de GATO:");
console.log(Object.getPrototypeOf(gato));

console.log(gato.toString());//se usa el toString de Object

gato.comer();



