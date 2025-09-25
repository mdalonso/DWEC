"use strict"


// Usando Math.random() para generar un número aleatorio
const numeroAleatorio = Math.random(); // Número aleatorio entre 0 y 1
document.body.innerHTML+=("<strong>Número Aleatorio (0-1):</strong> " + numeroAleatorio.toFixed(4) + "<br>");

// Generar un número aleatorio entre un rango específico (por ejemplo, entre 1 y 100)
const min = 1;
const max = 100;
const numeroAleatorioRango = Math.floor(Math.random() * (max - min + 1)) + min; // Número aleatorio entre min y max
document.body.innerHTML+=(`<strong>Número Aleatorio (1-100):</strong>  ${numeroAleatorioRango} <br>`);

// Otras funciones de Math
const numero = 16;
document.body.innerHTML+=(`<strong>Raíz cuadrada de 16:</strong> ${Math.sqrt(numero)} <br>`);
document.body.innerHTML+=(`<strong>Valor absoluto de -10:</strong> ${Math.abs(-10)} <br>`);
document.body.innerHTML+=(`<strong>Valor máximo entre 5, 10, y 15:</strong>  ${Math.max(5, 10, 15)} <br>`);
document.body.innerHTML+=(`<strong>Valor mínimo entre 5, 10, y 15:</strong> ${Math.min(5, 10, 15)} <br>`);

// Calcular seno y coseno
const angulo = 30; // grados
const anguloEnRadianes = angulo * (Math.PI / 180); // Convertir grados a radianes
document.body.innerHTML+=(`<strong>Seno de 30 grados:</strong> ${Math.sin(anguloEnRadianes)} <br>`);
document.body.innerHTML+=(`<strong>Coseno de 30 grados:</strong> ${Math.cos(anguloEnRadianes)}  <br>`);

