"use strict"; //Obligatorio declarar variables y constantes
/* QUÉ SE TRABAJA EN ESTE SCRIPT 
- Dos métodos del objeto WINDOW
        - Open: creación de una nueva ventana tanto con un contenido predefinido como una página en blanco.
        - close: Se cierra la ventana 
- Se introduce la creación de funciones
*/
let ventana,
i = 0;//Esta variable se define como var (global)

//crear funciones
function crearVentSec() {
  console.log(ventana);
//El método OPEN devuelve un objeto WINDOW
//Abrir la ventana con otra url (descomentar la siguiente línea y comentar las líneas 31, 36 y 38)

  //open("https://www.iestrassierra.com","ventana", "height=200,width=200,resizable=no");

//Crea una nueva ventana que se recibe en la variable declarada para su manipulación.
//El nombre que recibe la ventana es valor del atributo name de la instancia que en cada momento se crea con open 
//(en este caso es "ventana").
  console.log(window);//cambiar window por self para comprobar que referencia el mismo objeto

//Si resizable=no no produce ningún efecto, es debido a que muchos de los navegadores actuales 
//ignoran este tipo de configuraciones para proteger la experiencia del usuario.
//Como el objeto window devuelto por la sentencia open no se asigna a ninguna variable, esa
//ventana no puede ser manipulada. PAra poder manipularla necesitamos recibirla en alguna variable

//Siempre se recibe en la misma variable por lo que sólo se va a poder manipular la última que se haya creado, que es la que está
//alojada en la variable VENTANA.
  ventana = open("", "ventana" + i, "width=400,height=400");
  
//LA NUEVA VENTANA PUEDE SER MANIPULADA
  //crear una etiqueta h1 y un botón en la ventana secundaria
  //El objeto DOCUMENT se verá a más adelante.
  ventana.document.write("<h1>Ventana Secundaria</h1>");
  //PAra esta nueva ventana self es ella misma (la estancia i de la ventana secundaria), no la ventana principal.
  ventana.document.write("<button type='button' onclick='self.close();'>Cerrar ventana Sec</button>");
  
  //La variable i es un contador que indica el número de ventanas secundarias abiertas, es decir,
  //el número de veces que se pulsa el botón "Crear Ventana secundaria"
  i++;
}
function cerrarVentPrin() {
  //Al ejecutar el método close sin especificar la ventana de referencia, se cierra
  //la ventana más global que es window o self (donde se está ejecutando el código)
  close(); //cerrar ventana principal
}
