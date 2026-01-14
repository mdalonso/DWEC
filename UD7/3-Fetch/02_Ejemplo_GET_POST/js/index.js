document.addEventListener("DOMContentLoaded",() =>{
    document.querySelector("#GET").addEventListener("click",mostrarMensajeGET);
    document.querySelector("#POST").addEventListener("click",mostrarMensajePOST);

});

function mostrarMensajeGET(){
    //Se realiza la solicitud GET (por defecto) con fetch.
    //El script ejemplo.php requiere dos parámetros: valor con el método utilizado (GET/POST) y
    //nombre con una cadena
    //Al ser una solicitud GET los parámetros se pasan en la URL
    //Bien en formato query string...
    fetch("ejemplo_query.php?valor=GET&nombre=María")


    //...o utilizando un objeto URLSearchParams
    //const parametros=new URLSearchParams({
    //    "valor":"GET",
    //    "nombre":"María"
    //});
    //fetch(`ejemplo_query.php?${parametros}`)
    
    //El primer .then gestiona el objeto RESPONSE
    .then( response=>{
        if(!response.ok){
            throw ("Error de comunicación");
        }
        //Como sabemos que la información que devuelve el servidor es en formato texto
        //la extraemos del objeto response con .text()
        return response.text();
    })
    //El segundo .then gestiona los datos extraídos del objeto response
    .then(data => {
        document.querySelector("#mensaje"). innerText = data;
    })
    //Gestión del rechazo de la promesa de fetch
    .catch(error => {
        console.error(error);
    });
}
function mostrarMensajePOST(){
    //En formato url-encoded
    fetch("ejemplo_query.php",{method:'POST', headers:{'Content-Type': 'application/x-www-form-urlencoded'} ,body:`valor=POST&&nombre=Antonio`})

    //En formato json
    // const datos={
    //     "valor":"POST",
    //     "nombre":"Antonio"
    // }
    // fetch("ejemplo_json.php",{method:'POST', headers:{'Content-Type': 'application/json'} ,body:JSON.stringify(datos)})


    .then( response=>{
        if(!response.ok){
            throw ("Error de comunicación");
        }
        return response.text();
    })
    .then(data => {
        document.querySelector("#mensaje").innerText = data;
    })
    .catch(error => {
        console.error(error);
    });
}
