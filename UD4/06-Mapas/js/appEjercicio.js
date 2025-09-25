"use strict"
/**
 * @description Crear un script que utilice la estructura de map para
 * realizar el seguimiento de las puntuaciones de los jugadores. 
 * Se pedirá mediante prompt el nombre y la puntuación.
 * El nombre no podrá ser vacío y al pulsar el botón Cancelar,
 * finalizará la entrada de datos (función, devuelven el dato)
 * Las puntuaciones, se controlarán que sean numéricas y no se permitirán
 * datos nulos (función, devuelven el dato)
 * A continuación, se ordenará por puntuación ascendente y se mostrará
 * el mapa ordenado.
 * Utilizar funciones para la entrada de datos, otra para la ordenación
 * y otra para mostrar el mapa ordenado.
 */


//declaraciones
//Se crea una variable de tipo MAP inicialmente vacío
const calificacion=new Map();

//funciones
/**
 * @description isNumero permite controlar que el argumento introducido como puntuación sea un número
 * @param {string} texto - cadena que se mostrará en el prompt
 * @returns {integer} - Devuelve un valor entero generado mediante parseo de la cadena introducida a través del prompt
 */
//Se crea una función (función flecha) que comprueba que lo que se introduce por teclado es un número
const isNumero=(texto)=>{
    let puntuacion=prompt(texto); 
    //Mientras no se introduzca un valor válido se seguirá pidiendo al usuario que introduzca un valor
    while(puntuacion=="" || puntuacion==null || isNaN(puntuacion) ){
        puntuacion=prompt(`Error, debe ser un número\n${texto}`);
    }
    return parseInt(puntuacion);
}

/**
 * @description isCorrectNom permite controlar que la cadena que introduce el usuario como nombre del jugador no esté vacía
 * @param {string} texto  cadena que se mostrará en el prompt
 * @returns {cadena} devuelve el nombre
 */
const isCorrectNom=(texto)=>{
    let nombre=prompt(texto);
    //Si la cadena no es nula pero sí está vacía o son sólo espacios en blanco
    //El método trim() elimina los espacios en blanco al principio y al final de la cadena. Si una vez quitándole los espacios en blanco
    //es la cadena vacía, no es correcto.
    while(nombre!==null && nombre.trim()===""){
        nombre=prompt(`Error, no debe ser una cadena vacía\n${texto}`);
    }
    return nombre;
}
/**
 * @description Crea el mapa con el nombre y la puntuación, hasta que se pulse cancelar en el nombre
 * El par clave-valor corresponde al nombre_del_jugador-puntuación.
 */
const crearMapa = () => {
  let nomJugador = isCorrectNom("Introduzca nombre del jugador, [Cancelar->Fin]");
  while (nomJugador != null ) {//Si se ha metido un nombre, tiene que pedir la puntuación. nomJugador será null cuando se pulse Cancelar
    let puntuacion = isNumero(`Introduzca la puntuación del jugador ${nomJugador}`);
    //añadir los valores introducidos al mapa. 
    calificacion.set(nomJugador, puntuacion)
    nomJugador = isCorrectNom("Introduzca nombre del jugador");//Y vuelve a pedir el nombre del jugador
  }
};

/**
 * @description ordena el mapa a través de un array y lo vuelve a pasar al mapa
 */
//La forma más rápida de ordenar un mapa es crear un array y utilizar el método sort
const ordenarMapa=()=>{
    const aJugadores=[...calificacion]; //crear un array con los datos del mapa utilizando el operador Spread
    aJugadores.sort((a,b)=>a[1]-(b[1])); //ordenar de menor a mayor por puntuación (la segunda columna del array bidimensional)
    //borrar el mapa para volver a construirlo de nuevo
    calificacion.clear(); //limpia el mapa
    //Una vez limpio el mapa, se vuelve a construir metiendo en orden los componentes desde el array.
    aJugadores.forEach(elemento=>{ //carga del array al mapa
        calificacion.set(elemento[0], elemento[1])
    })
}
/**
 * @description Muestra el contenido del mapa por consola
 */
const mostrarMapa=()=>{
    //recorrer el mapa y mostrar elcontenido
    //Asigna valores a las variables nombre y puntuación por DESTRUCTURING
    for (const [nombre,puntuacion] of calificacion) {
        console.log(`El jugador ${nombre} y la puntuación es ${puntuacion}`);
    }
}

//script

crearMapa();
ordenarMapa()
mostrarMapa();
