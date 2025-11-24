"use strict";

document.addEventListener("DOMContentLoaded", () => {

    //En primer lugar vamos a localizar todos los objetos del formulario que necesitamos utilizar durante
    //la validación.
    //Localización del formulario
    const formulario = document.querySelector("#formulario");
    
    //localización de los campos
    const campos = {
        nombre: document.querySelector("#nombre"),
        edad: document.querySelector("#edad"),
        pais: document.querySelector("#pais")
    };

    //localización de los span de error
    const spans = {
        nombre: document.querySelector("#err-nombre"),
        edad: document.querySelector("#err-edad"),
        genero: document.querySelector("#err-genero"),
        aficiones: document.querySelector("#err-aficiones"),
        pais: document.querySelector("#err-pais")
    };


   //Asignamos los eventos de validación

//Al campo NOMBRE: validamos tanto en el input como en el blur
    campos.nombre.addEventListener("input", ()=>validarCampo(campos.nombre,spans.nombre));
    campos.nombre.addEventListener("blur", ()=>validarCampo(campos.nombre,spans.nombre));

//Al campo Edad
    campos.edad.addEventListener("blur", ()=>validarCampo(campos.edad,spans.edad));

//Al campo PAÍS
    campos.pais.addEventListener("change", () => validarCampo(campos.pais, spans.pais));

//A los radiobutton de Género
    document.querySelectorAll('input[name="genero"]').forEach(r => {
        r.addEventListener("change", () => validarGrupoRadio("genero", spans.genero));
    });

//A los checkbox de AFICIONES
    document.querySelectorAll('input[name="aficiones"]').forEach(ch => {
        ch.addEventListener("change", () => validarGrupoCheckbox("aficiones", spans.aficiones));
    });

//Al formulario en el evento SUBMIT
    formulario.addEventListener("submit", (e) => {
        let valido = true;

        if (!validarCampo(campos.nombre,spans.nombre)) valido = false;
        if (!validarCampo(campos.edad,spans.edad)) valido = false;

        if (!validarGrupoRadio("genero", spans.genero)) valido = false;
        if (!validarGrupoCheckbox("aficiones", spans.aficiones)) valido = false;

        if (!validarCampo(campos.pais, spans.pais)) valido = false;

        if (!valido){
            e.preventDefault();
               //Se simulará que los datos se están enviando mediante el uso de un timer de 3 segundos.
             //Durante esos 3 segundos se mostrará la animación del spinner y se mostrará el mensaje "envio de datos"
        }else{
             e.preventDefault();

             //llamada grecaptch
            //implementar frecaptcha
            //grecaptcha ejecutado en el navegador recibe la clave de sitio web.
            //action puede contener cualquier cadena descriptiva de la acción que se está verificando con el fin de
            //que las estadísticas de recaptcha puedan monitorizar el uso de la api y las acciones en las que se
            //realiza la verificación más frecuentemente.
            grecaptcha.ready(function() {
                grecaptcha.execute('6LcwqLgqAAAAAMrlM0fXwM8NfkkQXSgSa1ONwR1k', {action: 'submit'}).then(function(token) {
                    // Add your logic to submit to your backend server here.
                    document.querySelector("#recaptcha").value=token;
                });
            });
               //Se simulará que los datos se están enviando mediante el uso de un timer de 3 segundos.
             //Durante esos 3 segundos se mostrará la animación del spinner y se mostrará el mensaje "envio de datos"
 
        //mostrar spinner
            const spinner=document.querySelector("#spinner");
            let exito= document.querySelector("#exito");

        //mostrar
            spinner.style.display="block";
            exito.innerText="Envío de datos";
        //Limpiar el spinner a los 3 segundos
            const reloj=setTimeout(() => {
                spinner.style.display="none"
                exito.innerText=""
            }, 3000);
        }
    });

});


// ------------------------------------------------------
// --- FUNCIONES DE VALIDACIÓN ---------------------------
// ------------------------------------------------------
//La función validarCampo es general y permite validar cualquier campo que le pasemos como primer parámetro
//mostrando la información de error en el elemento que le pasemos como segundo parámetro
function validarCampo(campo, spanError) {
    if (campo.checkValidity()) {
        spanError.textContent = "";
        return true;
    }
    mostrarError(campo, spanError);
    return false;
}


// --- GENERADOR GENERAL DE MENSAJES ---
//Esta función va a generar mensajes adecuados en función a la restricción que no se está cumpliendo
function mostrarError(campo, spanError) {
    const v = campo.validity;

    if (v.valueMissing) {
        spanError.textContent = "Este campo es obligatorio.";
    } else if (v.tooShort) {
        spanError.textContent = `Debe tener al menos ${campo.minLength} caracteres.`;
    } else if (v.typeMismatch) {
        spanError.textContent = "El valor introducido no es válido.";
    } else if (v.patternMismatch) {
        spanError.textContent = "Formato incorrecto.";
    }else if (v.rangeUnderflow){
        spanError.textContent = `Debe tener un valor mínimo de ${campo.min}`;
    } else {
        spanError.textContent = "Valor no válido.";
    }
}


// --- VALIDACIÓN DE CHECKBOXES (grupo) ---
function validarGrupoCheckbox(nombre, spanError) {
    const checkboxes = document.querySelectorAll(`input[name="${nombre}"]`);
    const marcado = [...checkboxes].some(ch => ch.checked);

    spanError.textContent = marcado ? "" : "Debes marcar al menos una opción.";
    return marcado;
}


// --- VALIDACIÓN DE RADIO (grupo) ---
function validarGrupoRadio(nombre, spanError) {
    const seleccionado = document.querySelector(`input[name="${nombre}"]:checked`);

    spanError.textContent = seleccionado ? "" : "Debes seleccionar una opción.";
    return !!seleccionado;
}
