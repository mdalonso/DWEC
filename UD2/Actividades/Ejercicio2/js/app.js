
 //con IF
 console.log ("CON IF");
 let edad=parseInt(prompt("Introduce tu edad: "));
 //CON ELSEIF ES MÁS EFICIENTE YA QUE NO TIENE QUE HACER TANTAS COMPARACIONES
 if (edad<18) 
    console.log("Eres menor de edad.");

 if (edad>=18 && edad<=30) 
    console.log("Eres muy joven.");

 if (edad>30 && edad<=60) 
    console.log("Eres una persona adulta.");
 
 if (edad>60)
    console.log("Eres una persona adulta mayor.");
 
 if (Number.isNaN(edad))
    console.log("Debe introducir un valor numérico")

//con SWITCH
console.log ("CON SWITCH");
switch(true){
    case edad<18:
        console.log("Eres menor de edad.");
        break;
    case edad>=18 && edad<=30:
        console.log("Eres muy joven.");
        break;
    case edad>30 && edad<=60:
        console.log("Eres una persona adulta.");
        break;
    case edad>60:
        console.log("Eres una persona adulta mayor.");
        break;
    case Number.isNaN(edad):
        console.log("Debe introducir un valor numérico")
        break;
}