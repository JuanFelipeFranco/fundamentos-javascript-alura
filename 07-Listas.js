const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//Definicion de una lista con tipo de dato Alfanumerico
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");

//Definicion de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina"];

//Push Agrega al final
paisesDisponibles.push("Uruguay");
ciudadesDisponibles.push("Montevideo");

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//UNSHIFT agrega al inicio
paisesDisponibles.unshift("Ecuador");
ciudadesDisponibles.unshift("Quito");

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//Mostrando el primer elemento de la Lista, cambiando el numero cambiamos el que vamos a mostrar
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

//SPLICE elimina el valor donde quiere 1 y cuenta los que va eliminar y los cambia por los que colocamos reemplaza en la misma posicion
paisesDisponibles.splice(1,2,"Venezuela", "Paraguay", "Bolivia");
console.log(paisesDisponibles);

