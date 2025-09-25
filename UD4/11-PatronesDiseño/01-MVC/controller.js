"use strict";
// Controlador (gestión de la interacción y actualización de la vista)
const loginController = {
    handleLogin(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (userModel.validateUser(username, password)) {
        view.displayMessage("Login successful!");
      } else {
        view.displayMessage("Invalid credentials");
      }
    }
  };
  
  // Vista (actualización de la interfaz)
  const view = {
    displayMessage(msg) {
      document.getElementById("message").innerText = msg;
    }
  };
  
  // Inicializar
  document.getElementById("loginForm").addEventListener("submit", loginController.handleLogin);
  