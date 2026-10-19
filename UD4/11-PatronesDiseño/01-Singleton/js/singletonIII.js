"use strict";
//Se establece una clase que almacenará la configuración de usuario.
class Configuracion {
    static instancia;
    //En el constructor, se comprueba si ya se ha creado previamente una instancia de esta clase.
    //Esto es posible porque la clase Configuración contiene una propiedad estática que contiene
    //un objeto creado a partir de esta propia clase
    constructor() {
        //Si ya existe una instancia previa, se devuelve esa misma instancia para no crear una nueva.
      if (Configuracion.instancia) {
        return Configuracion.instancia;
      }
      //Si no existe una instancia previa...
      //opciones se define como un objeto vacío que contendrá las distintas configuraciones
      //en forma de pares clave-valor.
      this.opciones = {};//objeto vacío
      //Se crea la instancia y se asigna a la propiedad estática.
      Configuracion.instancia = this;
    }
    //Este método introduce una nueva configuración en el objeto opciones.
    establecerOpcion(clave, valor) {
      this.opciones[clave] = valor;
    }
    //Este método devuelve una configuración en base a la clave.
    obtenerOpcion(clave) {
      return this.opciones[clave];
    }
  }
  //Se establece una configuración.
  const config1 = new Configuracion();
  config1.establecerOpcion("IDUSER", "jlperez");
  config1.establecerOpcion("PORT", 5500);

  //Si se desea crear una nueva instancia, vemos que estamos accediendo
  //a la que ya hemos creado previamente.
  const config2 = new Configuracion();
  console.log(config2.obtenerOpcion("IDUSER"));  // "oscuro"
  
  console.log(config1 === config2);  // true
  