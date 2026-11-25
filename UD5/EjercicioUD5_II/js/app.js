"use strict";

let form,campos,errores,boton;
document.addEventListener("DOMContentLoaded",()=>{
    cargarObjetos();
    setConstraints();

    setEventos();
});

const cargarObjetos=()=>{
    form=document.forms.registro;

    campos={
        nombre:form.elements.nombre,
        email:form.querySelector("#email"),
        edad:document.getElementById("edad"),
        terminos:form.elements.terminos
    };

    errores={
        nombre:form.querySelector("#error-nombre"),
        email:form.querySelector("#error-email"),
        edad:form.querySelector("#error-edad"),
        nivel:form.querySelector("#error-nivel"),
        terminos:form.querySelector("#error-terminos"),
    }

    boton=form.querySelector("button");

    console.log(form);
    console.log(campos);
    console.log(errores);

}

const setConstraints=()=>{
    campos.nombre.setAttribute("pattern","^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{6,15}$");
    campos.nombre.setAttribute("required",true);

    campos.email.setAttribute("required",true);
    campos.email.setAttribute("type","email");
    
    campos.edad.setAttribute("required",true);
    campos.edad.setAttribute("min",18);
    campos.edad.setAttribute("max",95);

    form.elements.nivel[0].setAttribute("required",true);

    campos.terminos.setAttribute("required",true);
}

//nombre:input + blur/focusout
//email: blur/focusout + input
//edad: blur/focusout
//options: change
//check:change
//form:submit

const validarCampo=(campo,error)=>{
    if (campo.checkValidity()){
        error.textContent="";
        updateEnviar();
        return;
    }
    mostrarMensaje(campo,error);
    updateEnviar();
    
    
}

const mostrarMensaje=(campo,error)=>{
    const v=campo.validity;
    let mensaje;

    if (v.valueMissing){
        mensaje="Campo requerido";
    }
    if (v.typeMismatch){
        mensaje="Debe introducir una dirección de e-mail válida";
    }
    if (v.patternMismatch){
        mensaje="El nombre debe contener sólo letras mayúsculas, minúsclas y el espacio en blanco con una longitud de entre 6 y 15 caracteres.";
    }
    if (v.rangeUnderflow){
        mensaje="La edad debe ser superior a 18 años";
    }
    if (v.rangeOverflow){
        mensaje="La edad debe ser inferior a 95 años";
    }
    // if (v.rangeUnderflow || v.rangeOverflow){
    //     mensaje="La edad debe estar comprendida entre los 18 y los 95 años";
    // }
    
    error.textContent=mensaje;
    
    
}


const validarNivel=()=>{
    const seleccion=document.querySelector("input[name=nivel]:checked");

    if (seleccion){
        errores.nivel="";
        updateEnviar();
        return;
    }

    errores.nivel.textContent="Debe seleccionar una opción.";
    updateEnviar();
}

const setEventos=()=>{
    campos.nombre.addEventListener("input",()=>validarCampo(campos.nombre,errores.nombre));
    campos.nombre.addEventListener("blur",()=>validarCampo(campos.nombre,errores.nombre));

    //campos.email.addEventListener("input",()=>validarCampo(campos.email,errores.email));
    campos.email.addEventListener("blur",()=>validarCampo(campos.email,errores.email));
    
    campos.edad.addEventListener("blur",()=>validarCampo(campos.edad,errores.edad));
    campos.edad.addEventListener("blur",edadNivel);
    
    campos.terminos.addEventListener("change",()=>validarCampo(campos.terminos,errores.terminos));
    
     const opciones=document.querySelectorAll("input[name=nivel]");
     opciones.forEach(e=>{
        e.addEventListener("change",validarNivel);
        e.addEventListener("change",edadNivel);
     });
     
     form.addEventListener("submit",(e)=>{
        e.preventDefault();


    // <script>
    //   function onClick(e) {
    //     e.preventDefault();
    //     grecaptcha.ready(function() {
    //       grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
    //           // Add your logic to submit to your backend server here.
    //       });
    //     });
    //   }
    // </script>


        grecaptcha.ready(() => {
            grecaptcha.execute("6LecRTEpAAAAACs2Qcq_YO4YGFixO2zKNxYdyuSt", { action: "registro" })
                .then((token) => {
                    document.querySelector("#recaptcha").value = token; // campo hidden
                    //form.submit(); //y luego enviar el formulario
            });
        });
     })
    
}

const updateEnviar=()=>{
    boton.disabled=!form.checkValidity();
}

const edadNivel=()=>{
    edad=parseInt(campos.edad.value);
    const seleccion=document.querySelector("input[name=nivel]:checked");

    if (seleccion.value=="avanzado" && edad<21){
        campos.edad.setCustomValidity("El nivel avanzado requiere una edad superior a 21 años");
    }
    else{
        campos.edad.setCustomValidity("");
    }

    if (campos.edad.validity.customError){
        errores.edad.textContent=campos.edad.validationMessage;
    }else{
        errores.edad.textContent=campos.edad.validationMessage;
    }
    updateEnviar();
}