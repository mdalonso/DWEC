"use strict";
//Tenemos una clase vehículo con una propiedad tipo que permite
//clasificar los vehículos en diferentes categorías.
//El objetivo es crear vehículos de distintos en base a su tipo.
class Vehiculo {
    constructor(tipo) {
      this.tipo = tipo;
      
    }
  
    mover() {
      console.log(`El ${this.tipo} se está moviendo.`);
    }
  }
  //Creamos clases que heredan de esa clase principal
  class Coche extends Vehiculo {
    constructor() {
      super("coche");
      //RESTO DE CAMPOS (matricula, cilindrada, marca, color, fecha última revisión...,)
    }
  }
  
  class Bicicleta extends Vehiculo {
    constructor() {
      super("bicicleta");
      //RESTO DE CAMPOS (marca, modelo, color...)
    }
  }
  //la clase FÁBRICA permite crear diferentes vehículos según el tipo sin tener quellamar con new
  //a diferentes clase de forma independiente ya en la aplicación.
  class FabricaVehiculo {
    //Eel  método estático crearVehículo, creará un Coche o una Bicicleta según el valor de tipo.
    static crearVehiculo(tipo) {
      //también se puede implementar con un switch
      if (tipo === "coche") {
        return new Coche();
      } else if (tipo === "bicicleta") {
        return new Bicicleta();
      } else {
        throw new Error("Tipo de vehículo no soportado.");
      }
    }
  }
  //Podemos crear diferentes tipos de vehículos sin recurrir a new cada vez que necesitemos un
  //vehículo distinto.
  //Sólo tenemos un new por cada clase y centralizados en el mismo lugar.
  
  const vehiculo1 = FabricaVehiculo.crearVehiculo("coche");
  vehiculo1.mover();  // "El coche se está moviendo."
  
  const vehiculo2 = FabricaVehiculo.crearVehiculo("bicicleta");
  vehiculo2.mover();  // "El bicicleta se está moviendo."
  