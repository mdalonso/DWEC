"use strict"

document.addEventListener("DOMContentLoaded", () =>{
    const btnAdd = document.getElementById('addBtn');
    const input = document.getElementById('taskInput');

    btnAdd.addEventListener('click', () =>{
        if(input.value !== ""){
            crearTarea(input.value);
        }
    })

    input.addEventListener('keydown',(e) =>{
        if(e.key === 'Enter'){
            crearTarea(input.value);
        }
    })

    configurarColumnas();

})

const configurarColumnas=()=>{
    const columns = document.querySelectorAll('.column');

    columns.forEach(column => {
        column.addEventListener('dragenter',(e) =>{
            e.dataTransfer.dropEffect = 'move';
            column.classList.add('hovered');
        })

        column.addEventListener('dragover', (e) =>{
            e.preventDefault();
        })

        column.addEventListener('drop' , (e) =>{
            e.preventDefault();
            const idTarea = e.dataTransfer.getData('text/plain');

            const tarea = document.querySelector(`#${idTarea}`)

            if(tarea){
                column.append(tarea);
            }
            column.classList.remove('hovered');
        })


        column.addEventListener('dragleave', () =>{
            column.classList.remove('hovered');
        })
    })
}

const crearTarea=(texto)=>{
    const tarea = document.createElement('div');
    const todo = document.querySelector('#todo');
    tarea.innerText = texto;
    tarea.classList.add('task');

    const tareasExistentes = document.querySelectorAll('.task');
    const siguienteNumero = tareasExistentes.length + 1;
    tarea.id = `task-${siguienteNumero}`;

    tarea.setAttribute('draggable', 'true');
    todo.append(tarea);
    tarea.addEventListener('dragstart' , (e) =>{
        e.dataTransfer.setData('text/plain',tarea.id);
    })

    


}
