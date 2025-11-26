"use strict";
//Objeto RegExp permite aplicar una expresión regular a una cadena.
//Método expresion.test(cadena)

/** Formas de crear un objeto Regexp:
 * 1º notación literal:
 *  let er=/expresion_regular/[modificadores]; --> La expresión se compila en la asignación
 *      Util cuando no se va a modificar ya que ahorra tiempo.
 * 2º constructor:
 *  let er=new RegExp(/expresion_regular/[,modificadores]);--> ECMAScript 6
 *      Útil cuando la expresión va a cambiar y necesita ser compilada varias veces
*/


window.addEventListener("DOMContentLoaded",()=>{
    //Asocia el evento click del ratón a la función validar
    document.querySelector("#enviar").addEventListener("click", validar)
})
const validar=(evento)=>{
    const valor=document.querySelector("#valor");
    const mostrar= document.querySelector("#mostrar")
    let expresion; //contendrá la expresión regular
    //1 Ejemplo, debe contener la palabra mesa
    expresion=/mesa/;
    //2 Ejemplo, solo debe contener la palabra mesa, indeferente may o min
    //expresion=/^mesa$/i
    //3 Ejemplo, solo debe contener letras a-z minús y may, ñ, vocales acentuadas y el espacio en blanco
    //expresion=/^[a-zá-úñ\s]*$/i
    //expresion=/^[a-zá-úñ\s]{10,40}$/i //Con una longitud de entre 10 y 40 caracteres



    // 4 Ejemplo, 4 números
    //expresion=/^[0-9]{4}$/  // /^\d{4}$/
    //números pares del 10 al 99
    //expresion=/^[1-9][02468]$/

    //números del 1 al 15
    //expresion=/^([1-9]|0[1-9]|1[0-5])$/

    //horas,minutos y segundos hh:mm:ss
    //expresion=/^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    
    //Para validar la expresión se utiliza el método test al que se le pasa
    //como parámetro la cadena que se quiere analizar.
    
    //Usando notación literal
    /*  if (expresion.test(valor.value)){ //devuelve true, si la cadena coincide con el patrón y false, si no coincide
    mostrar.innerText="Valor correcto";
    }else{
        mostrar.innerText="Valor incorrecto";
} */

    const e=new RegExp(expresion);
    if (e.test(valor.value)){ //devuelve true, si la cadena coincide con el patrón y false, si no coincide
        mostrar.innerText="Valor correcto";
    }else{
        mostrar.innerText="Valor incorrecto";
    }

//USO DE EXPRESIONES REGULARES CON MATCH --> Del objeto String
    let texto = "Mi número es 12345";
    let resultado = texto.match(/\d+/);
//Match devuelve un array con las coincidencias encontradas.
    console.log(resultado);
    
    // → ["12345", index: 13, input: "Mi número es 12345"]

    texto = "Mis números de la suerte son 13, 27 y 666";
    resultado = texto.match(/\d+/g);
//Match devuelve un array con las coincidencias encontradas.
    console.log(`Coincidencias: ${resultado}`);

//USO DE EXPRESIONES REGULARES CON REPLACE
    const nombre = "María* López#123";
    //todo lo que no sean caracteres alfabéticos y el espacio
    //El modificador /i indica que no sea case sensitive
    //El modificador /g hace que encuentre todas las coincidencias no solo la prime.
    const limpio = nombre.replace(/[^a-zá-úñ\s]/gi, "");
    console.log(`Cadena original: ${nombre} ==> Cadena limpia: ${limpio}`);
// → "María López"

    //preventDefault necesario porque el objeto button es de tipo submit.
    evento.preventDefault();
    }