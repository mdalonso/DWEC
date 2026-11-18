// ==========================================================
// Validación NATIVA: toda la validación la hacen los atributos
// HTML y el propio navegador. Este script NO usa la
// Constraint Validation API (ni checkValidity, ni
// reportValidity, ni validity, ni setCustomValidity).
//
// Solo sirve para:
//   1. Demostrar que el evento submit únicamente llega cuando
//      el navegador ya ha dado el formulario por válido.
//   2. Comprobar algo que HTML no sabe expresar: que las dos
//      contraseñas coincidan.
// ==========================================================
let form,registro,pass,pass2,errorPass2;
document.addEventListener("DOMContentLoaded",()=>{
    form = document.forms.alta;
    registro = document.getElementById('registro');
    pass = form.elements.password;
    pass2 = form.elements.password2;
    errorPass2 = document.getElementById('password2-error');

    // El evento submit SOLO se lanza si el navegador ha validado todo con éxito.
    // Si falta un campo obligatorio o un formato es incorrecto, el navegador
    // muestra su burbuja de error y este código ni siquiera se ejecuta.        
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // en el ejemplo no hay servidor: evitamos recargar la página

        // e.submitter es el botón que ha enviado el formulario.
        // "Guardar borrador" tiene formnovalidate: el navegador no valida nada.
        if (e.submitter && e.submitter.hasAttribute('formnovalidate')) {
            anotar('submit con "Guardar borrador": se envía SIN validar.', 'bueno');
            return;
        }

        anotar('submit: el navegador ha validado todos los atributos HTML.', 'bueno');

    // Comprobación que HTML no puede hacer: comparar dos campos.
    // La hacemos con JavaScript "a mano", comparando valores.
        if (pass.value !== pass2.value) {
            errorPass2.textContent = 'Las contraseñas no coinciden.';
            pass2.setAttribute('aria-invalid', 'true');
            pass2.focus();
            anotar('Pero las contraseñas no coinciden: no se envía.', 'malo');
            return;
        }

        errorPass2.textContent = '';
        pass2.removeAttribute('aria-invalid');

    // // Todo correcto: mostramos los datos (sin las contraseñas)
    //     const datos = Object.fromEntries(new FormData(form));
    //         delete datos.password;
    //         delete datos.password2;
    //         anotar(`Formulario enviado. Datos: ${JSON.stringify(datos)}`, 'bueno');
    //     });

    });

    // Al corregir la confirmación, quitamos el mensaje de error
        pass2.addEventListener('input', () => {
        if (pass2.value === pass.value) {
            errorPass2.textContent = '';
            pass2.removeAttribute('aria-invalid');
        }
        else
        {
            errorPass2.textContent = 'Las contraseñas no coinciden';
            pass2.setAttribute('aria-invalid');
        }
        });

    // Al borrar el formulario, limpiamos también el registro y el mensaje
        form.addEventListener('reset', () => {
            registro.replaceChildren();
            errorPass2.textContent = '';
            pass2.removeAttribute('aria-invalid');
        });

    
});

// Escribe una línea en el panel "Qué está pasando"
function anotar(texto, clase = '') {
  const li = document.createElement('li');
  li.textContent = texto;
  li.className = clase;
  registro.append(li);
}



