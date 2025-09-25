"use script"
/**
 * @description Realizar un script que permita crear un array de 20
 * números, rango -500 a 1500, que permita simular transacciones de dinero
 * los números negativos son gastos y los positivos ingresos.
 * Las cantidasdes se generan de forma aleatoria.
 * Utiliza el método find para encontrar la primera transacción con un gasto
 * Utiliza el método some para verificar si hay una transacción con un ingreso mayor de 900
 * Utiliza el método reduce para calcular el saldo total
 * Utiliza el método sort para ordenar las transacciones de forma descendente (mayor a menor)
 */

//Se crea el array que va a contener las transacciones
const aNumeros = [];

//Para generar un número aleatoriamente entre dos números se usa la fórmula:
//(Math.random*(hasta-desde))+desde) donde desde es el número más bajo (es decir, el negativo) y el hasta es el número mayor (es decir, el positivo)
//Ejemplo: PAra nuestro caso: (Math.random()*(1500-(-500)))+(-500)
// Número menor que debe generar es cuando se genera un 0: -500
// Número mayor que debe genera es cuando se genera un 1: 1500
//Esta fórmula sale de lo siguiente:
//El rango en el que debe generar el número es de 2000 (Múmero mayor - Número menor --> (1500-(-500)=2000)
//Ahora hay que trasladar ese rango para que en lugar de ir desde 0 a 2000 vaya desde -500 a 1500, es decir, hay que trasladarlo 500
//hacia la izquierda en la recta numérica. Para ello hay que restarle 500.
//Si hubiera que desplazar hacia la derecha habría que sumar.

const rellenarArray = () => { //rellenar el array
  for (let fila = 0; fila < 20; fila++) {
    //Se va rellenando el array por el final con push()
    aNumeros.push(Math.round(Math.random() * (1500 - (-500)) + -500));
  }
};

/**
 * 
 * @description muestra el contenido del array
 */

//Se crea una función flecha para mostrar el array en el document
//La función recibe como parámetro un texto que se muestra como cabecera de las transacciones.
//y muestra el array en el orden en el que está
const mostrarArray = (texto) => {
  document.write(`<br>---${texto}---<br>`);
  //Para escribir el array se utiliza un forEach que recorrerá todo el array escribiendo cada elemento en el document separados por comas.
  aNumeros.forEach((element) => {
    document.write(`${element}, `);
  });
};

/**SE CREA LA FUNCIÓN mostrarDatos cuya función será:
 * - Encontrar la primera transacción con un gasto
 * - Verificar si hay una transacción con un ingreso mayor de 900
 * - Calcular el saldo total
 * */
const mostrarDatos = () => {
  //Utiliza el método find() para encontrar la primera transacción con un gasto
  const gasto = aNumeros.find((gasto) => gasto < 0);
  document.write(`<br>El primer gasto es ${gasto}<br>`);
  //Utiliza el método some() para verificar si hay alguna transacción con un ingreso mayor de 900
  const ingresoNovecientos = aNumeros.some((ingreso) => ingreso > 900);//ingresoNovecientos recibe un valor de TRUE o FALSE
  document.write(`¿Hay ingresos mayores a 900? ${ingresoNovecientos}<br>`);

  //Utiliza el método reduce para calcular el saldo total después de todas las transacciones.
  const saldoTotal = aNumeros.reduce((saldo, operacion) =>saldo+operacion,0);//0 es el valor inicial del acumulador.
  document.write(`Saldo total= ${saldoTotal}<br>`);

  //Utilizamos el método SORT para ordenar el array de forma descendente.
  //PARA COMPRENDERLO, PODEMOS VOLVER AL EJEMPLO DE ARRAYS_method IV
  aNumeros.sort((a,b)=>b-a)
  mostrarArray('Transacciones ordenadas')
};

//script
rellenarArray();//Rellenamos el array
mostrarArray("Transacciones");
mostrarDatos();