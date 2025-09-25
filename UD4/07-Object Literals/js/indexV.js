"use strict"; 
/**
 * ACCESO A LOS ELEMENTOS INDIVIDUALES DE UN OBJETO LITERAL
 * 
 * Object.keys, Object.values, Object.entries (son métodos estáticos--> No se instancian con el objeto sino
 * que se utilizan desde OBJECT)
 */

//declaraciones

const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red',
    //método
    toString:function(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
}  
//Método KEYS(): (Método estático) Devuelve un array con el nombre de las propiedades del objeto (claves)
 console.log(Object.keys(electro));//devuelve array con las claves 
 //Método VALUES(): Devuelve un array con los valores del objeto.
 console.log(Object.values(electro));//devuelve array con los valores el objeto
 //Método VALUES(): Devuelve un array bidimensional donde la columna 0 es el nombre de la propiedad y la columna 1 es el valor
 console.log(Object.entries(electro));//devuelve array con las claves y valores el objeto

