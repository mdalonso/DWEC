"use strict";

// Modelo (datos de usuario y lógica de validación)
//Tenemos un objeto userModel con dos campos que contienen el nombre y el password del usuario
//además de un método que verifica si los valores que se le pasan como parámetro coinciden
//con las credenciales del usuario.
const userModel = {
    username: "admin",
    password: "1234",
    validateUser(user, pass) {
      return user === this.username && pass === this.password;
    }
  };
  