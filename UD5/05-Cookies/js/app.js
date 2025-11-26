"use strict";
/**Las cookies son un medio para guardar el estado de la navegación http (http es un protocolo sin estado)
 * Usos:
 * - Gestión de sesiones: Información que debe recordar el servidor (inicios de sesión, carritos
 *      de compras, puntos en un juego...)
 * - Personalización: Preferencias de usuario.
 * - Rastreo: Guardar y analizar el comportamiento del usuario
 * Empeoran el rendimiento siendo preferible utilizar APIs de almacenamiento en el cliente
 * como Web Storage API (localStorage/sessionStorage, que veremos más adelante)
 * Una cookie es un par clave-valor que es almacenado de forma local para recordarlo con
 * posterioridad.
 * Después del par clave-valor, se pueden establecer una serie de atributos opcionales:
 * - expires=fecha: Establece el tiempo de validez de la cookie con una fecha (en formato UTC).
 * - max-age=segundos : Establece el tiempo de validez en segundos. Tiene prioridad sobre expires.
 * Si no se especifica ningún parámetro, se estará creando una cookie de sesión.
 * - path=ruta: Ruta para la que la cookie es válida. Si no se especifica, sólo será válida para la ruta de
 *        la página actual.
 * - domain=dominio: Subdominio para el que la cookie es válida (dentro del dominio actual).
 *        Si se establece como domain=.miweb.com será válida para todos los subdominios.
 * - secure: cookie solo se enviará al servidor si la conexión se realiza a través del protocolo https.
 * 
 * La propiedad cookie del objeto document contiene una cadena con los pares clave=valor 
 * de todas las cookies creadas para la página (sólo los pares clave=valor, no sus
 * atributos)
 * LIMITACIONES:
 * Según el protocolo HTTP, las cookies no pueden ser más grandes de 4096 Bytes (4KB).
 * Hay un límite de cookies por dominio. Depende del navegador, pero suelen ser 20 cookies.
 */
//declaración variables, funciones...
let clave, valor;
//Este ejemplo creará las cookies con los valores proporcionados por el usuario en el formulario.
document.addEventListener("DOMContentLoaded", () => {
  //establecer objetos
  clave = document.querySelector("#clave");
  valor = document.querySelector("#valor");

  //EVENTOS
  //se asocian las funciones a los eventos de cada botón.
  //BOTÓN CREAR COOKIE
  //El método setCookie guarda el par clave-valor en las cookies.
  document.querySelector("#crear").addEventListener("click", setCookie);
  //BOTÓN BUSCAR
  //Recuperará el valor de la cookie en el objeto valor (caja de texto de la contraseña)
  //El método findCookie() devuelve el valor de la cookie en base a la clave.
  document.querySelector("#buscar").addEventListener("click", () => {
    valor.value = findCookie();
  });
  //BOTÓN LISTAR
  //Método listCookie muestra las cookies almacenadas.
  document.querySelector("#listar").addEventListener("click", listCookie);
  //BOTÓN ELIMINAR
  //delCookie elimina una cookie en base a la clave introducida por el usuario.
  document.querySelector("#eliminar").addEventListener("click", delCookie);
});

const setCookie = () => {
  //COOKIE DE SESIÓN***********************
  //Si a una cookie no le pasamos ningún parámetro (expires o max-age), estamos creando una cookie de sesión.
  //Esto significa que se eliminará cuando el usuario cierre el navegador.
  document.cookie="edad=40";//"Encuesta="+JSON.stringify(objeto);

  //Podemos establecer la duración de una cookie.
  //Se puede hacer de dos maneras:
  //- 1º forma: Con el parámetro expires=fecha, le decimos que la cookie tenga una validez hasta la fecha
  //  en cuestión. La fecha debe ser una cadena de fecha en formato UTC.

  //La variable fecha se inicializa a la fecha actual.
   let fecha = new Date();
   //Se le suman 4654245 milisegundos al día actual expresado en milisegundos transcurridos desde
   //el 01/01/1970 (getTime) 
   fecha.setTime(fecha.getTime() + 4654245);
   //(hay que descomentar la siguiente línea para probar expires)
   //La fecha se transforma a formato UTC
   document.cookie = `${clave.value}=${encodeURIComponent(valor.value)};expires=${fecha.toUTCString()};secure`;

   //2º forma: Con el parámetro max-age. Establece la duración en segundos de la cookie.
   // (si establecemos el parámetro secure, la cookie solo estará disponible en el servidor para conexiones
   // encriptadas, protocolo https,por ejemplo)
   //Es conveniente codificar los valores de la cookie para evitar los caracteres que pueden causar problemas
   //en el navegador o en el servidor (caracteres que pueden ser interpretados de forma errónea). Para ello se 
   //utiliza el método encodeURIComponent.
   //
   //console.log(encodeURIComponent(valor.value));
   //document.cookie = `${clave.value}=${encodeURIComponent(valor.value)};max-age=30;secure`;

  // //limpiar campos
  clave.value = "";
  valor.value = "";
};

//findCookie devuelve el valor asociado a una cookie que se va a localizar en 
//base a su clave (clave=valor). La clave será la introducida en la primera
//caja de texto
const findCookie = () => {
  //Definimos tres variables
    let aCookies,//Array para guardar todas las cookies
    aDato,//Será un array para guardar las partes de la cookie que se está inspeccionando en cada momento
    i = 0;

    //La variable buscar contendrá el resultado de la búsqueda
    //Por defecto estableceremos que la cookie no existe
  let buscar = "La cookie no existe";
  //trim-> Devuelve la cadena eliminando los espacios en blanco
  //        del principio y del final (retorno de carro, tabuladores...)
  //Si se ha introducido alguna clave que buscar...
  if (clave.value.trim().length != 0) {
  //Comprobamos que existan cookies creadas. Si la propiedad cookie está vacía es que no hay ninguna cookie...
    if (document.cookie != "") {
      //el método split devuelve un array con todos los elementos de la cadena
      //que se obtienen utilizando el parámetro que se le pasa como separador.
      //En este caso serán todos los pares clave=valor existentes.
      aCookies = document.cookie.split(";"); //extraer las cookies
      do {
        //Recorremos el array de cookies y extraemos las dos partes de cada par en
        //un nuevo array (aDato).
        aDato = aCookies[i].split("=");
        //Si la clave coincide con el valor introducido...
        //(El elemento 0 del array Dato contiene la clave de la cookie)
        if (aDato[0].trim() == clave.value) {
          //...se rescata el valor de la cookie en la variable buscar
          //Hay que decodificarla porque se almacenó codificada.
          //El elemento 1 del array aDato, contiene el valor de la cookie
          buscar = decodeURIComponent(aDato[1]); //pasamos el valor
        }
        i++;
        //Se comprueban todo el array con las cookies hasta que se encuentre la 
        //clave en cuestión.
      } while (i < aCookies.length && aDato[0] != clave.value);
    }
  } else {
    clave.value = "Introduzca clave a buscar";
  }
  //Se devuelve el valor de la clave que se está buscando
  return buscar;
};

//**ELIMINAR UNA COOKIE********* */
const delCookie = () => {
  //Si se localiza la cookie (se reutiliza la función findCookie)
  if (findCookie() != "La cookie no existe") {
    //1º forma -->Establecer el parámetro max-age a un valor negativo
    //Hay que pasarle la clave para poder localizar la cookie.
    //En realidad lo que estamos haciendo es modificar la cookie.
    //Se puede modificar una cookie volviendo a referenciarla por su valor
    //en este caso le hemos eliminado el valor asociado y le hemos puesto max-age a un
    //valor negativo.
    document.cookie = `${clave.value}=;max-age=-1`;
    //también se puede hacer eliminar de la siguiente forma:
    //2º forma--> EStableciendo expires a una fecha pasada
    //document.cookie=`${clave.value}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`
    valor.value = "Cookie borrada";
  }
};


//Mostrar la lista de cookies
const listCookie = () => {
  let listar = "<h4>Listado de cookies</h4>";
  //document.cookie contiene una cadena con todas las cookies con el formato:
  //clave=valor;clave=valor;clave=valor....
  console.log(document.cookie);
  //Si hay alguna cookie creada
  if (document.cookie != "") {
    //Si existen cookies
    //Rescatamos cada par clave=valor con el método split usando de separador el ;
    let aCookies = document.cookie.split(";");
    //Ahora podemos recorrer cada elemento del array de la forma que queramos
    aCookies.forEach((element) => {
      //element es un par clave=valor
      //Utilizamos decodeURIComponent por si el valor se ha almacenado codificado
      //<br> añade un salto de línea
      listar += `${decodeURIComponent(element)}<br>`;
    });
  } else {
    listar += "No hay cookies que listar";
  }
//Usamos innerHTML para que interprete las etiquetas HTML
  document.querySelector("#capa").innerHTML = listar;
};