"use strict"; 
//PROTEGER LA ESTRUCTURA Y EL CONTENIDO DE UN OBJETO LITERAL

//declaraciones

const electro={
    nombre:'Frigorífico',
    precio:300,
    color:'red'
}

//Método FREEZE(): congelar
Object.freeze(electro); //no permite modificar la estructura, ni el contenido el objeto
//Las dos siguientes líneas de código producirán un error ya que el objeto está congelado y no se puede modificar.
//electro.disponible=true;
//electro.nombre="Horno"; //No permite

//Método ISFROZEN(): Para comprobar si un objeto está congelado.
//Devuelve TRUE si el objeto está congelado, y FALSE si no lo está.
if (Object.isFrozen(electro)){
    console.log('No puede alterarse el objeto');
}else{
    electro.disponible=true;
    console.log(electro);
}

