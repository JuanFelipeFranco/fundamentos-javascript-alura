const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago","Montevideo");

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
//verificamos si pasajero cumple las reglas

if (edadPasajero >= 18 || estaAcompanado){
    //evaluamos si la ciudad esta disponible para viajar
    if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para venta");
    } else{
    console.log("Ciudad no disponible para viajar");
    }
}else{
    if(edadPasajero>=16 && ciudadDestino=="Lima"){
        console.log("Pasaje disponible para venta");
    } else{
        console.log("Pasajero no cumple las reglas")
    }
    
}
