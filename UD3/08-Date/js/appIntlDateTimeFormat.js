"use strict"
//Ejemplos con Intl.DateTimeFormat()

//declaración variables y constantes como instancias de Date 
//utilizando diferentes constructores.
const fechaHoy=new Date();
const fechaMilis=new Date(676767676767676);
const fechaCadena=new Date('11/12/2025');
const fechaParam=new Date(2025,8,25,12,23,43);

// Creamos los objetos Intl.DateTimeFormat que nos permitirán formatear las fechas
//Estos objetos (podemos llamarlos FORMATEADORES) se crean teniendo en cuenta
//las reglas de localización que recibe su constructor.
const formatoCorto = new Intl.DateTimeFormat('es-ES', { dateStyle: 'short' });
const formatoMedio = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium' });
const formatoLargo = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', });
const formatoCompleto = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full', timeStyle: 'short', hour12:true });

// Utilizamos esos objetos FORMATEADORES para mostrar las fechas que hemos
//creado antes como instancias de Date.
document.body.innerHTML+=(`<h3>Fechas con formatos locales utilizando Intl.DateTimeFormat</h3>`);
document.body.innerHTML+=(`Hoy (formato corto): ${formatoCorto.format(fechaHoy)} <br>`);
document.body.innerHTML+=(`Hoy (formato medio): ${formatoMedio.format(fechaHoy)} <br>`);
document.body.innerHTML+=(`Hoy (formato largo): ${formatoLargo.format(fechaHoy)} <br>`);
document.body.innerHTML+=(`Hoy (formato completo): ${formatoCompleto.format(fechaHoy)} <br>`);
document.body.innerHTML+=(`Fecha en milis (formato largo): ${formatoLargo.format(fechaMilis)} <br>`);
document.body.innerHTML+=(`Fecha de cadena (formato medio): ${formatoMedio.format(fechaCadena)} <br>`);
document.body.innerHTML+=(`Fecha con parámetros (formato corto): ${formatoCorto.format(fechaParam)} <br>`);

// Sumar 24 días a la fecha actual
const fechaSumada = new Date(fechaHoy);
fechaSumada.setDate(fechaHoy.getDate() + 24);
document.body.innerHTML+=(`<h3>Suma de días</h3>`);
document.body.innerHTML+=(`Fecha de hoy + 24 días: ${formatoLargo.format(fechaSumada)} <br>`);

// Calcular los días que hay entre dos fechas
const fechaBase = new Date();
const diasTranscurridos = Math.floor((fechaSumada - fechaBase) / (1000 * 60 * 60 * 24));
document.body.innerHTML+=(`<h3>Diferencia de días</h3>`);
document.body.innerHTML+=(`Días entre ${formatoCorto.format(fechaBase)} y ${formatoLargo.format(fechaSumada)}: ${diasTranscurridos} días <br>`);