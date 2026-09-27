"use string";//fromCharCode()
let cadena="Mi nombre es Alberto";
let arrayCad;
//65(A)-90(Z) 209(Ñ)

// for(let i=65;i<=90;i++){
//     console.log(String.fromCharCode(i));
//     if (i==78) console.log(String.fromCharCode(209));
// }

// for(let i=0;i<=20;i++){
//     const codigo=Math.floor(Math.random()*(90-65+1))+65;
//     if (codigo==78 ) 
//         console.log(String.fromCharCode(207));
//     else
//         console.log(String.fromCharCode(codigo));
// }

console.log(cadena.length);

for(let i=0;i<cadena.length;i++){
    if (cadena.charAt(i)!=" ") console.log(cadena.charAt(i));
}

arrayCad=cadena.split(" ");
console.log(arrayCad);

