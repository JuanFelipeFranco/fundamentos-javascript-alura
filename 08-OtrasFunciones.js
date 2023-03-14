//Definicion de una lista con tipo de dato Alfanumerico
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

//Definicion de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} elementos`);

//Remover el primer Elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Filtro de elementos de la lista con filtracion e.lenght mide el largo de las palabras
//const paisesFiltrados = paisesDisponibles.filter((e) => e=="Brasil");
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

//Convertir una lista en una cadena de caracteres ALFANUMERICOS
console.log(paisesDisponibles.join("-")); //Ya no es una lista es una cadena alfanumericos

//ORDENAR la lista con SORT, este si modifica la lista.
console.log(paisesDisponibles.sort());
console.log(paisesDisponibles);

//Conocer la posicion del elemento con la ordenada.
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf("Peru")}`);

//Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log("lista de paises Y ciudades: ");
console.log(listaPaisesYCiudades);
console.log("lista de paises: ");
console.log(paisesDisponibles)
