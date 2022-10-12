import validator from './validator.js';

   
   const bValidar = document.getElementById ("validarTarjeta");
   bValidar.addEventListener("click",(e)=>{
    e.preventDefault();

  const input = document.getElementById("inputNumero")
  const creditCardNumber = input.value;
  const isvalid = validator.isValid(creditCardNumber);
   
  console.log (isvalid)
  const noMask = validator.maskify (creditCardNumber) 
  input.value = noMask
  console.log(noMask)

  window.onclick= function(event){
    if (event.target== modal) {
      modal.style.display= "none";}
  
      const input= validator.isValid(creditCardNumber)
  
    if (input == false) {
      document.getElementById("valida").innerHTML="TU TARJETA ES INVALIDA"
    }
    else {
      document.getElementById("valida")
     }
    }

});

const modal = document.getElementById("modalTarjeta");
const cerrar= document. getElementsByClassName("cerrado")[0];

bValidar.onclick= function(){
  modal.style.display = "block";
}
cerrar.onclick= function(){
  modal.style.display = "none";



  }
 


// const mask= document.getElementById ("imputNumero").innerHTML=
// mask.addEventListener("keyup",(e)=>{
//     e.preventDefault(); 
// });


// //Con addeventlistener le doy funcionabilidad al evento que seria cuando el usuario le de click al boton pase algo

// console.log(validator)
    
//el numero de tarjeta 





// numTarjeta.addEventListener("validaTarjeta",validator);