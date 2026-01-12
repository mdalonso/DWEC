"use strict";
//en este ejemplo tenemos dos funciones:

//aprender: proceso productor
//mostrar: proceso consumidor

//la función aprender recibe un texto como parámetro de entrada y devuelve un objeto PROMESA.
//el ejecutor de esa promesa consiste devolver el texto que se ha recibido como parámetro una vez transcurridos 2 segundos 
//en el caso de que no esté vacío o bien el mensaje "No estoy aprendiendo nada de nada" en caso contrario
 //const aprender = (texto) => {
  // setTimeout(() => {
  //   console.log(texto);
  // }, 2000);
 //};

const aprender = (texto) => {
  return new Promise((resolve, reject) => {
    if (texto != "" && texto != undefined) {
      setTimeout(() => {
        resolve(texto);
      }, 2000);
    } else {
      reject("No estoy aprendiendo nada de nada ");
    }
  });
};

 /**
  * async/await
  */

 //La función mostrar es un proceso consumidor. Necesita del resultado de la función aprender para poder realizar su tarea.
//La función mostrar se define como async. 
//const mostrar=async()=>{ //otra forma de definir una función async
async function mostrar(){
    //Imprime por consola el texto "Estoy"
    console.log("Estoy");
//Ahora necesita del proceso productor, el cual se ha implementado a través de una promesa.
//Se invocará a ese produceso productor (función aprender) mediante un try/catch
    try { //El try sustituye al then de la promesa visto en el ejemplo anterior.
        //(Si quitamos el await podemos ver el objeto PROMESA devuelvo por la función aprender.)
        //await evitará que la ejecución siga en la siguientes instrucción hasta que aprender no haya terminado totalmente
        //aprender es el proceso productor (EJECUTOR de la promesa)
        const response=await aprender("aprendiendo");
        console.log(response);
       

    } catch (error) {//si se invoca aprender con la cadena vacía, se lanzará el catch. Sustituye al catch de la promesa
        console.log(error)

    }
    //Finalmente se termina de escribir el mensaje en la consola.
    console.log("Promesas/AsyncAwait");
}

mostrar();
