"use strict";

// Modelo (model.js): Define la estructura de datos y proporciona métodos para gestionar y acceder a esos datos.
const userModel = {
    name: "", // Almacena el nombre del usuario
  
    setName(newName) {
      this.name = newName; // Actualiza el nombre
    },
  
    getName() {
      return this.name; // Devuelve el nombre
    }
  };
  

  