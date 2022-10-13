//Acá se pone todo lo que tiene que ver con la lógica



//Crear un objeto, (que es una entidad independiente que contiene propiedades, funciones y métodos), y que dentro haya dos metodos, inValid y Maskify) 
//Un metodo es una función la cual es propiedad de un Objeto. Existen dos tipos de métodos: Métodos de Instancia los cuales son tareas integradas realizadas por la instacia de un objeto, y los Métodos Estáticos que son tareas que pueden ser llamadas directamente en el constructor de un objeto.
const validator = {
  //este es el primer metodo
  isValid(creditCardNumber) {
    let numeros= 0;
    let numeroTotal= 0;
    
    //Hacer que los numeros que ingresa el usuario ya no sean texto  sino numeros y que se lea de reverso
    const arrayCardNumber = creditCardNumber.split("").reverse()
    //Hacer un ciclo for, que permita dar la logica a los numeros que se ingresen 
    for (let i = 0; i < arrayCardNumber.length; i++){
      let mult = arrayCardNumber[i];
      // coger los numeros que sean pares y multiplicar por 2 (Operador binario %. Devuelve el resto entero de dividir los dos operandos.)
    if(i % 2!==0){
      mult= arrayCardNumber[i]*2;
    // si el resultado en mayor a 9 separarlos y sumar y convertirlo a un solo digito
    if (mult > 9){
      let numUno = mult.toString() [0];
      let numDos = mult.toString() [1];

      numeros = Number(numUno)+ Number(numDos);
      numeroTotal+= numeros;
    }
    else{ 
    numeroTotal += mult;
     }
  }
  else{
    numeroTotal += mult;
  }
  }

// Suma total de los digitos, ademas indicar que si es multiplo de 10 entonces en valido o invalido
let sumaTotal = 0;
for (let i= 0 ;i<numeroTotal.length; i++){
sumaTotal += parseInt(numeroTotal[i]);

}
let resultado= sumaTotal%10===0
 return resultado

},

//Enmascarar los digitos con excepción de los ultimos 4 

maskify(numTarjeta) {
let numeros= numTarjeta.split("")

let mask= ""

for (let i= 0; i<numeros.length -4 ; i++){
 mask += "#" 
}

let noMask= numeros.slice(-4).toString().replace(/,/g,"");
 mask += noMask
return mask


  // numeros.slice(-4).join("");
  // const maskRepresenta = "#";
  // const mask = maskRepresenta.repeat(12) + noMask; 
  // return mask

 


  // numTarjeta= numTarjeta.split("")
  
  // let mask = ""
  // for(let i=0; i<numTarjeta.length-4;i++){
  //   mask= "#"
  // }
  // mask += numTarjeta.slice(-4).toString().replace(/,/g,"");
  // return mask

  // console.log (maskify)

  },
  
}
// maskify (numTarjet , n = 4 , mascara = "#" ) {
//   if ( typeof numTarjet != "string"){
//     throw TypeError ("el argumento <numTarjeta> debe ser una cadena de caracteres");
//   }
//   if ( typeof n != "number" ||  !Number.isInteger(n)){
//     throw TypeError ("el argumento <numTarjeta> debe ser un numero entero ");
//   }
//   if ( typeof mascara != "string"){
//     throw TypeError ("el argumento <mascara> debe ser una cadena de caracteres");
//   }
//  return(""+ numTarjet).slice(0,n).replace(/./g, mascara)+(""+numTarjet).slice(-n);



// }







// let numeros= numTarjeta.toString();
// let agrupador= ""

// for (let i=0 ; i<numeros.length;i++){
// if(i>4){
// agrupador= agrupador+numeros[i];
// }
// else{
// agrupador= agrupador+"#";
//  }
// return agrupador;
//  }
// console.log (agrupador)















//Hacer que los numeros pares se multipliquen por dos 
//Hacer que si este resultado se convierte a dos digitos, sumarlos para que sean solo uno 
//Sumar cnuevamente los digistos del resultado mas los digitos impares
//Hacer una condicional que si el resultado es multiplo de 10 hacer que salga un mensaje de validado de lo contario (else) invalidado

//   },
//   maskify: function(){
//     alert("Tu tarjeta está protegida")
//   }


// //Validator es el objeto y el método es isValid y maskify

export default validator;
