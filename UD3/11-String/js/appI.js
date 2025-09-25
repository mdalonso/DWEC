"use strict"
//generar el abecedario
for (let index = 65; index <=90; index++) {
    //convertir el código ascii a carácter
    document.body.innerHTML+=(`${String.fromCharCode(index)} `);
    //mostrar Ñ
    if (index==78){
        document.body.innerHTML+=(`${String.fromCharCode(209)} `);
    }
}

document.body.innerHTML+=(`<br>---Abecedario aleatorio---<br>`);
//mostrar 20 letras del abecedario de forma aleatoria
for (let index = 1; index <=20; index++) {
    //convertir el código ascii a carácter
    const codigo=Math.round(Math.random()*(90-65))+65
    document.body.innerHTML+=(`${String.fromCharCode(codigo)} `);
   
}