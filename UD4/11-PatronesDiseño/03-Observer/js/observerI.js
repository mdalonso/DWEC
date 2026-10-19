"use strict";

//Estructura general de un patrón observer:
//1.- Clase "observadora" que debe responder al cambio de estado 
// de la clase "sujeto" --> Debe incorporar un método de respuesta público
//2.- Clase "sujeto" que cambia de estado o realiza una acción
//  a la que debe reaccionar la clase "observadora" -->Debe incorporar un método de
//  suscripción y un lugar donde se invoque al método de respuesta de la
//  clase observadora.

//Se define una clase ServicioDeMensajes que permitirá suscribir
//a otros objetos para que sean avisados cuando se envíe un mensaje.

//Esta clase mantiene un array con todos los objetos suscritos a las
//notificaciones. Este array estará vacío en un primer momento.
class ServicioDeMensajes {
    constructor() {
      this.observadores = [];
    }
    //El método suscribir. Añade un objeto como observador al array de
    //observadores.
    suscribir(observador) {
      this.observadores.push(observador);
    }
    //El método enviarMensaje define el mensaje que se enviará y 
    //hace uso del método que envía las notificaciones.
    enviarMensaje(mensaje) {
      //Lógica de envío de mensajes
      //Aquí iría toda la lógica a la que debe reaccionar el observador
      console.log(`Nuevo mensaje: ${mensaje}`);

      this.notificar(mensaje);
    }
    //El método notificar envia la notificación a todos los observadores.
    //Los observadores deben tener algún método público que invocar, que es
    //el que recoge la acción con la que responde el observador.
    notificar(mensaje) {
      this.observadores.forEach(observador => observador.actualizar(mensaje));
    }
  }
  //La clase usuario será la plantilla para definir observadores.
  class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    actualizar(mensaje) {
      //Método de respuesta
      console.log(`${this.nombre} ha recibido el mensaje: ${mensaje}`);
    }
  }
  
  const servicioMensajes = new ServicioDeMensajes();
  const usuario1 = new Usuario("Ana");
  const usuario2 = new Usuario("Juan");
  
  servicioMensajes.suscribir(usuario1);
  servicioMensajes.suscribir(usuario2);
  
  servicioMensajes.enviarMensaje("Hola, ¿cómo estás?");
  // "Nuevo mensaje: Hola, ¿cómo estás?"
  // "Ana ha recibido el mensaje: Hola, ¿cómo estás?"
  // "Juan ha recibido el mensaje: Hola, ¿cómo estás?"
  