"use strict"
document.addEventListener("DOMContentLoaded", () => {
   
        document.querySelectorAll("#first, #all").forEach(elemento =>{
            elemento.addEventListener("click", mostrar)
        })
        
       
})

function mostrar() {
    //Utilizamos el objeto FormData para pasar los datos en el cuerpo utilizando POST
    //Creamos el objeto FormData
    const param=new FormData();

    //Se se ha pulsado el botón "Mostrar primero" se añade la pareja
    //atributo-valor al objeto FormData
    if (this.getAttribute("id") == "first") {
        param.append("perro", "111A")
    }else{
        param.append("perro", "");
    }   
    
    //Generamos la solicitud, en este caso POST, para enviar los datos de la query
    //al archivo php dentro del body (con POST no se pueden enviar en la URL)
    fetch("php/mostrar.php",{
        //Especificamos el método
        method:'POST',
        //En el body enviamos el objeto FormData
        body: param 
    })
    //Gestión del objeto response
    .then((response) =>{
        if(!response.ok || response.status !=200) {
            //El throw activa el reject de la promesa de la función async
            throw ("Ha ocurrido un error con el servidor");
        }
        //El script php envia los datos en formato JSON
        return response.json()
    }) 
    //Gestión de los datos extraídos del objeto response
    .then((datos) => {
        //elimina las filas para volver a construir la tabla
        document.querySelector("tbody").querySelectorAll("tr").forEach(element=>{
            element.remove();
        })
       //monta la tabla de nuevo con los datos extraídos
        datos.data.forEach(elemento => {
              const fila=document.createElement("tr");
              const colChip=document.createElement("td");
              colChip.textContent=elemento.chip;
              const colNombre=document.createElement("td");
              colNombre.textContent=elemento.nombre;
              const colRaza=document.createElement("td");
              colRaza.textContent=elemento.raza;
              const colFechaNac=document.createElement("td");
              colFechaNac.textContent=elemento.fechaNac;
              fila.append(colChip,colNombre,colRaza,colFechaNac);
              document.querySelector("tbody").append(fila);
        })    
    })
    //Gestión del rechazo de la promesa 
    .catch((error) => {
      console.log(error);
    });
  

}