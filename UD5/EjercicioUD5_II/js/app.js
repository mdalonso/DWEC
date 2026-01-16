"use strict";

let nombre,email,edad,rbnivel;

document.addEventListener("DOMContentLoaded",()=>{
    cargarObjetos();
    setConstraints();
    setEvents();
    
});

const cargarObjetos=()=>{
    nombre=document.querySelector("#nombre");
    email=document.querySelector("#email");
    edad=document.querySelector("#edad");

    rbnivel=document.querySelectorAll("[name='nivel'");
}

const setEvents=()=>{
    nombre.addEventListener("input",comprobarNombre);
    nombre.addEventListener("focusout",darFormatoNombre);

    email.addEventListener("input",comprobarEmail);

    edad.addEventListener("input",comprobarEdad);
}

const setConstraints=()=>{
    //Constraints de nombre
    nombre.setAttribute("required","true")
    nombre.setAttribute("pattern","^[a-zA-ZñÑ\\s]{6,15}$");

    email.setAttribute("required","true");
    email.setAttribute("type","email");

    edad.setAttribute("required","true");
    edad.setAttribute("min","18");
    edad.setAttribute("max","95");


}
const comprobarNombre=()=>{
    const err=document.querySelector("#error-nombre");

    // if (!nombre.checkValidity()){
    //     err.textContent="Campo erroneo";
    // }else{
    //     err.textContent="";
    // }
    if (nombre.validity.valueMissing){
        err.textContent="Campo requerido";
    }else if (nombre.validity.patternMismatch){
        err.textContent="El campo debe contener caracteres en mayúscula o minúscula y el espacio en blanco con una longitud de entre 6 y 15 caracteres";
    }else{
        err.textContent="";
    }
}

const darFormatoNombre=()=>{
    let palabras;
    if (nombre.value!="") {
        let cadena="";
        palabras=nombre.value.split(" ");
        palabras.forEach(e => {
            cadena+=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()+" ";
        });
        nombre.value=cadena.trim();
    }
}

const comprobarEmail=()=>{
     const err=document.querySelector("#error-email");

    if (email.validity.valueMissing){
        err.textContent="Campo requerido";
    }else if (email.validity.typeMismatch){
        err.textContent="El campo debe contener un email válido";
    }else{
        err.textContent="";
    }
}
const comprobarEdad=()=>{
     const err=document.querySelector("#error-edad");

    if (edad.validity.valueMissing){
        err.textContent="Campo requerido";
    }else if (edad.validity.rangeOverflow || edad.validity.rangeUnderflow){
        err.textContent=`La edad debe estar comprendida entre los 18 y los 95 años`;
    }else{
        err.textContent="";
    }
}

const comprobarNivel=()=>{
    const err=document.querySelector("#error-nivel");

    let rbnivel=document.querySelectorAll("[name='nivel']:checked");
    if (rbnivel.length==0)
        err.textContent="Debe seleccionar una opción";
   
}