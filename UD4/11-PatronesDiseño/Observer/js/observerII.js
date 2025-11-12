"use strict";
//Ejemplo: Lectira de datos de una fuente externa, por ejemplo, un sensor de
//temperatura. Si la temperatura es mayor a 35º, la clase observadora debe 
//reaccionar
class FuenteDeDatos {
    constructor() {
      this.observadores = [];
    }
    //Método de suscripción
    suscribir(observador) {
      this.observadores.push(observador);
    }
  
    nuevaLectura(dato) {
      //Aquí iría la lógica de lectura de la información del sensor.
      console.log(`Nueva lectura de datos: ${dato}`);
      this.notificar(dato);
    }
  
    notificar(dato) {
      this.observadores.forEach(observador => observador.actualizar(dato));
    }
  }
  
  class SistemaDeAlertas {
    actualizar(dato) {
      if (dato > 35) {
        console.log("¡Alerta! Dato fuera de rango:", dato);
      }
    }
  }
  
  const fuenteDeDatos = new FuenteDeDatos();
  const sistemaAlertas = new SistemaDeAlertas();
  
  fuenteDeDatos.suscribir(sistemaAlertas);
  
  fuenteDeDatos.nuevaLectura(45);
  // "Nueva lectura de datos: 150"
  // "¡Alerta! Dato fuera de rango: 150"
  