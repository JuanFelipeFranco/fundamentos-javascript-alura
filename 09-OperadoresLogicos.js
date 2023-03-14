//Operadores de Comparacion
const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago","Montevideo");

//IF palabra reservada que evalua condicion
// console.log(`Verificando pasajes para ${ciudadDestino}`);
// if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
//     console.log("Pasaje disponible para venta");
// } else{
//     console.log("Ciudad no disponible para viajar");
// }

//const valorPasaje = "1000";
//if (valorPasaje == 1000){
    //console.log("el pasaje vale 1000")
//}

//comparador con triple = debe ser igual el tipo de variable y el valor asignado
const valorPasaje = "1000";
if (valorPasaje === 1000){
    console.log("el pasaje vale 1000")
}

//Operadores logicos
// Y (AND) - O (OR) - NO (NOT)
//AND = && - se deben cumplir las dos condiciones
// OR = || - se debe cumplir una condicion al menos
//NOT = ! - No se cumple la condicion
let edadPasajero = 19;
let estaAcompanado = true;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && 
(edadPasajero >= 18 || estaAcompanado)) {
    console.log("Pasaje disponible para venta");
} else{
    console.log("Ciudad no disponible para viajar o pasajero no cumple las condiciones");
}

//APLICANDO LOGICA NEGATIVA
edadPasajero = 17;
estaAcompanado = false;
if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && 
(edadPasajero >= 18 || estaAcompanado))) {
    console.log("Ciudad no disponible para viajar o pasajero no cumple las condiciones");
} else{
    console.log("Pasaje disponible para venta");
}
