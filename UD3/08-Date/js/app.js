"use strict";

const fechaHoy=new Date();
console.log(fechaHoy);
const fechaMilis=new Date(1999999999999);
console.log(fechaMilis);
const fechaCad1=new Date("11/12/2026");
console.log(fechaCad1);
const fechaCad2=new Date("2026-11-12");
console.log(fechaCad2);
const fechaVal=new Date(2026,9,24,20,15,50);
console.log(fechaVal);

console.log(fechaHoy.toDateString());
console.log(fechaHoy.toTimeString());
console.log(fechaHoy.toLocaleDateString());
console.log(fechaHoy.toLocaleTimeString());
console.log(fechaHoy.toISOString());

const fechaSuma=new Date();
fechaSuma.setDate(fechaHoy.getDate()+24);
console.log(fechaSuma.toLocaleDateString());

const tiempoTranscurrido=Math.floor((fechaSuma-fechaHoy)/(1000*60*60*24));
console.log(tiempoTranscurrido);


const formatoCorto=new Intl.DateTimeFormat("es-Es",{dateStyle:'short'});
const formatoMedio=new Intl.DateTimeFormat("es-Es",{dateStyle:'medium'});
const formatoLargo=new Intl.DateTimeFormat("es-Es",{dateStyle:'long'});
const formatoFull=new Intl.DateTimeFormat("es-Es",{dateStyle:'full',timeStyle:'short',hour12:true});

console.log(formatoCorto.format(fechaHoy));
console.log(formatoMedio.format(fechaHoy));
console.log(formatoLargo.format(fechaHoy));
console.log(formatoFull.format(fechaHoy));
