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
        const iconDel=document.createElement("img");
        iconDel.setAttribute("src","./assets/icons/delete.png")

        const btnEdit=document.createElement("button");
        const iconEdit=document.createElement("img");
        iconEdit.setAttribute("src","./assets/icons/edit.png")

        const btnUp=document.createElement("button");
        const iconUp=document.createElement("img");
        iconUp.setAttribute("src","./assets/icons/upArrow.png")

        const btnDown=document.createElement("button");
        const iconDown=document.createElement("img");
        iconDown.setAttribute("src","./assets/icons/downArrow.png")
        
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
