"use strict"

/**
 * @description Patrón de Diseño Observer. Supongamos que estamos desarrollando un sistema
 *  de chat en tiempo real. Queremos que los usuarios puedan enviar mensajes
 *  y que esos mensajes se muestren automáticamente en tiempo real en la interfaz de usuario 
 * de todos los demás usuarios conectados.
 * 
 */


class Chat {
  constructor() {
    this.mensajes = [];
    this.usuarios= [];
  }

  addUsuario(usuario) {
    this.usuarios.push(usuario);
  }

  removeUsuario(usuario) {
    const index = this.usuarios.findIndex(usu=>usu==usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
    }
  }

  sendMensaje(mensaje) {
    this.mensajes.push(mensaje);
    this.notificarUsuarios(mensaje);
  }

  notificarUsuarios(mensaje) {
    this.usuarios.forEach((usuario) => {
      usuario.update(mensaje);
    });
  }
}

class ChatDisplay {
  constructor(usuario) {
    this.usuario = usuario;
  }

  update(mensaje) {
    //Lógica para actualizar la interfaz y que todos los usuarios
    //vean los mensajes enviados
    console.log(`${this.usuario} ha recibido un nuevo mensaje: ${mensaje}`);
  }
}

// Ejemplo de uso
const chat = new Chat();

const user1 = new ChatDisplay("Usuario1");
const user2= new ChatDisplay("Usuario2");

chat.addUsuario(user1);
chat.addUsuario(user2);

chat.sendMensaje("¡Hola a todos!"); // Salida: Usuario1 ha recibido un nuevo mensaje: ¡Hola a todos!
                                            //         Usuario2 ha recibido un nuevo mensaje: ¡Hola a todos!

chat.sendMensaje("¿Cómo están?"); // Salida: Usuario1 ha recibido un nuevo mensaje: ¿Cómo están?
                                          