"use strict"

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#getUsersG").addEventListener("click",getFetch);
    document.querySelector("#getUsersAW").addEventListener("click",getFetchAsync);
})

const getFetch=function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        if (!response.ok) return(new Error("Se ha producido un error"));

        return response.json();
    })
    .then(data=>mostrarDatos(data))
    .catch(error=>{
        console.log(error);
    })
}

const getFetchAsync=async function(){
    try{
        
        let response=await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response.status);
        console.log(response.ok);
        if (!response.ok) throw new Error("Se ha producido un error");
        let datos=await response.json();
        mostrarDatos(datos);
    }catch(error){
        console.log(error);

    }
    
}

const mostrarDatos=function(data){
    limpiarTabla();
    const tabla=document.querySelector("tbody");
    
    
    data.forEach(element => {
        let fila=document.createElement("tr");
        let colID=document.createElement("td");
        colID.innerText=element.id;
        let colName=document.createElement("td");
        colName.innerText=element.name;
        let colUser=document.createElement("td");
        colUser.innerText=element.username;
        let colEmail=document.createElement("td");
        colEmail.innerText=element.email;
        fila.append(colID,colName,colUser,colEmail);
        tabla.append(fila);
    });   
}
const limpiarTabla=()=>{
    document.querySelector("tbody").querySelectorAll("tr").forEach(element=>{
        element.remove()
    }) 
}