"use script"
/**
 * @description Realizar un script que permita crear una array 3*3, rellénala con datos numéricos del 1 al 99,
 *  calcula su traspuesta y muestra el original y su traspuesta
 * (una matriz traspuesta de otra es una que cambia sus filas por las columnas)
 * 
 * Crear una función para rellenar el array
 * Crear una función para crear el array traspuesta
 * Crear una función para mostrar los arrays (original y la traspuesta) (la función tendrá los parámetros del array y un texto)
 */
const aNumeros = [];

/**
 * @description Esta función crea un array bidimensional de 3 filas y 3 columnas y lo rellena con números aleatorios entre 1 y 99
 * 
 */
const rellenarArray = () => {
  //PRIMERO RECORREMOS LAS FILAS
  for (let fila = 0; fila < 3; fila++) {
    aNumeros[fila]=[];//Cada elemento del array en la primera dimensión, se establece como un nuevo array.
    for (let col = 0; col < 3; col++) {//Este contador en realidad no se utiliza para acceder al elemento del array sino para contar el número de elementos que se van a meter en cada fila
      //Se mete al final del array de la fila, hasta 3, lo que crea las columnas.
      aNumeros[fila].push(Math.round(Math.random()*(99-1))+1)
    }
  }
};
/**
 * @description genera el array traspuesta de otro array
 * @returns retorna el array trapuesta
 */
const crearTraspuesta=()=>{
    const aTraspuesta=[[],[],[]];//Se crea un array de array de 3 arrays, es decir, un array bidimensional
    for (let fila = 0; fila < aNumeros.length; fila++) {//length es 3
        for (let col = 0; col < aNumeros[fila].length; col++) {//length también es 3
            aTraspuesta[col][fila]= aNumeros[fila][col];//Se intercambia el elemento 
        }
        
    }
    return aTraspuesta;//Se devuelve la matriz traspuesta
}
/**
 * @description muestra el contenido de un array
 * @param {aNumeros} se le pasa el array a mostrar
 * @param {text} la cabecera a mostrar
 */
const mostrarArray=(aNumeros,texto)=>{
   document.write(`<br>---${texto}---<br>`)
    for (const fila of aNumeros) {
       for (const elemento of fila) {
        document.write(`${elemento} `)
       } 
       document.write(`<br>`)
    }
}

//script 
rellenarArray();
mostrarArray(aNumeros, 'array original');
mostrarArray(crearTraspuesta(), 'array Traspuesta');
