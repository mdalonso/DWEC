"use strict";
//Tenemos una única clase pero esta clase se puede configurar de forma diferente.
class Usuario {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  }
  
  //La clase FABRICA permite asignar diferente tipo al usuario según lo que recibimos como
  //parámetro.
  class FabricaUsuario {
    static crearUsuario(nombre, tipo) {
      if (tipo === "admin") {
        return new Usuario(nombre, "Administrador");
      } else if (tipo === "cliente") {
        return new Usuario(nombre, "Cliente");
      } else {
        throw new Error("Tipo de usuario no soportado.");
      }
    }
  }
  
  const usuarioAdmin = FabricaUsuario.crearUsuario("Carlos", "admin");
  console.log(usuarioAdmin);  // Usuario { nombre: 'Carlos', tipo: 'Administrador' }
  