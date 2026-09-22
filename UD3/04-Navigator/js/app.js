"use strict";

// Propiedades del objeto navigator
const userAgent = navigator.userAgent; // Información del navegador, motor de renderizado y sistema operativo
const idioma = navigator.language;
const cookiesHabilitadas = navigator.cookieEnabled; // Si las cookies están habilitadas
const online = navigator.onLine; // Estado de conexión a Internet


//funciones


// Muestra la información en la consola
console.log(`User Agent: ${userAgent}`);
//console.log(`Versión del Navegador: ${versionNavegador}`);
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
    //Si el navegador soporta geolocalización
    console.log("Este navegador soporta geolocalización.");
    //Determinamos cuál esa geolocalización (coordenadas geográficas)
    //El método getCurrentPosition recibe como parámetros de entrada dos funciones. La primera de ella (obligatoria) se
    //ejecuta si se puede acceder a la posición del dispositivo. La segunda ( opcional) se ejecuta si no se puede acceder
    //a la posición del dispositivo 
    navigator.geolocation.getCurrentPosition(mostrarPosicion, errorCor);
       
} else {
    console.log("Este navegador no soporta geolocalización.");
}

//Esta función se ejecutará si se puede acceder a la posición del dispositivo extrayendo sus coordenadas geográficas (latitud+longitud)
function mostrarPosicion(posicion){
    console.log(`Ubicación actual: Latitud ${posicion.coords.latitude}, Longitud ${posicion.coords.longitude}`);
}
//Esta función se ejecutará si no se puede acceder a la posición del dispositivo 
function errorCor(err){
    console.warn(`ERROR(${err.code}): ${err.message}`);
}