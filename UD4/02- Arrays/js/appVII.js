"use strict"; 

//MÉTODO MAP()


//declaraciones
//Definimos un array de 4 elementos
const animales=["perro", "gato", "ratón", "león"];

//Recorremos el array con un FOREACH
 const animalesForEach =animales.forEach(animal =>{
    return animal
});//solo recorre los elementos. NO LOS DEVUELVE

//Otra forma de hacer lo mismo de antes pero simplificando la función FLECHA
//ANOTACIÓN: Las funciones flecha pueden devolver valores sin especificar el RETURN siempres que sea la única línea de la función.
const animalesForEachII =animales.forEach(animal =>animal); //no devuelve elementos

//El método MAP() del objeto ARRAY permite crear un array a partir de otro. 
//El método MAP recibe como parámetro una función que se aplica a cada elemento del array devolviendo un array formado por todos los valores generados
//Funciona de forma similar al ForEach pero esta vez devolviendo el elemento en cuestión (EL FOREACH devuelve un UNDEFINED)
//Esa función recibe como primer parámetro el elemento del array y opcionalmente como segundo y tercer parámetro puede recibir
//el índice del elemento y el array propiamente dicho.
//El método MAP va devolver un array formado por los elementos que devuelve la función que recibe como parámetro.
const animalesMap=animales.map(animal=>"Animal:"+animal); //recorre y envía los elementos

console.log(("foreach"));
console.table(animalesForEach); //animalesForEach no contiene nada (UNDEFINED) ya que el forEach sobre un array sólo lo recorre, no devuelve el elemento.
console.table(animalesForEachII);//animalesForEachII no contiene nada (UNDEFINED) ya que el forEach sobre un array sólo lo recorre, no devuelve el elemento.

console.log(("map"));
console.table({animalesMap});//animalesMap es un ARRAY


