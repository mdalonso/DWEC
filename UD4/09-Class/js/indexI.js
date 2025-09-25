"use strict"; 
/*
Las clases son una mejora sintáctica sobre la herencia basada en prototipos (a partir de EcmaScript 2015-ecma6)
-Ofrecen una sintaxis más simple para crear las classes
-No utiliza la palabra function. Utiliza la palabra class
-Las propiedades se definen en un método constructor()
*/
//CLASS: Creación de clases instanciables ********************************
class Electro{
    //constructor
    //recibe como parámetros de entrada el valor de las propiedades al instanciar la clase
    constructor(nom,precio, color){
        //La referencia a las propiedades se realiza a través de this, igual con con los constructores de objetos
        this.nombre=nom;
        this.precio=precio;
        this.color=color;
        this.disponible=true;//valor por defecto
    }
   
    //métodos. Se definen fuera del constructor.
    toString(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
    static mensaje(){//Los métodos static se llaman sin instanciar la clase. 
        return("Creado un objeto electrodomético");
    }
}



//HERENCIA ***************************************************************
//Para implementar herencia se utiliza la palabra reservada EXTENDS
class DispElec extends Electro{
    //crear el constructor
    //como el constructor de la clase base requiere parámetros de entrada (en este caso)
    //es necesario tener esto en cuenta a la hora de definir el constructor de la clase derivada
    constructor(nom, precio, color, disco, ram){
        super(nom, precio,color); //Se invoca al constructor de la clase base
        this.disco=disco;
        this.ram=ram;
    }
        
   toString(){//Se redefine el método toString para la clase derivada
        //También se puede hacer uso de los métodos definidos en la clase base accediendo a ellos con
        //la palabra reservada SUPER.
        //Si no se redefine el método, la clase derivada utilizará el que se haya definido en la clase base
        return `${super.toString()}\n El disco duro es de ${this.disco} y la memoria es de ${this.ram}`;
    }
}

//Instanciación de los objetos
const frigo=new Electro("Frigo", 200,'red');
const horno=new Electro("Horno", 300,'blue');
const portatil=new DispElec("HP", 700, "white", "500Gb", '12Gb')

console.log(frigo, horno);
console.log(frigo.toString());
console.log(horno.toString());

//***************Comportamiento de los métodos STATIC.**********************
//El método mensaje() sólo se puede invocar desde la propia clase.
console.log(Electro.mensaje());
//La instancia de Electro no puede usar el método mensaje()
//console.log(frigo.mensaje()); //error (descomentar esta línea para probarlo)

//portatil utiliza el toString redefinido en la clase derivada.
console.log(portatil);
console.log(portatil.toString());

