"use strict"; 
//declaraciones
//TRABAJAR CON EL ORDEN DE LOS ELEMENTOS DE UN ARRAY
const numeros=[20,3, 5, 7, 8, 100, 35, 8];
const apellidos=['Torralbo','Ansio', 'Zurita', "Cano", "Riquelme"];
const alumnos=[['Pedro', 23], ['Ana', 45], ["Cándido", 19]];


//1- Método TOSORTED: Igual que SORT pero sin modificar el array original
const apellidosSort=apellidos.toSorted(); //
console.log(apellidos);
console.log(apellidosSort);
//ordenar; sort
//2- Método SORT: ORDENA LOS ELEMENTOS DEL ARRAY DE FORMA ASCENDENTE ALFABÉTICAMENTE
//  Aunque el array contenga números, los ordenará alfabéticamente.
//  Modifica el array original.
apellidos.sort(); //ordena alf. de forma ascendente 
console.log(apellidos);

numeros.sort();
console.log(numeros);

//reverse, 
//3- Método REVERSE: Da la vuelta al array original (sin ordenar)
//  Por ello, para ordenar en orden inverso, se puede utilizar en combinación con sort.
//Primero ordenamos y luego le damos la vuelta.
apellidos.sort().reverse(); //ordena ascendente y da la vuelta al array
console.log(apellidos);

//ORDENACIÓN CON VALORES NUMÉRICOS
//El método SORT puede recibir una función que define el orden del array. Esta función debe  devolver un número
//que determine el orden relativo de los elementos que está inspeccionando.
//La función recibe dos parámetros que son los elementos que se van a comparar (Va tomando automáticamente los elementos del array de dos en dos)
//Valores que debe devolver la función
// Si el resultado es >0, el orden tiene que ser b,a
// Si el resultado es <0, el orden es a,b
//El valor devuelto no tiene que ver directamente con si hay que cambiar los elementos de posición o no sino con el orden relativo.
//Con otras palabras, tenemos que diseñar la función de comparación teniendo en cuenta que...
// Si a debe ir después de b según el criterio de ordenación debe devolver un valor positivo.
// Si a debe ir antes de b según el criterio de ordenación debe devolver un valor negativo.
// Si no hay que alterar el orden debe devolver 0

 numeros.sort(function(a,b){ //ordenación ascendente
     if (a>b){//Si a>b, a debe colocarse detrás y por tanto debe devolver un número positivo.
         return 1; 
     }else if(a<b){
         return -1; 
     }else{
         return 0; // no hay cambio
     }
    
 });
 console.log(numeros);

 //OTRA FORMA DE APLICAR UNA FUNCIÓN A SORT

 //PARA ORDEN ASCENDENTE
 // si a-b es un número positivo quiere decir que A debe estar detrás de B
 //Para que eso ocurra, A tiene que ser mayor que B y por tanto estamos aplicando un orden ASCENDENTE.
 //EJEMPLO: oRDENACIÓN DE LOS VALORES (8,5)
 //a=8 y b=5
 //a-b-->8-5=3 (ES UN VALOR POSITIVO Y POR TANTO A DEBE IR DETRÁS DE B POR LO QUE EL RESUTADO SERÍA (5,8))
 numeros.sort((a,b)=>a-b); //ascendente
 console.log(numeros);
 //PARA ORDEN DESCENDENTE
 // Si b-a es mayor que 0 eso quiere decir que B debe estar antes de A.
 //Como para que esto ocurra (b-a>0) B tiene que ser mayor que A, estamos aplicando un orden DESCENDENTE. 
 //EJEMPLO: ORDENACIÓN DE LOS VALORES (6,15)
 //a=6 y b=15
 //b-a-->15-6=9 (ES UN VALOR POSITIVO Y POR TANTO EL ORDEN SERÁ B,A, ES DECIR, 15,6)
 //SI ESTUVIERAN AL CONTARIO, CON LOS VALORES (15,6)
 //a=15 y b=6
 //b-a-->6-15=-9 (ES UN VALOR NEGATIVO Y POR TANTO EL ORDEN SERÁ A,B, es decir, 15,16)
 numeros.sort((a,b)=>b-a); //descendente
 console.log(numeros);
 

 //ORDENAR DE FORMA DESCENDENTE UN ARRAY ALFABÉTICO siguiendo la lógica anterior
 //Para probar esto primero hay+ que comentar las líneas 17 y 27
 console.log(apellidos);

 //Se puede utilizar LOCALECOMPARE que es un método del objeto String.
 // devuelve un valor + si la cadena que se pasa como parámetro debe ir antes de la cadena que lo invoca
 //EJEMPLO: cadena1.localeCompare(cadena2);
 //DEvuelve un valor positivo si el orden es cadena1 cadena2
 //Devuelve un valor negativo si el orden es cadena2 cadena1
 
 apellidos.sort((a,b)=>b.localeCompare(a));
 console.log(apellidos);

 //ORDENAR ARRAYS BIDIMENSIONALES
 console.table(alumnos);

// //ordenar alumnos de forma descendente por edad
//a y b son los elementos del array bidimensional que son, en realidad arrays unidimensionales.
//PAra comparar por un valor de uno de los elementos de cada array unidimensional, hay que acceder a él a través de su índice.
 alumnos.sort((a,b)=>b[1]-a[1]);
 console.table(alumnos);
 // //ordenar alumnos de forma ascendente por edad
 alumnos.sort((a,b)=>a[1]-b[1]);
console.table(alumnos);

// //ordenar alumnos de forma ascendente por nombre
alumnos.sort((a,b)=>a[0].localeCompare(b[0]));
 console.table(alumnos);
// //ordenar alumnos de forma descendente por nombre
 alumnos.sort((a,b)=>b[0].localeCompare(a[0]));
 console.table(alumnos);