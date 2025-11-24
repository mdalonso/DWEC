"use strict";

const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
    const email = document.querySelector("#email");
    const edad = document.querySelector("#edad");

    // Validación personalizada
    if (!email.value.endsWith("@gmail.com")) {
        email.setCustomValidity("El email debe ser de Gmail");
    } else {
        email.setCustomValidity("");
    }

    if (!form.checkValidity()) {
        e.preventDefault(); // evita el envío si hay errores
        form.reportValidity(); // muestra los mensajes
    }
});