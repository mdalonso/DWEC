"use strict";

/**
 * @description Patrón de Diseño Factory: Vamos a crear un juego de video y necesitamos diferentes tipos
 * de enemigos. Con el patrón de diseño Factory, podemos encapsular la creación de los enemigos
 * y proporcionar una interfaz común para crear diferentes tipos de enemigos
 */

class Enemigo {
  constructor(nombre, puntosVida) {
    this.nombre = nombre;
    this.puntosVida = puntosVida;
  }

  atacar() {
    console.log(`${this.nombre} está atacando.`);
  }
}

class EnemigoFactory {
  static crearEnemigo(tipo) {
    switch (tipo) {
      case "zombie":
        return new Enemigo("Zombie", 100);
      case "esqueleto":
        return new Enemigo("Esqueleto", 75);
      case "demonio":
        return new Enemigo("Demonio", 150);
      default:
        throw new Error(`Tipo de enemigo desconocido: ${tipo}`);
    }
  }
}

//cuerpo script

const zombie=EnemigoFactory.crearEnemigo('zombie');
const esqueleto=EnemigoFactory.crearEnemigo('esqueleto');
const demonio=EnemigoFactory.crearEnemigo('demonio');

zombie.atacar();
esqueleto.atacar()
demonio.atacar()
console.log(zombie instanceof Enemigo);