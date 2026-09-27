"use strict"
//declaración variables y constantes
//La inicialización adapta las fechas a la hora local.
//Creación de objeto Date inicializado a la fecha actual.
const fechaHoy=new Date();
//Creación de objeto Date inicializado con timespan (1/1/1970)
const fechaMilis=new Date(1999999999999);
//Creación de objeto Date inicializado a partir de una cadena de fecha
//La cadena puede tener varias formas
const fechaCadena1=new Date('11/12/2026');
const fechaCadena2=new Date('2026-10-15');
//Creación de objetos a partir de parámetros (el mes empieza en 0)
const fechaParam=new Date(2026,8,25,12,23,43);

// Fechas creadas en el formato propio que devuelve cada constructor
document.body.innerHTML+=(`<h3>Fechas iniciales</h3>`);
document.body.innerHTML+=(`La fecha de hoy: ${fechaHoy}`);
document.body.innerHTML+=(`<br>La fecha en milisengundos: ${fechaMilis}`);
document.body.innerHTML+=(`<br>La fecha desde cadena (MM/DD/YYYY): ${fechaCadena1}`);
document.body.innerHTML+=(`<br>La fecha desde cadena (YYYY-MM-DD): ${fechaCadena2}`);
document.body.innerHTML+=(`<br>La fecha con Parámetros: ${fechaParam}`);

//mostrar fecha con diferentes formatos
document.body.innerHTML+=(`<h3>Fecha con Formatos</h3>`);
//Fecha en formato de hora local
document.body.innerHTML+=(`La fecha de hoy (formato local): ${fechaHoy.toLocaleDateString()}`);
//Fecha en formato de cadena de fecha (formato universal)
document.body.innerHTML+=(`<br>La fecha en milisengundos: ${fechaMilis.toDateString()}`);
//Si la queremos en un formato concreto podemos construirlo extrayendo cada parte por separado
document.body.innerHTML+=(`<br>La fecha de cadena (día-mes-año): ${fechaCadena1.getDate()}-${fechaCadena1.getMonth()+1}-${fechaCadena1.getFullYear()}`);
//Mostrar la hora en formato local
document.body.innerHTML+=(`<br>Hora de fecha con parámetros: ${fechaParam.toLocaleTimeString()}`);
//Mostrar la fecha en formato ISO
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
//transformarlo en la unidad que más nos convenga a nuestros intereses. En este caso, días.
const diasTranscurridos = Math.round((fechaSumada - fechaBase) / (1000 * 60 * 60 * 24));
document.body.innerHTML+=(`<h3>Diferencia de días</h3>`);
document.body.innerHTML+=(`Días entre ${fechaBase.toLocaleDateString()} y ${fechaSumada.toLocaleDateString()}: ${diasTranscurridos} días <br>`);
