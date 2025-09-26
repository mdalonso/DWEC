/* Crea un script que muestre los números impares que no sean múltiplo de 3 ni de 7 que se encuentren entre el 100 y el 1.
 Realizar versiones del programa usando bucles while, do shile y for*/

 //con for
 console.log("Script con FOR");
 console.log("==========================");
for (let num=1;num<=50;num++)
{
    cadena=`${num} al cuadrado es ${Math.pow(num,2)}`
    
    if (num%5==0) //es impar, no es divisible entre 3 y no es divisible entre 7
    {
        cadena+=" y es múltiplo de 5";
    }
    console.log(cadena);
}

//con while
console.log("Con WHILE");
let num=1;
while(num<=100)
{
    if (num%2!=0 && num%3!=0 && num%7!=0) //es impar, no es divisible entre 3 y no es divisible entre 7
        console.log(num);
    num++;
}

//con do-while
console.log("Con DO-WHILE");
num=1;
do{
    if (num%2!=0 && num%3!=0 && num%7!=0) //es impar, no es divisible entre 3 y no es divisible entre 7
        console.log(num);
    num++;
}while(num<=100);