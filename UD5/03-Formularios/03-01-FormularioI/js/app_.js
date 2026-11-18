"use strict";
// ---- 1. Cuatro formas de obtener el formulario ----
    const f1 = document.forms.registro;            // colección document.forms, por Id del formulario
    const f2 = document.forms.registroName;            // colección document.forms, por name del formulario
    const f3 = document.forms[0];                  // por posición (frágil si cambia el HTML)
    const f4 = document.getElementById('registro');
    const f5 = document.querySelector('#registro');

    // Las cuatro apuntan al MISMO objeto
    console.log('¿Es el mismo formulario?', f1 === f2 && f2 === f3 && f3 === f4);

    const form = document.forms.registro;
    console.log(form);
    const salida = document.getElementById('salida');

    form.addEventListener('submit', (e) => {
      e.preventDefault();   // evitamos que la página se recargue

      // ---- 2. Acceso a los controles con form.elements ----
      const nombre = form.elements.nombre;           // por id
      const nombreN = form.elements.nombreName;           // por name
      const email = form.elements['email'];          // por name con corchetes
      const primero = form.elements[0];              // por posición
      const turnos = form.elements.turno;            // RadioNodeList (varios radios con el mismo name)

      const lineas = [
        `form.elements.length       → ${form.elements.length} controles (el botón también cuenta)`,
        `form.elements.nombre.value → "${nombre.value}"`,
        `form.elements['email'].value → "${email.value}"`,
        `form.elements[0].id        → "${primero.id}"`,
        `form.elements.turno        → ${turnos.constructor.name} con ${turnos.length} radios`,
        `form.elements.turno.value  → "${turnos.value}" ${turnos.value === '' ? '(ningún radio marcado)' : ''}`,
        `nombre.form === form       → ${nombre.form === form}`
      ];

      // textContent: mostramos los datos como texto, nunca como HTML
      salida.textContent = lineas.join('\n');
      console.log(lineas.join('\n'));
    });