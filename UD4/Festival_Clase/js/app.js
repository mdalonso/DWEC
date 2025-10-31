"use strict";

import Participante from "./participante.js";
import Jurado from "./jurado.js";
import Produccion from "./produccion.js";
import Festival from "./festival.js";


let festival;

    const introducirParticipantes=function(){
        let participante1=new Participante("Javier Bardem",54);
        let participante2=new Participante("Penélope Cruz",52);
        let participante3=new Participante("Brad Pitt",61);
        console.log(participante1);
        console.log(participante2);
        console.log(participante3);
        festival.anadirParticipante(participante1);
        festival.anadirParticipante(participante2);
        festival.anadirParticipante(participante3);
    }

    const introducirJurado=function(){
        let jurado1=new Jurado("Pedro Almodóvar",70,"Director",'g');
        let jurado2=new Jurado("Alejandro Amenabar",45,"Director",'g');
        let jurado3=new Jurado("Quentin Tarantino",60,"Director",'m');
        console.log(jurado1);
        console.log(jurado2);
        console.log(jurado3);
        festival.anadirParticipante(jurado1);
        festival.anadirParticipante(jurado2);
        festival.anadirParticipante(jurado3);
    }

    const introducirProducciones=function(){
        let produccion1=new Produccion("Vicky","EEUU","Drama",2000);
        let produccion2=new Produccion("El Señor de los Anillos","EEUU","Aventura",2005);
    //let produccion3=new Produccion("Vicky, Cristina, Barcelona","EEUU","Drama",2000);
        console.log(produccion1);
        console.log(produccion2);

        if (festival.introducirProduccion(produccion1))
            console.log(`produccion introducida con éxito`);
        else
            console.log(`No se ha podido insertar la producción`);
        if (festival.introducirProduccion(produccion2))
            console.log(`produccion introducida con éxito`);
        else
            console.log(`No se ha podido insertar la producción`);

    }

    const mostrarFestival=function(){
        let mostrar=`<table border=1><tbody>`;
        mostrar+=festival.toString();
        mostrar+=`<tr><td colspan=4 align='center'><h2>PRODUCCIONES</h2></td></tr>`
    
        festival.aProducciones.forEach(element => {
            mostrar+=element.toString();
        });
    
        mostrar+=`<tr><td colspan=4 align='center'><h2>PARTICIPANTES</h2></td></tr>`
        festival.aParticipantes[0].forEach(element => {
            mostrar+=`<tr>${element.toString()}</tr>`;
        });
        mostrar+=`<tr><td colspan=4 align='center'><h2>JURADO</h2></td></tr>`
        festival.aParticipantes[1].forEach(element => {
            mostrar+=`<tr>${element.toString()}</tr>`;
        });
        
        mostrar+="</tbody></table>";
        document.getElementById("mostrar").innerHTML=mostrar;
        console.log(mostrar);
    }

try {
    festival=new Festival("Festival de Venecia","Venecia",1,"Festival de cine de Venecia");
    console.log(festival);

    introducirParticipantes();
    introducirJurado();
    introducirProducciones();
    mostrarFestival()

    console.log(festival);
    
    if (festival.eliminarProduccion("Vicky2")){

        console.log(`produccion eliminada con éxito`);
        console.log(festival);
    }
    else{
        console.log(`No se ha podido eliminar la producción`);
        console.log(festival);

    }

    console.log(festival);
    
} catch (error) {
    console.log(error);
}