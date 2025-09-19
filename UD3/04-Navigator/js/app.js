"use strict";

// Propiedades del objeto navigator
const userAgent = navigator.userAgent; // Información del navegador y sistema operativo
const versionNavegador = navigator.userAgent; // Versión del navegador
const idioma = navigator.language || navigator.userLanguage; // Idioma del navegador
const cookiesHabilitadas = navigator.cookieEnabled; // Si las cookies están habilitadas
const online = navigator.onLine; // Estado de conexión a Internet


//funciones
function mostrarPosicion(posicion){
    console.log(`Ubicación actual: Latitud ${posicion.coords.latitude}, Longitud ${posicion.coords.longitude}`);
}

function errorCor(err){
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
// Muestra la información en la consola
console.log(`User Agent: ${userAgent}`);
console.log(`Versión del Navegador: ${versionNavegador}`);
console.log(`Idioma: ${idioma}`);
console.log(`Cookies Habilitadas: ${cookiesHabilitadas ? "Sí" : "No"}`);
console.log(`Estado de Conexión: ${online ? "Conectado" : "Desconectado"}`);


//el idioma del navegador

if (idioma==='es-ES'){
    console.log("El idioma del navegador es el español");
}else{
    console.log("El idioma del navegador no es el español");
}


//verificar si el navegador soporta geolocalización
if (navigator.geolocation) {
    console.log("Este navegador soporta geolocalización.");
    navigator.geolocation.getCurrentPosition(mostrarPosicion, errorCor);
       
} else {
    console.log("Este navegador no soporta geolocalización.");
}