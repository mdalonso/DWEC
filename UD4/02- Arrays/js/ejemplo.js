"use strict";
//EN ESTE EJEMPLO VAMOS A CREAR UN ARRAY BIDIMENSIONAL CUYO TAMAÑO SE VA A ASIGNAR DINÁMICAMENTE.

//Aunque se defina con const, cada elemento del array sí que se puede reasignar
const numAleatorios = [];//Se define un array unidimensional

//Con el siguiente bucle, se establece dinámicamente que la longitud del array es de 20 mediante la asignación a cada elemento.
for(let i = 0 ; i < 20 ; i++){
    //Con esta sentencia se está estableciendo que cada elemento del array es otro array (sin determinar su tamaño)
    //por lo que estamos convirtiendo NUMALEATORIOS en un array bidimensional.
    numAleatorios[i] = [];
    //Con el siguiente bucle, estamos determinando el tamaño de la segunda dimensión (20 elementos) mediante asignación
    //Hemos convertido el array NUMALEATORIOS en un array bidimensional de 20x20
    for(let o = 0; o < 20; o++ ){
       // let numero = Math.floor(Math.random() * 10);//Cada elemento contendrá un número aleatorio entre 0 y 9(para que quede más bonito)
		let numero = Math.round(Math.random() * 9);
        numAleatorios[i][o] = numero;
    }  
}
console.table(numAleatorios);

//Mostramos el contenido del array en el objeto document recorriéndolo con un forEach.
numAleatorios.forEach(num1=>{
    //document.write(num1);
    let cadena="";//utilizamos esta variable para construir la cadena que queremos mostrar en el document
    num1.forEach(num2=>{
    cadena+=`${num2} `;
    })
    //La cadena va a contener todos los números de cada fila separados por un espacio.
    //Una vez que acabemos de construir la cadena de la fila la imprimimos con un salto de línea para empezar conla siguiente línea.
    document.write(cadena+"<br>");
})





// "use strict";
// //crear un array bidimensional, 20 filas * 20 columnas
// //rellenar con números aleatorios 1-9
// //declaraciones


// const aNumeros = []; //crear array

// const crearArray = () => {
//   for (let fila = 0; fila < 20; fila++) {
//     aNumeros[fila] = []; //establecer un array bidimensional al elemento
//     for (let col = 0; col < 20; col++) {
//       const numero=Math.round(Math.random()*(9-1))+1
//       aNumeros[fila].push(numero);
//       //otra forma de asignar
//       //aNumeros[fila][col]=Math.round(Math.random()*(9-1))+1; 
//     }
//   }
// };
// const mostrarArray = () => {
//   aNumeros.forEach((fila) => {
//     //recorrer las filas
//     fila.forEach((col) => {
//       //recorrer las columnas
//       document.write(`${col} `);
//     });
//     document.write("<br>"); //retorno de línea
//   });
// };
// //cuerpo script
// crearArray();
// mostrarArray();
