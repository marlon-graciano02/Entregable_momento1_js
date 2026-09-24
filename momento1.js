 
 
 function validarAcceso(){
 const USUARIO_CORRECTO="marlon";
 const CLAVE_CORRECTA="12345";

  let intentos=3;
  let datosCorrectos=false;

    while(intentos >0 && !datosCorrectos){

         let usuario=prompt("Ingrese su usuario");
         let clave=prompt("Ingrese la clave");


         if(usuario === USUARIO_CORRECTO && clave === CLAVE_CORRECTA){
            datosCorrectos=true;
            console.log(`Hola ${usuario} bienvenido al sistema`)
         }else{
            intentos--;
            console.log(`Datos  incorrectos tienes:${intentos} intentos`);
            
            
         }
    

   }if(!datosCorrectos){
            console.log(`Usuario bloqueado ha superado el limite de intentos`);
         }
 }
   validarAcceso();





