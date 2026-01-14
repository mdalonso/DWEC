"use strict";
//EJEMPLO CONTRA UNA API MUY SENCILLO DE FETCH
//Llamada a fetch con un GET (por defecto)
fetch("https://jsonplaceholder.typicode.com/users")
//El primer then gestiona el objeto response.
.then((response) => {
    console.log(response);
    if(response.ok && response.status == 200){
        //Extraemos los datos que vienen en formato json.
        return response.json(); //Pasamos la promesa a formato JSON
    }else{
        throw new Error("Error en la petición al servidor");
    }
})
//El segundo .then gestiona los datos
.then((json)=>{
    console.log(json);
   //Podemos acceder a lo que ha devuelto el servidor
   json.forEach(element => {
        console.log(element.username);
   }); 
})
//El catch gestiona el rechazo de la promesa generada por fetch
.catch(e => {console.log(e)});

