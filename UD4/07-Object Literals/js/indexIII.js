"use strict"; 
//PROTEGER LA ESTRUCTURA DE UN OBJETO LITERAL.
//declaraciones
//const nombre='Frigorífico', precio=300, color='red';

//objeto literal, agrupar todo en una variable
const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red'
}
//Método SEAL(): (sellar) Permite congelar la estructura dejando el contenido abierto a cambios.
//sellar
Object.seal(electro); //no permite modificar la estructura pero sí el contenido
//La siguiente línea producirá un error ya que trata de añadir una nueva propiedad al objeto.
//electro.disponible=true; //error

//Método ISSEALED(): Permite comprobar si un objeto está "sellado". 
//Devuelve TRUE si está sellado y FALSE si no lo está.
if (Object.isSealed(electro)){
    //Vemos que el contenido del objeto puede ser modificado aunque esté sellado.
    electro.nombre="Horno"; 
    console.log(electro);
    
}else{
   console.log('No está sellado');
}

