"use strict";
//Declaramos la función como async para manejar situaciones asíncronas
async function miPeticion(){
//Es necesario envolver las llamadas await en un try catch para manejar el rechazo
//de la promesa de la función que se invoca
    try {
        //La llamada a fetch, como genera una promesa, tiene que invocarse con await
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        //Se gestiona el error
        if(!response.ok || response.status !=200) {
            //El throw activa el reject de la promesa de la función async
            throw ("Ha ocurrido un error con el servidor");
        }
        
        //response.json devuelve una promesa que debe ser manejada con await
        let json = await response.json();

        json.forEach(element => {
            console.log(element.username);
        });
        
    } catch (error) {
        console.log(error);
    }
}
miPeticion();