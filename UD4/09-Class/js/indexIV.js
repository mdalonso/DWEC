"use strict";
//USO DE PROPIEDADES Y MÉTODOS ESTÁTICOS.
//Las propiedades y métodos estáticos se invocan desde la propia clase.
//NO SE PUEDEN INVOCAR DESDE LAS INSTANCIAS.
class Electro{
    //constructor
    //recibe como parámetros de entrada el valor de las propiedades al instanciar la clase
    static nElectro=0;
    constructor(nom,precio, color){
        //La referencia a las propiedades se realiza a través de this, igual con con los constructores de objetos
        this.nombre=nom;
        this.precio=precio;
        this.color=color;
        this.disponible=true;//valor por defecto
        
        //Se invocan desde la clase.
        //No se pueden invocar desde this porque this representa a la instancia
        //que se está creando.
        Electro.nElectro++;
        
    }
   
    //métodos. Se definen fuera del constructor.
    toString(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
    static cuantosElectros(){//Los métodos static se llaman sin instanciar la clase. 
        return(`Se han creado ${Electro.nElectro} electrodomésticos`);
    }
}


try {
    let electro1=new Electro("lavadora",450,"blanco");
    let electro2=new Electro("frigorífico",600,"panelado");
    let electro3=new Electro("batidora",70,"blanco");
    let electro4=new Electro("lavavajillas",500,"aluminio");

    console.log(Electro.cuantosElectros());

} catch (error) {
    console.log(error);
}