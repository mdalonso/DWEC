"use strict";

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("button[type='submit']").addEventListener("click",postFetch);
    document.querySelector("#submitAsync").addEventListener("click",postFetchAsync);
    document.querySelector("#submitFormData").addEventListener("click",postFetchFormData);
    document.querySelector("#clearForm").addEventListener("click",limpiar);

})

const postFetch=function(e){
    e.preventDefault();

    let datos=montarDatos();

    fetch("./php/insertar_perro.php",
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
   // e.preventDefault();

    let datos=montarDatos();

    try {
        let response=await fetch("./php/insertar_perro.php",
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
    
    let datos=montarDatosFormData();
    console.log(datos.get("chip"));

    //try {
        let response=await fetch("./php/insertar_perro_fd.php",
            {method:'POST',
            body:datos});
        console.log(response.status);
        if (!response.ok) throw new Error("Se ha producido un error");
        let datosResponse=await response.json();

        console.log(datosResponse);
        
    // } catch (error) {
    //     console.log(error);
    // }
   
}


const montarDatos=function(){
    let datos={
        "chip":document.querySelector("#chipInput").value,
        "nombre":document.querySelector("#dogNameInput").value,
        "raza":document.querySelector("#dogRazaInput").value,
        "fechaNac":document.querySelector("#dogDateInput").value
    }
    return datos;
}
const montarDatosFormData=function(){

    const datos=new FormData();
    datos.append("chip",document.querySelector("#chipInput").value);
    datos.append("nombre",document.querySelector("#dogNameInput").value);
    datos.append("raza",document.querySelector("#dogRazaInput").value);
    datos.append("fechaNac",document.querySelector("#dogDateInput").value);
    
    return datos;
}

const limpiar=()=>{
    const inputs=document.querySelectorAll("input");
    inputs.forEach(element => {
        element.value="";
    });
}