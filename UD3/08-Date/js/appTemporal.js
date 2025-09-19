"use strict"
//Ejemplos con la API Temporal

//declaración variables y constantes


const fechaParam= new Temporal.PlainDate(2025, 9, 18); //fecha asignada
const hora = new Temporal.PlainTime(14, 30, 0);//hora asignada
const fechaHora= new Temporal.PlainDateTime(2025, 9, 18, 14, 30, 0); //fecha y hora asignada
//const zona = Temporal.ZonedDateTime.from('2025-09-18T14:30:00-05:00[America/New_York]'); //fecha y hora con zona horaria


// Formateadores con Intl.DateTimeFormat
const formatoCorto = new Intl.DateTimeFormat('es-ES', { dateStyle: 'short' });
const formatoMedio = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' });
const formatoLargo = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long' });
const formatoCompleto = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' });

// Mostrar fechas con formatos más legibles
document.writeln(`<h3>Fechas con formatos locales utilizando Temporal</h3>`);

document.writeln(`Fecha (formato corto): ${formatoCorto.format(fechaParam)} <br>`);
document.writeln(`Fecha (formato medio): ${formatoMedio.format(fechaParam)} <br>`);
document.writeln(`Fecha (formato largo): ${formatoCompleto.format(fechaParam)} <br>`);
document.writeln(`Fecha: ${fechaParam.toString()} <br>`);
document.writeln(`Hora: ${hora} <br>`);
document.writeln(`fecha y Hora: ${fechaHora} <br>`)
;

// // Sumar 24 días a la fecha actual
/// Sumar 10 días
document.writeln(`<h3>Sumar 10 días a una fecha</h3>`);
const futuro = fechaParam.add({ days: 10 });
document.writeln(`Fecha ${formatoCorto.format(fechaParam)}:  ${formatoCorto.format(futuro)}`); 

// Restar 2 meses
document.writeln(`<h3>Restar 2 meses a una fecha</h3>`);
const pasado = fechaParam.subtract({ months: 2 });
document.writeln(`Fecha ${formatoCorto.format(fechaParam)}:  ${formatoCorto.format(pasado)}`); 

// Calcular los días que hay entre dos fechas

const inicio = Temporal.PlainDate.from('2025-09-18');
const fin = Temporal.PlainDate.from('2025-10-05');

document.writeln(`Los días transcurridos entre ${formatoCorto.format(inicio)} y ${formatoCorto.format(fin)}:  ${fin.since(inicio).days} días`); 


// let fechaBase = new Date();
// const diasTranscurridos = Math.floor((fechaSumada - fechaBase) / (1000 * 60 * 60 * 24));
// document.writeln(`<h3>Diferencia de días</h3>`);
// document.writeln(`Días entre ${formatoCorto.format(fechaBase)} y ${formatoLargo.format(fechaSumada)}: ${diasTranscurridos} días <br>`);