"use strict";
//crear un array que contenga los nombres, apellidos y edad de la clase
//el objeto tendrá un método para mostrar los datos

//crear array
let aAlumnos = [];

//declaración de la clase
function Alumno(nom, ape, edad) {
  this.nombre = nom;
  this.apellidos = ape;
  this.edad = edad;
  //método
  this.toString = () => {
    return `El nombre del alumno es ${this.nombre} ${this.apellidos} y tiene ${this.edad} años<br>`;
  };
}

const entradaDatos = () => {
  let nombre;
  nombre = prompt("Introduzca nombre del alumno (Cancelar->Fin)");
  while (nombre != null) {
    //introducir el resto de datos
    const apellidos = prompt("Introduzca los apellidos");
    const edad = prompt("Introduzca la edad");
    //crear el objeto
    //const oAlumno=new Alumno(nombre, apellidos, edad);
    //añadir al array
    //aAlumnos.push(oAlumno);

    aAlumnos.push(new Alumno(nombre, apellidos, edad));
    //entrada de nombre
    nombre = prompt("Introduzca nombre del alumno (Cancelar->Fin)");
  }
};
const mostrarDatos=()=>{
    //ordenar el array por edad descendente.
    aAlumnos.sort((a,b)=> b.edad-a.edad);
    //ordenar por apellidos
    //aAlumnos.sort((a,b)=> a.apellidos.localeCompare(b.apellidos));
    //mostrar
    aAlumnos.forEach(alumno=>{
        document.write(alumno.toString());
    })
}
//cuerpo del script
entradaDatos();
mostrarDatos();
