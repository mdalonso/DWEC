
 //con IF
 console.log ("CON IF");
 let precio=parseInt(prompt("Introduce el precio del producto: "));
 //CON ELSEIF ES MÁS EFICIENTE YA QUE NO TIENE QUE HACER TANTAS COMPARACIONES
 if (precio<10) 
    console.log("Producto muy barato");

 if (precio>=10 && precio<30) 
    console.log("Producto económico.");

 if (precio>=30 && precio<60) 
    console.log("Producto de gama media.");
 if (precio>=60 && precio<100) 
    console.log("Producto costoso.");
 if (precio>=100) 
    console.log("Producto de lujo");
 
 if (Number.isNaN(precio))
    console.log("Debe introducir un valor numérico")

//con SWITCH
console.log ("CON SWITCH");
switch(true){
    case precio<10:
        console.log("Eres menor de edad.");
        break;
    case precio>=10 && precio<30:
        console.log("Eres muy joven.");
        break;
    case precio>=30 && precio<60:
        console.log("Eres una persona adulta.");
        break;
    case precio>=60 && precio<100:
        console.log("Eres una persona adulta.");
        break;
    case precio>=100:
        console.log("Eres una persona adulta mayor.");
        break;
    case Number.isNaN(precio):
        console.log("Debe introducir un valor numérico")
        break;
}