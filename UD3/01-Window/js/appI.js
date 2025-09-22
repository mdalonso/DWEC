"use strict"; //Obligatorio declarar variables y constantes
/* QUÉ SE TRABAJA EN ESTE SCRIPT 
- Dos métodos del objeto WINDOW
        - Open: creación de una nueva ventana tanto con un contenido predefinido como una página en blanco.
        - close: Se cierra la ventana 
- Se introduce la creación de funciones
*/
let ventana,
i = 1;//Al no especificar nada esta variable se define como var.
//Le asignamos un nombre a la ventana principal para poder distinguirla 
window.name="VentanaPrincipal";
console.log(window);//window es el objeto global
console.log(self);//self equivale a window
console.log(ventana);//La variable ventana, inicialmente contiene UNDEFINED.
//crear funciones
function crearVentSec() {

//El método OPEN devuelve un objeto WINDOW
//Abrir la ventana con otra url (descomentar la siguiente línea y comentar las líneas 28,29,30,36,38 Y 41)
    //sintaxis--> open(url,nombre,caracteristicas)
    //open("https://www.juntadeandalucia.es/educacion/portales/web/formacion-profesional-andaluza","ventana", "height=200,width=200");
    
//Como el objeto window devuelto por la sentencia open no se asigna a ninguna variable, esa
//ventana no puede ser manipulada. Para poder manipularla necesitamos recibirla en alguna variable

//En este ejemplo siempre se recibe la nueva ventana en la misma variable por lo que sólo se va a poder manipular la última que se haya creado, que es la que está
//alojada en la variable VENTANA.
    ventana = open("", "ventana " + i, `width=400,height=400,top=400`);
    console.log(ventana.name);//nombre de la ventana secundaria
    console.log(ventana.opener.name);//El nombre de la venana que ha abierto la ventana secundaria

//LA NUEVA VENTANA PUEDE SER MANIPULADA
//crear una etiqueta h1 y un botón en la ventana secundaria
//El objeto DOCUMENT se verá a más adelante.
   //INNERHTML sirva para meter contenido html en un objeto del DOM, en este caso en el body.
    document.body.innerHTML += "<h1>Ventana Principal</h1>";//Document del objeto global

    ventana.document.body.innerHTML += "<h1>Ventana Secundaria</h1>";//Document de la ventana secundaria

  //PAra esta nueva ventana self es ella misma (la estancia i de la ventana secundaria), no la ventana principal.
    ventana.document.body.innerHTML += "<button type='button' onclick='self.close();'>Cerrar ventana Sec</button>";
    
   
  //La variable i es un contador que indica el número de ventanas secundarias abiertas, es decir,
  //el número de veces que se pulsa el botón "Crear Ventana secundaria"
    i++;
}

function cerrarVentPrin() {
  //Al ejecutar el método close sin especificar la ventana de referencia, se cierra
  //la ventana más global que es window o self (donde se está ejecutando el código)
  close(); //cerrar ventana principal
}
