

let op,nLados,medida,apotema,altura;//hay que definir la variable fue del do para que exista cuando se realiza la comprobación en el while.
 do{
    
    op=parseInt(prompt(" 1.- Número aleatorio entre 1 y 100\n 2.- Área de un polígono de n lados\n 3.- Comparación de dos números indicando cuál es el mayor\n 4.- Salir"));
    switch(op){
        case 1:
           
            console.log("Número generado es "+Math.floor((Math.random()*100)+1));
            break;
        case 2:
            nLados=parseFloat(prompt("Introduzca el número de lados del polígono:"));
            medida=parseFloat(prompt("Introduzca la medida del lado del polígono:"));
            apotema=parseFloat(prompt("Introduzca la apotema:"));
            console.log("La superficie del polígono es "+(nLados*medida*apotema)/2);
            break;
        case 3:
            let num1=parseFloat(prompt("Introduzca el primer número:"));
            let num2=parseFloat(prompt("Introduzca el segundo número:"));
            if (num1==num2){
                console.log("Los números son iguales");
            }
            else{
                console.log(num1>num2?`${num1} es mayor que ${num2}`:`${num2} es mayor que ${num1}`)
            }

            break;
        default:
           if (op!=4) alert("Introduzca una opción correcta.");
            break;
    }

 }while(op!=4); 