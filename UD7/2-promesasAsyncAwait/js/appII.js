"use strict";

/**Con promesas */
//crear promesa
//la función aprender recibe un texto como parámetro de entrada y devuelve un objeto PROMESA.
//el ejecutor consiste devolver el texto que se ha recibido como parámetro una vez transcurridos 2 segundos 
//en el caso de que no esté vacío o bien el mensaje "No estoy aprendiendo nada de nada" en caso contrario


const aprender = (texto) => {
  return new Promise((resolve, reject) => {
    if (texto != "" && texto != undefined) {
      setTimeout(() => {
        resolve(texto);
      }, 2000);
    } else {
      reject("No estoy aprendiendo nada de nada");
    }
  });
};
//uso de la promesa
//En primer lugar se imprime por consola el mensaje "Estoy"
 console.log("Estoy");
 //Se invoca a la función aprender con el parámetro de entrada "aprendiendo", por tanto, pasados dos segundos
 //en el ejecutor se invoca a resolve lo que dispara el .then
 //.then recibe como parámetro una función anónima que a su vez recibe como parámetro el resultado del EJECUTOR...
 //...en este caso, la cadena que se le pasó como parámetro: "aprendiendo"
 aprender("aprendiendo")
   .then((respuesta) => {
     console.log(respuesta);
   })
//Podemos probar el el .catch modificando la llamada a la función aprender y pasándole una cadena vacía (inténtalo)
   .catch((error) => {
     console.log(error);
   })
//Además, tras en .then se lanza el .finally el cual recibe una función que imprime por consola el mensaje "Promesas"
   .finally(() => {
     console.log("como funcionan las promesas");
   });

 