"use strict";
// Inicializamos un valor global
globalThis.contador = globalThis.contador || 0;

console.log(`Contador inicial: ${globalThis.contador}`);

// Incrementamos directamente
globalThis.contador++;
console.log(`Contador después de incrementar: ${globalThis.contador}`);

// Reiniciamos directamente
globalThis.contador = 0;
console.log(`Contador reiniciado: ${globalThis.contador}`);
