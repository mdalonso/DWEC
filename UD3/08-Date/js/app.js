"use strict"
//declaración variables y constantes
//La inicialización adapta las fechas a la hora local.
//Creación de objeto Date inicializado a la fecha actual.
const fechaHoy=new Date();
//Creación de objeto Date inicializado con timespan (1/1/1970)
const fechaMilis=new Date(676767676767676);
//Creación de objeto Date inicializado a partir de una cadena de fecha
//LA cadena es forma MM/DD/YYYY
const fechaCadena=new Date('11/12/2025');
//Creación de objetos a partir de parámetros (el mes empieza en 0)
const fechaParam=new Date(2025,8,25,12,23,43);

// Mostrar fechas en diferentes formatos
document.body.innerHTML+=(`<h3>Fechas iniciales</h3>`);
document.body.innerHTML+=(`La fecha de hoy: ${fechaHoy}`);
document.body.innerHTML+=(`<br>La fecha en milisengundos: ${fechaMilis}`);
document.body.innerHTML+=(`<br>La fecha desde cadena: ${fechaCadena}`);
document.body.innerHTML+=(`<br>La fecha con Parámetros: ${fechaParam}`);

//mostrar fecha con diferentes formatos
document.body.innerHTML+=(`<h3>Fecha con Formatos</h3>`);
document.body.innerHTML+=(`La fecha de hoy (formato local): ${fechaHoy.toLocaleDateString()}`);
document.body.innerHTML+=(`<br>La fecha en milisengundos: ${fechaMilis.toDateString()}`);
document.body.innerHTML+=(`<br>La fecha de cadena (día-mes-año): ${fechaCadena.getDate()}-${fechaCadena.getMonth()+1}-${fechaCadena.getFullYear()}`);
document.body.innerHTML+=(`<br>Hora de fecha con parámetros: ${fechaParam.toLocaleTimeString()}`);
document.body.innerHTML+=(`<br></vbr>Formato ISO de hoy: ${fechaHoy.toISOString()} `);

// Sumar 24 días a la fecha actual
const fechaSumada = new Date(fechaHoy);
//setDate-> Ajusta el día del mes.
fechaSumada.setDate(fechaHoy.getDate() + 24);
document.body.innerHTML+=(`<h3>Suma de días</h3>`);
document.body.innerHTML+=(`Fecha de hoy + 24 días: ${fechaSumada.toLocaleDateString()} <br>`);

// Calcular los días que hay entre dos fechas
const fechaBase = new Date();
//Cuando operamos con fechas, el resultado se produce en milisegundos por tanto debemos
//transformarlo en la unidad que más nor convenga a nuestros intereses. En este caso, días.
const diasTranscurridos = Math.round((fechaSumada - fechaBase) / (1000 * 60 * 60 * 24));
document.body.innerHTML+=(`<h3>Diferencia de días</h3>`);
document.body.innerHTML+=(`Días entre ${fechaBase.toLocaleDateString()} y ${fechaSumada.toLocaleDateString()}: ${diasTranscurridos} días <br>`);