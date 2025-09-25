/**
 * La creación de un módulo para la reutilización de código en scripts externos requiere del uso
 * de la palabra reservada EXPORT 
 */

//Se pueden exportar variables y constantes
export const saludo="Hola";

//Se pueden exportar funciones, funciones flecha y expresiones de funciones
export const mensaje=()=>{
    return "Hola a tod@s";
}

export const sumar=()=>{ // no se exporta porque nunca se utiliza en el script (ver las importaciones)
   
}

//También se puede exportar clases

//*********************EXPORTACIÓN POR DEFECTO  */
//Sólo puede haber una exportacion por defecto dentro de un módulo
//ya que se puede importar con cualquier nombre
//La exportación por defecto es especialmente útil cuando sólo se quiere exportar un único elemento
//del módulo
//No se pueden exportar por defecto variables ni constantes
export default class Alumno {
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
    #nombrefuncion(){ //método privado
  
    }
  }