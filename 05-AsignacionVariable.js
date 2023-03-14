//palabra CONST
//Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje= 1650;
console.log(valorPasaje)

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";
console.log(nombrePasajero);
console.log(apellidoPasajero);

//Palabra LET
//Espacio de memoria que pueda cambiar  durante la ejecucion del programa
//let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
//console.log(nombreCompletoPasajero);

//palabra VAR
//Espacio de memotia que pueda cambiar durante la ejecucion del programa
//el alcance de la variable, donde esta disponible ella, dentro de todos los bloques y sub bloques.
var nombreCompletoDelPasajero = nombrePasajero + " "+ apellidoPasajero;

//Bloque
{
    let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: " + nombreCompletoPasajero);
    console.log("Variable con var: " + nombreCompletoDelPasajero);
}
//se genera error debido a que let solo se coge en un bloque al estar por fuera, ya let no tiene valor asignado.
//console.log("Variable con let: " + nombreCompletoPasajero);
console.log("Variable con var: " + nombreCompletoDelPasajero);

