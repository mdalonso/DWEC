"use strict";
//****************propiedades y métodos privados
//La definición de propiedades y métodos privados permite implementar un verdadero encapsulamiento
//que es uno de los principios de la POO.

//Clase PROFE para probar instanceof
class Profe{

}

//Para definir una proiedad como privada se utiliza la señal # delante del nombre de la propiedad
//que pasa a formar parte del nombre (sustituyendo a _ como indicativo de propiedad)
class Alumno {
  #nombre;
  #apellidos;
  #edad;
  constructor(nom, ape, edad) {
    this.#nombre = nom;
    this.#apellidos = ape;
    this.#edad = edad;
  }
  get nombre() {
    console.log("getter");
    return this.#nombre;
  }
  set nombre(value) {
    console.log("setter");
    //controlar entrada de datos
    if (value != "") {
      this.#nombre = value;
    } else {
      //generar un error
      throw "Error, el nombre no puede estar vacío";
    }
  }
  get edad() {
    console.log("getter");
    return this.#edad;
  }
  set edad(value) {
    console.log("setter");
    //controlar entrada de datos
    if (value > 18) {
      this.#edad = value;
    } else {
      //generar un error
      throw "Error, el alumn@ debe ser mayor de edad";
    }
  }

  //método
  toString() {
    return `El nombre del alumno es ${this.#nombre} ${this.#apellidos} y tiene ${this.#edad} años<br>`;
  }
  //También se pueden definir métodos privados aplicando la misma marca # al nombre del método
  #nombrefuncion(){ //método privado

  }
}
try {
    const alumno = new Alumno("Pepe", "Pérez Rodríguez", 23);

    //Función instanceof permite determinar si un objeto está instanciado a partir de una clase
    //determinada. Devuelve True o false. 
    console.log(`instancia ${alumno instanceof Profe}`);
    console.log(`instancia ${alumno instanceof Alumno}`);
    
    //Acceso a las propiedades
    //como las propiedades se han declarado como privadas, sólo pueden accederse a traves de los getter y los setter
    console.log(alumno.nombre);
    //console.log(alumno.#apellidos); //Esta línea da error porque la propiedad es privada. Descomentar para probar
    alumno.edad = 25; 

} catch (error) {
    console.log(error);
}

