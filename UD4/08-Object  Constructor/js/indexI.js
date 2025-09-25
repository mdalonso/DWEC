"use strict"; 
//declaraciones

//CREACIÓN DE OBJETOS PREDEFINIDOS MEDIANTE FUNCIONES CONSTRUCTORAS.
/*
 * Mediante FUNCTION definimos un constructor recibe como parámetros los valores a los que se van a inicializar las propiedades.
 * Siempre hay que definir las propiedades haciendo referencia a THIS.
 */

//FUNCIÓN CONSTRUCTORA
function Electro (nom, precio, color){
    //las PROPIEDADES. Siempre deben ser referenciadas mediante this.
    this.nombre=nom;
    this.precio=precio;
    this.color=color;
    this.disponible=true;
    this.id=0;
    
    //MÉTODOS 

    //Se define un método para incrementar el precio un porcentaje determinado.
    //Añadir un método de esta manera hace que cada instancia del objeto implemente el método incrementarPrecio ocupando memoria en cada instancia.
    this.incrementarPrecio=function(valor){
        this.precio=this.precio*(1+valor/100);
    };

    //Redefinición de métodos heredados.
    //Este método toString() es una redefinición del método toString de Object de JS.
    //Los nuevos objetos creados heredan automáticamente de Object todos sus métodos y propiedades de instancia.
    this.toString=function(){
        return `El electrodomestico es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}`;
    };
    
}
//Otra forma más eficiente de añadir nuevos métodos al objeto es a través del prototipo de la función constructora.

//Añadir un método al prototipo hace que sólo exista una instancia del objeto en el prototipo de la plantilla y esta será utilizada por todas
//las instancias del objeto.
//Se añade al prototipo un nuevo método que permite reducir el precio un porcentaje determinado
Electro.prototype.abaratar=function(valor){
    this.precio=this.precio*(1-valor/100);
}

//Creamos una instancia del objeto y hacemos uso de los métodos implementados
let electroprueba=new Electro("lavavajillas",320,"rojo");
console.log(electroprueba.toString());
//Aumentamos el precio un 50%
electroprueba.incrementarPrecio(50);
console.log(electroprueba.toString());
//Abaratamos el producto un 10%
electroprueba.abaratar(10);
console.log(electroprueba.toString());

//Objet.getPrototypeOf nos permite conocer el prototipo de cualquier objeto.
//podemos comprobar que el método incremantarPrecio no forma parte del prototipo ya que se definió dentro de la propia función constructora.
console.log(Object.getPrototypeOf(electroprueba));



//Se puede hacer uso de los métodos que se han heredado de Object sin tener que redefinirlos ya que si no se encuentra una implementación
//en el objeto actual, se subirá por la cadena de prototipos hasta encontrar una implementación.
//por ejemplo, valueOf(). 
console.log(electroprueba.valueOf());//valueOf es heredado de Object


//crear nuevos métodos Podemos comprobar que aunque el método se añade a posteriori, ya aparece en el prototipo que hemos mostrado en la línea 56.
//prototype
Electro.prototype.mostrarMasInfor=()=>{
    return `Podemos añadir más funcionalidad fuera de la clase base`;
}


//************HERENCIA EN JAVASCRIPT
//Definimos un nuevo constructor el cual hereda propiedades y objetos del constructor Electro definido anteriormente
function DispElec(nom,precio,color,disco,ram){
    //crear el constructor
    //La siguiente línea invoca al constructor ELECTRO mediante el método call.
    //Call ejecuta una función forzando a que el this de esa función sea distinto al que debería ser de forma natural.
    //en este caso se está forzando a ejecutar Electro de manera que asuma como su THIS el this de DispElec.

    //Como estamos dentro de DispElec, this es el objeto asociado a DispElec.

    //y después el valor de los propios parámetros del constructor.
    Electro.call(this, nom, precio,color); //propiedades de la clase base

    //Además incorpora dos nuevas propiedades y una redefinición de toString distinta de la que se definió en Electro
   
    this.disco=disco;
    this.ram=ram;
    
    //Redefinimos de nuevo el método toString() para que se adapte a la estructura del nuevo objeto.
     //Los objetos instanciados con DispElec harán uso de un toString distinto al de Electro.
    this.toString=function(){
        return `El cacharro es ${this.nombre} y el precio es ${this.precio} y tienen el color ${this.color}\n El disco duro es de ${this.disco} y la memoria es de ${ram}`;
    }
}

//Creamos un objeto utilizando la nueva función constructora
const dispositivo=new DispElec("ASUS", 1000, "black", "1Tb", '16Gb');

//Inicialmente, la nueva clase no hereda las propiedades y los objetos definidos dentro del prototipo de la función constructora padre.
//sino únicamente los que están en su definición directa, como podemos comprobar con la siguiente línea.
console.log(Object.getPrototypeOf(dispositivo));

//Para que se hereden estos métodos hay que utilizar el método Object.create()
//Object.create() crea un nuevo objeto a partir del objeto que le digamos. En este caso, queremos crear un objeto a partir del prototipo
//de la función constructora padre y asignárselo al prototipo de la función constructora hija.
DispElec.prototype=Object.create(Electro.prototype);

//Creamos un nuevo objeto una vez asignado el prototipo y lo mostramos.
const dispositivo2=new DispElec("TTL", 550, "black", "256Gb", '16Gb');
//Y comprobamos que en este caso el prototipo sí contiene el prototipo de la función constructora padre (Electro)
//Aunque el constructor es también el de la función constructora padre
console.log(Object.getPrototypeOf(dispositivo2));

//Reasignamos el constructor del prototipo para que sea el correcto.
DispElec.prototype.constructor=DispElec;
//Creamos un nuevo objeto.
const dispositivo3=new DispElec("ACER", 400, "grey", "256Gb", '8Gb');
//comprobamos que ahora sí, el prototipo está completo y correcto.
console.log(Object.getPrototypeOf(dispositivo3));


//creamos tres objetos utilizando los constructores definidos.
const frigo=new Electro("Frigo", 200,'red');
const horno=new Electro("Horno", 300,'blue');
const portatil=new DispElec("HP", 700, "white", "500Gb", '12Gb')

//Vemos que portatil, que es una instancia de DispElec, utiliza el toStrig redefinido en su constructor y no el heredado de Electro
console.log(portatil.toString());

console.log(frigo, horno);
console.log(frigo.toString());
console.log(horno.toString());

//Ambos objetos creados a través de Constructores distintos, pueden hacer uso del método mostrarMasInfor()
//Si no hubiera asignado a DispElec el prototipo de Electro esto no sería posible.
console.log(frigo.mostrarMasInfor());
console.log(horno.mostrarMasInfor());

console.log(portatil);
console.log(portatil.toString());
console.log(portatil.mostrarMasInfor());//si se comenta la línea 108 esto da error
