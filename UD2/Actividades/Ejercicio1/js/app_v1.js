/* Crea un script que muestre los números impares que no sean múltiplo de 3 ni de 7 que se encuentren entre el 100 y el 1.
 Realizar versiones del programa usando bucles while, do shile y for*/

 //con for
 console.log("Con FOR");
for (let num=100;num<=1;num++)
{
    if (num%2!=0 && num%3!=0 && num%7!=0) //es impar, no es divisible entre 3 y no es divisible entre 7
    {
        console.log(`El número ${num} no es múltiplo de 3 ni de 7`);
    }
}

//con while
console.log("Con WHILE");
let num=100;
while(num>=1)
{
    if (num%2!=0 && num%3!=0 && num%7!=0) //es impar, no es divisible entre 3 y no es divisible entre 7
        console.log(`El número ${num} no es múltiplo de 3 ni de 7`);
    num--;
}

//con do-while
console.log("Con DO-WHILE");
num=100;
do{
    if (num%2!=0 && num%3!=0 && num%7!=0) //es impar, no es divisible entre 3 y no es divisible entre 7
        console.log(`El número ${num} no es múltiplo de 3 ni de 7`);
    num--;
}while(num>=1);