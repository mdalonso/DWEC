"use strict"

// Usando document.write para mostrar un encabezado
document.write("<h1>Información del Navegador y la Pantalla</h1>");

// Usando document.writeln para escribir en una línea
document.writeln("Este script utiliza document.write() y document.writeln().<br>");

// Información del navegador

document.write(`<strong>User Agent:</strong>   ${navigator.userAgent}<br>`);
document.write(`<strong>Idioma:</strong>  ${navigator.language || navigator.userLanguage}<br>`);
document.write(`<strong>Cookies Habilitadas:</strong> ${navigator.cookieEnabled ? "Sí" : "No"}<br>`);

// Información de la pantalla
document.writeln(`<strong>Ancho de la Pantalla:</strong> ${screen.width}  px<br>`);
document.writeln(`<strong>Alto de la Pantalla:</strong> ${screen.height}  px<br>`);
document.writeln(`<strong>Orientación:</strong>  ${screen.orientation ? screen.orientation.type : "No disponible"} <br>`);
    