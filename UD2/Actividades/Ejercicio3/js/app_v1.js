

let op,base,altura;//hay que definir la variable fue del do para que exista cuando se realiza la comprobación en el while.
 do{
    
    op=parseInt(prompt(" 1.- Área de triángulo\n 2.- Área de rectángulo\n 3.- Media aritmética de dos números\n 4.- Salir"));
    switch(op){
        case 1:
            base=parseFloat(prompt("Introduzca el valor de la base del triángulo:"));
            altura=parseFloat(prompt("Introduzca el valor de la altura del triángulo:"));
            console.log("La superficie del triángulo es "+(base*altura/2));
            break;
        case 2:
            base=parseFloat(prompt("Introduzca el valor de la base del rectángulo:"));
            altura=parseFloat(prompt("Introduzca el valor de la altura del rectángulo:"));
            console.log("La superficie del rectángulo es "+(base*altura));
            break;
        case 3:
            let num1=parseFloat(prompt("Introduzca el primer número:"));
            let num2=parseFloat(prompt("Introduzca el segundo número:"));
            console.log("La media de "+num1+" y "+num2+" es "+(num1+num2)/2);
            break;
        default:
           if (op!=4) alert("Introduzca una opción correcta.");
            break;
    }

 }while(op!=4); 

 