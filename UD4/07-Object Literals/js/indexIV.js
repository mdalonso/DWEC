"use strict"; 
/**
 * DEFINCIÓN DE MÉTODOS
 * USO DE THIS
 * CREACIÓN DE OBJETOS A PARTIR DE OTROS
 */


//declaraciones
//const nombre='Frigorífico', precio=300, color='red';

//objeto literal, agrupar todo en una variable
const nombre="María";
const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red',
    //Se pueden definir funciones como propiedades.
    //En este caso, se está definiendo un método TOSTRING sobre el objeto literal para que devuelva una cadena.
    toString: function(){//Como expresión de función
        //THIS permite hacer referencia al propio objeto.
        //Es necesario especificarlo para hacer referencia a las propiedades del objeto desde un método.
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    },
    //como función flecha
    toString2: ()=>`El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`
}
//Se define otro objeto literal que se llama MEDIDAS
const medidas={
    peso:'60 Kg',
    altura:'2m'
}

//copiar dos objetos (O MÁS) en uno
//Método ASSIGN(): Crea un objeto que agrupa las propiedades de los objetos que se pasan como parámetro.
const objetoI=Object.assign(electro,medidas);
console.log(objetoI);

//Esto también se puede hacer utilizando el operador SPREAD ...
//otra de forma de copiar; spread operator
const objetoII={...electro,...medidas};
 console.log(objetoII);

console.log(objetoII.toString());

console.log("con función flecha");
console.log(objetoII.toString2());
