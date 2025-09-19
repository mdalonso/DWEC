"use strict"
//declaración variables y constantes
const fechaHoy=new Date();
const fechaMilis=new Date(676767676767676);
const fechaCadena=new Date('12/12/2025');
const fechaParam=new Date(2025,8,25,12,23,43);

// Mostrar fechas en diferentes formatos
document.writeln(`<h3>Fechas iniciales</h3>`);
document.writeln(`La fecha de hoy: ${fechaHoy}`);
document.writeln(`<br>La fecha en milisengundos: ${fechaMilis}`);
document.writeln(`<br>La fecha desde cadena: ${fechaCadena}`);
document.writeln(`<br>La fecha con Parámetros: ${fechaParam}`);

//mostrar fecha con diferentes formatos
document.writeln(`<h3>Fecha con Formatos</h3>`);
document.writeln(`La fecha de hoy (formato local): ${fechaHoy.toLocaleDateString()}`);
document.writeln(`<br>La fecha en milisengundos: ${fechaMilis.toDateString()}`);
document.writeln(`<br>La fecha de cadena (día-mes-año): ${fechaCadena.getDate()}-${fechaCadena.getMonth()+1}-${fechaCadena.getFullYear()}`);
document.writeln(`<br>Hora de fecha con parámetros: ${fechaParam.toLocaleTimeString()}`);
ocument.writeln(`<br></vbr>Formato ISO de hoy: ${fechaHoy.toISOString()} `);

// Sumar 24 días a la fecha actual
const fechaSumada = new Date(fechaHoy);
fechaSumada.setDate(fechaHoy.getDate() + 24);
document.writeln(`<h3>Suma de días</h3>`);
document.writeln(`Fecha de hoy + 24 días: ${fechaSumada.toLocaleDateString()} <br>`);

// Calcular los días que hay entre dos fechas
const fechaBase = new Date();
const diasTranscurridos = Math.floor((fechaSumada - fechaBase) / (1000 * 60 * 60 * 24));
document.writeln(`<h3>Diferencia de días</h3>`);
document.writeln(`Días entre ${fechaBase.toLocaleDateString()} y ${fechaSumada.toLocaleDateString()}: ${diasTranscurridos} días <br>`);