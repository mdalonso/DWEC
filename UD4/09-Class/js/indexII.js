"use strict";
//getter y setter, se utilizan para asignar y extraer datos de las propiedades
//de un objeto, permitiendo así un encapsulamiento limitado (si se conoce el nombre de las
//propiedades se puede acceder a ellas. Para evitar esto habría que definirlas como privadas)
// Es importante tener en cuenta que el nombre de los getters/setters
//no pueden ser el mismo que las propiedades, debido a que se produce un bucle
//al acceder a la propiedad. Por ello, la mayoría de los desarrolladores
//utilizan el guión bajo para nombrar la propiedad.

class Alumno {
  constructor(nom, ape, edad) {
    this._nombre = nom;
    this._apellidos = ape;
    this._edad = edad;
  }
  //Para cada propiedad se debe definir un getter y un setter para poder leer y asignar su valor
  //de forma encapsulada
  get nombre() {
    console.log("getter");
    return this._nombre;
  }
  set nombre(value) {
    console.log("setter");
    //controlar entrada de datos
    if (value != "") {
      this._nombre = value;
    } else {
      //generar un error que puede ser capturado por try
      throw ("Error, el nombre no puede estar vacío");
    }
  }
  get apellidos(){
    return this._apellidos;
  }
  set apellidos(value){
    this._apellidos=value;
  }
  get edad() {
    console.log("getter");
    return this._edad;
  }
  set edad(value) {
    console.log("setter");
    //controlar entrada de datos
    if (value >= 18) {
      this._edad = value;
    } else {
      //generar un error que puede ser capturado por try
      throw "Error, el alumn@ debe ser mayor de edad";
    }
  }

  //método
  toString() {
    return `El nombre del alumno es ${this._nombre} ${this._apellidos} y tiene ${this._edad} años<br>`;
  }
}

//captura de errores
try {
  //Se puede crear un alumno asignándole valores a sus propiedades a través de su constructor
  //(Esta declaración no hará saltar la validación de la edad ya que no se está asignando la
  //edad a través del setter)
  const alumno1 = new Alumno("Pepe", "Pérez Rodríguez", 3);
  //O también se puede crear sin asignar valores y hacerlo después a través de los setters
  const alumno2=new Alumno();

  //Si se conoce el nombre de la propiedad se puede asignar valor sin hacer uso del setter.
  //Esto no es un buen uso ya que no respeta los principios de la POO.
  alumno1._apellidos="Alonso";
  console.log(alumno1._apellidos);

  //Cuando lo declaramos la instacia como const, no podemos realizar una asignación directa ...
  //alumno2=alumno1;//descomentar esto para que salte el error
  //...pero sí que podemos asignar valor a sus propiedades.

  //Asignación de valor a la propiedad apellidos a través de un setter
  //Aunque los getter y los setter son métodos, su invocación no requiere el uso de () ya que
  // javascript los reconoce como tales gracias a las palabras reservadas get y set
  alumno2.apellidos="Pérez"

  //Como no se ha asignado valor a la propiedad _nombre mediante un setter, no se ha lanzado el 
  //error de que el nombre no debe de estar vacío
  console.log(alumno2.nombre);//No se ha asignado valor a la propiedad _nombre
  console.log(alumno2._apellidos);

  //Asignar una edad <18 mediante el setter hará que salte el error definido
  alumno2.edad = 18;

  //Hacemos uso del método toString para mostrar la información del alumno en el document. 
  document.write(alumno2.toString())
  
} catch (error) {
    console.log(error);
}

