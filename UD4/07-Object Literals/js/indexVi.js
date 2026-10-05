"use strict"; 
//OBJETOS ANIDADOS: Objetos dentro de objetos
//declaraciones

const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red',
    //Este objeto tiene una propiedad que a su vez es un objeto con dos propiedades.
    //Y cada una de esas propiedades es un nuevo objeto.
    informacion:{
        medidas:{
            peso:'50kg',
            altura:'2m'
        },
        fabricacion:{
            pais:'España'
        }
    },
    //método
    toString:function(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    }
}  

//Para acceder a las propiedades de los objetos anidados se utiliza el operador . para ir profundizando en el anidamiento
console.log(electro.informacion);
//mostrar las medidas
 console.log(electro.informacion.medidas);
// //acceder a la propiedad pais
 console.log(electro.informacion.fabricacion.pais);
 
// //destructuring
// //extraer en una variable el objeto informacion

//SINTAXIS: {nivel1:{nivel2:{nivel3:{...nivelN}}}}=objeto.
//Extrae la propiedad del nivel N.
//Esta propiedad puede ser un nuevo objeto

//Para que la siguiente líneas funcionen hay que comentar la línea 53, ya que ahí se vuelve a definir
// la variable INFORMACIÓN.
//const {informacion}=electro;
//console.log(informacion);

//extraer en una variable el objeto medidas
 const {informacion:{medidas}}=electro;
 console.log(medidas);
 
//extraer en una variable la propiedad altura
 const {informacion:{medidas:{altura}}}=electro;
 console.log(altura);

// //extraer en una variable la propiedad pais
const {informacion, informacion:{fabricacion:{pais}}}=electro;
console.log(informacion);

//const {pais}=electro.informacion.fabricacion;
 console.log(pais);