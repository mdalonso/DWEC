"use strict";

// ViewModel (viewmodel.js): Actúa como intermediario entre el Modelo y la Vista, gestionando los datos y la lógica de presentación.
const viewModel = {
    bind() {
      const inputElement = document.getElementById("nameInput");
      const outputElement = document.getElementById("nameOutput");
  
      // Cuando el usuario escribe en el input, actualiza el ViewModel
      inputElement.addEventListener("input", (event) => {
        userModel.setName(event.target.value); // Actualiza el Modelo
        outputElement.textContent = userModel.getName(); // Actualiza la Vista
      });
    }
  };
  
  