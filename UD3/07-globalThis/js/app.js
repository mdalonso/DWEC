"use strict";
// Inicializamos un valor global
//En lugar de crear variables, también podemos crear propiedades en el objeto global.
//Esto permite crear información de acceso global a todo el contexto de la aplicación ya que es información que
//se sitúa dentro del objeto global (hay otras formas de crear variables globales aunque se recomienda esta siempre
//teniendo en cuenta que el uso de variables globales debe limitarse a lo mínimo indispensable)

//Si existe ya la propiedad contador y es un valor truthy y en caso contrario la crea y la inicializa a 0.
//*Un valor truthy es un valor que en una condición es evaluado como true. 
// En JS todo es truthy salvo false, 0. -0m "", null, undefined y NaN, que son valores falsy.
globalThis.contador = globalThis.contador || 0;

console.log(`Contador inicial: ${globalThis.contador}`);

// Incrementamos directamente
globalThis.contador++;
console.log(`Contador después de incrementar: ${globalThis.contador}`);

// Reiniciamos directamente
globalThis.contador = 0;
console.log(`Contador reiniciado: ${globalThis.contador}`);
