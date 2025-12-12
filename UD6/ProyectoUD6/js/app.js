"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    const txtArea=document.querySelector("#taskInput");
    const btnAdd=document.querySelector("#addBtn");

    btnAdd.addEventListener("click",()=>{
        if (txtArea.value!==""){
            crearTarea(txtArea.value);
            txtArea.value="";
        }
    });

    txtArea.addEventListener("keydown",(e)=>{
        if (txtArea.value!=="" && e.key=="Enter"){
            crearTarea(txtArea.value);
            txtArea.value="";
        }
    });
});

const crearTarea=(texto)=>{
    if (texto!=""){
        const lista=document.querySelector("#taskList");

        const item=document.createElement("li");
        item.classList.add("task-item");
        item.addEventListener("dblclick",()=>{
            viewTask(item);
        });

        const span=document.createElement("span");
        span.textContent=texto;

        const botonera=document.createElement("div");

        const btnCheck=document.createElement("button");
        btnCheck.addEventListener("click",()=>{
            item.classList.toggle("completed");
        })

        const iconCheck=document.createElement("img");
        iconCheck.setAttribute("src","./assets/icons/check.png")

        const btnDel=document.createElement("button");
        btnDel.addEventListener("click",()=>{
            item.remove();
            const empty=document.querySelectorAll("li");
            if (empty.length==0) noTask();
        })

        const iconDel=document.createElement("img");
        iconDel.setAttribute("src","./assets/icons/delete.png")

        const btnEdit=document.createElement("button");
        const iconEdit=document.createElement("img");
        iconEdit.setAttribute("src","./assets/icons/edit.png")

        btnEdit.addEventListener("click",()=>{
            editTask(item);
        });

        const btnUp=document.createElement("button");
        const iconUp=document.createElement("img");
        iconUp.setAttribute("src","./assets/icons/upArrow.png")

        btnUp.addEventListener("click",()=>{
            const prev=item.previousElementSibling;
            if (prev){
                prev.before(item);
            }
        });

        const btnDown=document.createElement("button");
        const iconDown=document.createElement("img");
        iconDown.setAttribute("src","./assets/icons/downArrow.png")
        
        btnDown.addEventListener("click",()=>{
            const next=item.nextElementSibling;
            if (next){
                next.after(item);
            }
        });

        btnCheck.append(iconCheck);
        btnDel.append(iconDel);
        btnEdit.append(iconEdit);
        btnUp.append(iconUp);
        btnDown.append(iconDown);

        botonera.append(btnCheck,btnDel,btnEdit,btnUp,btnDown);

        item.append(span,botonera);

        const empty=document.querySelector(".empty-msg");
        if (empty){
            empty.replaceWith(item);
        }else{
            lista.append(item);
        }

   
    }
}

const noTask=()=>{
    const item=document.createElement("li");
    item.classList.add("empty-msg");
    item.textContent="No hay tareas. ¡Añade una! 😊";

    const lista=document.querySelector("#taskList");
    lista.append(item);
}   

const viewTask=(tarea)=>{
    const texto=tarea.firstElementChild.textContent;
    const botonera=tarea.lastElementChild.children.length;
    const padre=tarea.parentElement.tagName;
    const nextTask=tarea.nextElementSibling?tarea.nextElementSibling.firstElementChild.textContent:"-";
    const prevTask=tarea.previousElementSibling?tarea.previousElementSibling.firstElementChild.textContent:"-";
    swal.fire({
        title:"<h2>Información de la tarea</h2>",
        html:`<p><strong>Tarea: </strong>${texto}</p>
               <p><strong>Nro. Botones: </strong>${botonera}</p>
               <p><strong>Tipo padre: </strong>${padre}</p>
               <p><strong>Tarea Anterior: </strong>${prevTask}</p>
               <p><strong>Tarea Siguiente: </strong>${nextTask}</p>`,
        icon:"info",
        confirmButtonText:"Cerrar"
    });
}

const editTask=(tarea)=>{
    const span=tarea.firstElementChild;
    const input=document.createElement("input");
    input.type="text";
    input.style.flex="1";
    input.value=span.textContent;
    span.replaceWith(input);
    input.focus();
    input.select();

    input.addEventListener("keydown",(e)=>{
        if (e.key=="Enter"){
            span.textContent=input.value;
            input.replaceWith(span);
            document.querySelector("#taskInput").focus();
        }
    })

}


