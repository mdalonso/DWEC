"use strict"


// Usando document.write para mostrar un encabezado
document.body.innerHTML+="<h1>Información del Navegador y la Pantalla</h1>";

// Usando document.writeln para escribir en una línea
document.body.innerHTML+="Este script utiliza innerHTML para escribir en el documento.<br>";

// Información del navegador

document.body.innerHTML+=`<strong>User Agent:</strong>   ${navigator.userAgent}<br>`;
document.body.innerHTML+=`<strong>Idioma:</strong>  ${navigator.language || navigator.userLanguage}<br>`;
document.body.innerHTML+=`<strong>Cookies Habilitadas:</strong> ${navigator.cookieEnabled ? "Sí" : "No"}<br>`;

// Información de la pantalla
document.body.innerHTML+=`<strong>Ancho de la Pantalla:</strong> ${screen.width}  px<br>`;
document.body.innerHTML+=`<strong>Alto de la Pantalla:</strong> ${screen.height}  px<br>`;
document.body.innerHTML+=`<strong>Orientación:</strong>  ${screen.orientation ? screen.orientation.type : "No disponible"} <br>`;
/************************************************************** */
