//Tipos de datos
//Alfanumerico

const nombrePasajero = "Pedro Silva";
console.log(nombrePasajero);
//const son variables que no cambian en el tiempo, no se puede asignar otro valor diferente


let nombrePasajero1 = "Pedro Silva";
console.log(nombrePasajero1);
nombrePasajero1="Ramon Silva";
console.log(nombrePasajero1);
//let si permite el cambio de valores en las variables

//NUMERICO
let valorBoleto=1650;
const tasaEmbarque = 60/100;
var gestionAgencia = 120;
console.log(valorBoleto);

//Logicos (true or false)
let boletoActivo=true;

//operaciones aritmeticas
//SUMA
let totalBoletos = 1700 + 64.45 + 100;
console.log(totalBoletos);

let totalBoleto = valorBoleto + valorBoleto * tasaEmbarque + gestionAgencia;
console.log(totalBoleto);

//Orden de precedencia
//()
// * y /
// + y -
 

//CONCATENACION DE TEXTO
let nombre = "Leonardo";
let apellido = "Lacruz";

let nombreCompleto = nombre + apellido;
let pasaporte = "100"+"12";
let multiplicacion = "1000"/"10";
let multiplicacion1 = parseInt("1000")/parseFloat("10");
console.log(nombreCompleto);
console.log(pasaporte); //concatena los dos texto de numeros
console.log(multiplicacion); //javascript lo transforma a numeros y saca el resultado 100
console.log(multiplicacion1);//transforma el tipo de dato a uno numerico

let noEsNumero = parseInt("AY")
console.log(noEsNumero) //resultado NAN QUE SIGNIFICA NI ES UN NUMERO