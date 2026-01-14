"use strict"
window.addEventListener("DOMContentLoaded", ()=>{
    mostrarProv();
})
//Realizamos el mismo ejemplo anterior con funciones AsyncAwait combinadas con fetch
//Recordamos : una función async es un ejecutor que envuelve su resultado en un objeto promesa
const mostrarProv=async() =>{
    try{
        //fetch se resuelve en un objeto response
        //La función se detiene hasta que la solicitud se resuelve.
        //En este caso se realiza una solicitud GET al servidor.
        const response= await fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json");
        console.log(response);
        
        if(!response.ok || response.status !=200) {
            //El throw activa el reject de la promesa de la función async
            throw ("Ha ocurrido un error con el servidor");
        }
        //La función se detiene hasta que obtenemos los datos generados por la solicitud fetch al servidor
        //Como en el ejemplo anterior, los datos parseados se recogen en un array de objetos JS.
        const data=await response.json();
        console.log(data);
        //Se ordena el array alfabéticamente de forma ascendente por el nombre de la provincia        
        data.sort((a, b) => {
            return a.nm.localeCompare(b.nm)
        })
        //Se recorre el array para cargar las provincias en el select correspondiente
        data.forEach(element => {
            const option=document.createElement("option");
            //Atributos personalizados.
            //Los atributos personalizados se suelen denominar data-xxx y nos sirven para añadir información a los elementos html.
            //A todos los atributos data- podemos accederlos mediante la propiedad dataset del elemento html
            //teniendo en cuenta que dataset transforma el identificador a camelCamel case.
            //Por ejemplo, el atributo personalizado data-id-user podría ser accedido desde código como dataset.idUser.
            
            option.setAttribute("data-id", element.id);//Le incorporamos un atributo que nos facilite la gestión
            option.innerText=element.nm;
            document.querySelector("#provincias").append(option);
          }); 

        //evento change
        //Mostramos con el código postal según la provincia seleccionada.
        document.querySelector("#provincias").addEventListener("change", function () {
              const provincias=document.querySelector("#provincias")
              if (provincias.selectedIndex!=0){
                Swal.fire("El CP es " +provincias.options[provincias.selectedIndex].getAttribute("data-id"));
              }
          })
        
    }catch(error){
        console.error(error);
    };
         
}
