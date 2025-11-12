"use strict";
//Aplicación de Singleton: GESTIONAR UNA ÚNICA CONEXIÓN A UNA BASE DE DATOS
//Se crea una clase que gestiona la conexión a la base de datos.
class ConexionDB {
    static instancia;
    //En su constructor, se comprueba en primer lugar si existe ya previamente
    //una instancia de la clase.
    constructor() {
        //instancia es una propiedad estática de la clase ConexiónBD que contendrá un objeto de ese tipo
        //Si ya existe una instancia de la clase (recordemos que false es undefined, 0, -0, null...)
        //se devuelve esa misma instancia ya existente.
      if (ConexionDB.instancia) {
        //El método return termina la ejecución del constructor.
        return ConexionDB.instancia;
      }
      //Si instancia es false (probablemente undefined) se realiza la conexión a la base
      //de datos mediante el método conectar.
      this.conectar();  // Método que inicia la conexión a la base de datos
      //y la propiedad instancia recibe el propio objeto mediante this.
      ConexionDB.instancia = this;
    }
    //El método conectar realiza la conexión a la base de datos.
    conectar() {
      console.log("Conexión establecida con la base de datos.");
    }
  }
  //Si creasmos dos instancias, como en la segunda llamada al constructor se devuelve la instancia
  //creada previamente, la igualdad será true.
  const db1 = new ConexionDB();
  const db2 = new ConexionDB();
  console.log(db1 === db2);  // true
  