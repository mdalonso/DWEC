"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("button[type='submit']").addEventListener("click",postFetch);
    document.querySelector("#submitAsync").addEventListener("click",postFetchAsync);
    document.querySelector("#submitFormData").addEventListener("click",postFetchFormData);
    document.querySelector("#clearForm").addEventListener("click",limpiar);

})

const postFetch=function(e){
    e.preventDefault();
    const inputId=parseInt(document.querySelector("#idInput").value);
    if (isNaN(inputId)) throw new Error("El id debe ser un número entero");

    let datos=montarDatos();

    fetch("https://jsonplaceholder.typicode.com/users",
        {method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(datos)})
    .then((response)=>{
        //return response.json();
        if (!response.ok) throw new Error("Se ha producido un error");
        else return response.json();
    })
    .then(data=>{
        console.log(data);
        //Swal.fire('Datos guardados', 'success');
    })
    .catch(error => {
        console.log("qué está pasando aquí");
        console.log(error)})
}

const postFetchAsync=async function(e){
    e.preventDefault();
    const inputId=parseInt(document.querySelector("#idInput").value);
    if (isNaN(inputId)) throw new Error("El id debe ser un número entero");

    let datos=montarDatos();

    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/users",
            {method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)})
        if (!response.ok) throw new Error("Se ha producido un error");

        let datosResponse=await response.json();

        console.log(datosResponse);
        
    } catch (error) {
        console.log(error);
    }
}

const postFetchFormData=async function(e){
    //e.preventDefault();
    const inputId=parseInt(document.querySelector("#idInput").value);
    if (isNaN(inputId)) throw new Error("El id debe ser un número entero");
    
    let datos=montarDatosFormData();

    try {
        let response=await fetch("https://jsonplaceholder.typicode.com/users",
            {method:'POST',
            body:datos});
        console.log(response.status);
        if (!response.ok) throw new Error("Se ha producido un error");
        let datosResponse=await response.json();

        console.log(datosResponse);
        
    } catch (error) {
        console.log(error);
    }
   
}


const montarDatos=function(){
    let datos={
        "id":document.querySelector("#idInput").value,
        "name":document.querySelector("#userNameInput").value,
        "username":document.querySelector("#userUsernameInput").value,
        "email":document.querySelector("#userEmailInput").value
    }
    return datos;
}
const montarDatosFormData=function(){

    const datos=new FormData();
    datos.append("id",document.querySelector("#idInput").value);
    datos.append("name",document.querySelector("#userNameInput").value);
    datos.append("username",document.querySelector("#userUsernameInput").value);
    datos.append("email",document.querySelector("#userEmailInput").value);
    
    return datos;
}

const limpiar=()=>{
    const inputs=document.querySelectorAll("input");
    inputs.forEach(element => {
        element.value="";
    });
}