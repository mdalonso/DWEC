"use strict";

let f;
let salida;
document.addEventListener("DOMContentLoaded",()=>{
    f = document.forms.inscripcion;
    salida = document.getElementById('salida');

    // ---------- LEER ----------
    document.getElementById('leer').addEventListener('click', leerValores);

    // ---------- ESCRIBIR ----------
    document.getElementById('escribir').addEventListener('click', escribirValores);
})

const leerValores=()=>{
  //INPUT DE TIPO TEXTO: Se accede al contenido a través de su propiedad value, la cual contiene un string.
  const nombre = f.elements.nombre.value.trim();   // trim() quita espacios sobrantes

  //INPUT DE TIPO NUMBER:
  //Podemos acceder con su propiedad value, obteniendo un string.
  const edadTexto = f.elements.edad.value;          // "17"
  //o podemos acceder con su propiedad valueAsNumber, obteniendo directamente un número
  const edad = f.elements.edad.valueAsNumber;       // 17 (o NaN si está vacío)

  //INPUT DE TIPO RADIO: Siempre van en grupo de manera que sólo uno de ellos puede ser marcado.
  //Para crear un grupo hay que darle a todos el mismo valor para el atributo name.
  //Cada uno de los radiobutton tendrá un valor para su atributo VALUE que nos va a permitir
  //identificar cuál de ellos está marcado.
  //Accedemos al grupo a través de la colección elementos mediante su atributo NAME
  //el VALUE del grupo es el value del elemento seleccionado o "" si no se ha marcado ninguno
  const turno = f.elements.turno.value;             // "tarde", "mañana" o "" si no hay ninguno

  //INPUT DE TIPO CHECKBOX EN GRUPO.
  //Para crear un grupo de checkbox hay que darle a todos el mismo valor para el atributo NAME.
  //A cada uno de los checkbox le damos un valor distinto a su atributo VALUE que nos permite identificar
  //cuáles están seleccionados dentro del grupo.
  //A diferencia de los radiobutton, hay que localizarlos de forma manual mediante un selector ya que la colección elements
  //no los reconoce como grupo aunque tengan el mismo NAME.
  //(El método de arrays map devuelve un nuevo array aplicando una función a cada elemento del array. En nuestro
  //caso esa función es devolver su VALUE)
  const lenguajes = [...f.querySelectorAll('input[name="lenguajes"]:checked')]
           .map(c => c.value);                             // ["js", "php"]
  
  // SELECT DESPLEGABLE: Un Select es padre de varios OPTIONS.
  //Cada option tiene asignado un valor a su atributo VALUE que permite identificar cuál de ellos se ha seleccionado
  //El acceso al SELECT a través de la colección ELEMENTS devuelve el OPTION seleccionado.
  const sel = f.elements.ciclo;//Devuelve el elemento seleccionado
  //También podemos acceder a los OPTION por su índice dentro del SELECT
  //La propiedad selectedIndex nos devuelve el índice del OPTION seleccionado
  //Lo habitual es organizar el SELECT de manera que su primer OPTION (el que tiene índice 0) tiene un VALUE = ""
  const textoCiclo = sel.selectedIndex > 0
      ? sel.options[sel.selectedIndex].text           // texto visible de la opción. 
      : '(ninguno)';

  // SELECT DE OPCIÓN MÚLTIPLE
  //La propiedad selectedOptions devuelve una colección con todos los OPTIONS seleccionados.
  const modulos = [...f.elements.modulos.selectedOptions].map(o => o.value);

  //INPUT DE TIPO FILE: Selección de fichero.
  //Tiene una colección FILES que contiene todos los ficheros seleccionados (1 como mínimo en su índicde 0)
  const foto = f.elements.foto.files[0];            // undefined si no se ha elegido

  //INPUT DE TIPO CHECKBOX INDEPEDIENTES: Podemos saber si estás marcado o no a través de su propiedad
  //checked que devuelve true o false.
  const acepta = f.elements.acepto.checked;         // true / false

  //CONSTRUIMOS LA CADENA DE SALIDA
  const lineas = [
          `nombre.value            → "${nombre}"`,
          `edad.value              → "${edadTexto}"  (${typeof edadTexto})`,
          `edad.valueAsNumber      → ${edad}  (${typeof edad})`,
          `edad.value + 1          → "${edadTexto + 1}"   ← ¡concatena!`,
          `edad.valueAsNumber + 1  → ${edad + 1}`,
          `acepto.checked          → ${acepta}`,
          `acepto.value            → "${f.elements.acepto.value}"   ← no sirve para saber si está marcado`,
          `turno.value             → "${turno}"`,
          //JOIN crea una cadena con todos los componentes de un array separándolos por el separador especificado
          `lenguajes marcados      → [${lenguajes.join(', ')}]`,
          `ciclo.value             → "${sel.value}"`,
          `ciclo.selectedIndex     → ${sel.selectedIndex}`,
          `texto de la opción      → ${textoCiclo}`,
          `modulos.selectedOptions → [${modulos.join(', ')}]`,
          `foto.files[0]           → ${foto ? `${foto.name} (${foto.size} bytes, ${foto.type})` : 'ninguno'}`
        ];

      // textContent: los datos se muestran como texto, nunca como HTML
        salida.textContent = lineas.join('\n');
        console.log(lineas.join('\n'));
}

const escribirValores=()=>{
  f.elements.nombre.value = 'Lucía';
  f.elements.edad.value = 19;
  f.elements.acepto.checked = true;
  f.elements.turno.value = 'mañana';             // marca el radio con ese value
  f.elements.ciclo.value = 'DAM';                // selecciona la opción con ese value
  f.querySelector('input[name="lenguajes"][value="js"]').checked = true;
  [...f.elements.modulos.options].forEach(o => {
        o.selected = o.value === 'DWEC' || o.value === 'DIW';
      });
  // Por seguridad, files NO se puede escribir desde JavaScript
  salida.textContent = 'Valores escritos por código. Pulsa «Leer valores» para comprobarlos.';
}

