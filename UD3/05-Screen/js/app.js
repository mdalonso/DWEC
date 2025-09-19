"use strict";
// Propiedades del objeto screen
const anchoPantalla = screen.width; // Ancho total de la pantalla
const altoPantalla = screen.height; // Alto total de la pantalla
const anchoDisponible = screen.availWidth; // Ancho de la pantalla disponible para la ventana
const altoDisponible = screen.availHeight; // Alto de la pantalla disponible para la ventana
const colorProfundidad = screen.colorDepth; // Profundidad de color de la pantalla
const pixelDepth = screen.pixelDepth; // Profundidad de píxeles de la pantalla
const orientacion = screen.orientation ? screen.orientation.type : "No disponible"; // Orientación de la pantalla

// Mostrar la información en la consola
console.log("Información de la Pantalla:");
console.log(`Ancho de la Pantalla: ${ anchoPantalla} px`);
console.log(`Alto de la Pantalla: ${ altoPantalla} px`);
console.log(`Ancho Disponible: ${ anchoDisponible} px`);
console.log(`Alto Disponible: ${ altoDisponible} px`);
console.log(`Profundidad de Color: ${ colorProfundidad} bits `);
console.log(`Profundidad de Píxeles: ${pixelDepth} bits`);
console.log(`Orientación: ${ orientacion}`);