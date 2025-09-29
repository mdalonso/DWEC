//let mensaje="variable global";



const mostrar=function(){
    var varConVar="Variable definida con VAR"
    if (true){
        let varConLet="Variable definida con LET"
        console.log(varConVar);
        console.log(varConLet); 
    }
    console.log(varConLet);
    //let mensaje="variable local";
    //console.log(mensaje);//variable local;
}
//console.log(mensaje); // variable global;

mostrar();