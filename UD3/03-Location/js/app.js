"use strict"


console.log("Host (dominio y puerto):", location.host);
console.log("URL completa:", location.href);
console.log("Protocolo:", location.protocol);
console.log("Hostname (solo dominio):", location.hostname);
console.log("Puerto:", location.port);
console.log("Ruta del archivo (path):", location.pathname);
console.log("Cadena de consulta (query string):", location.search);

//Es función permite ir a un determinado objeto de la página identificado por su ID.
function irSeccion(id){
    window.location.hash=id;
    console.log(location.hash);
    console.log("URL completa:", location.href);
}
//Esta función permite cargar una nueva página en la ventana
function cargar(){
    //location.assign("pagina.html");
    location.assign("pagina.html");
}

function cargarAnterior(){
    location.assign("index.html");
}