"use strict"

//MANEJO DE EVENTOS EN EL MODELO TRADICIONAL (EN DESUSO)

//Se declaran las funciones que se ejecutarán en respuesta al evento.
//Como función flecha nominal...
// const cargar=()=>{
    //     alert("Página cargada")
    // }
    //...o de forma tradicional
    // function cargar(){//
    //     alert("Página cargada")
    // }

//asociamos esta función al evento load del navegador
// window.onload=cargar; //ya no se utiliza

//MANEJO DE EVENTOS W3C (UTILIZADO EN LA ACTUALIDAD)

//Podemos declarar la función que se ejecutará en respuesta al evento, como en el
//modelo tradicional o bien directamente incluir una función flecha en la declaración
//del listener

// window.addEventListener("load", cargar;
// })

// window.addEventListener("load", ()=>{
//     console.log('load');
// })

//Cuando queremos asociar comportamiento a elementos de la página se crea un listener
//para el evento "DOMContentLoaded" con el fin de asegurarnos de que todos los elementos del DOM 
//están cargados en memoria antes de hacer uso de ellos
//Para que se ejecute el código asociado al DOMContentLoaded no hay que ejecutar nada
//explícitamente porque la propia carga de la página dispara el evento de forma automática.
window.addEventListener("DOMContentLoaded", ()=>{
    //acceso a objetos del DOM
    const boton=document.querySelector(".botons");
    const nombre=document.querySelector("#nombreId");
    const apellidos=document.querySelector("#apellidosId");

//asociar una acción al evento click del botón
    boton.addEventListener("click", mostrarDatos);

//asociar una acción al evento focusin de la caja de texto del nombre
    nombre.addEventListener("focusin", (e)=>{ //recibe el foco. focusin()
        //la función asociada al evento SIEMPRE recibe como parámetro de forma implícita un objeto de tipo
        //EVENT. Si este objeto no se va a utilizar, no es necesario declararlo
        //explícitamente en la definición de la función pero si necesitamos utilizarlo
        //como en este caso, sí es necesario para que dentro de la función se reconozca
        console.log('El nombre ha recibido el foco');
        //la propiedad target del objeto EVENT hace referencia al elemento del DOM al que 
        //se ha asociado el evento.
        e.target.style.backgroundColor= "cyan"; //e.target == nombre
    });

    nombre.addEventListener("focusout",  function(e){ //focusout 
        console.log('El nombre ha perdido el foco');
        this.style.backgroundColor= ""; //e.target == nombre
    })
})

//Los elementos button pueden ser de 3 tipos: button, reset y submit (por defecto).
//Los botones de tipo submit tienen asociado por defecto un evento de tipo submit (envío
//de datos del formulario a un servidor). Como no es el caso, debemos anular esta acción por
//defecto ya que en caso contrario se produciría un error.

//Otra opción es definir el button como tipo button, lo que significa que no tiene asociada
//ninguna acción por defecto.
const mostrarDatos= (e)=>{
    console.log(e);
    
    e.preventDefault(); //anula la acción final
    console.log('ha pulsado el botón');
}

