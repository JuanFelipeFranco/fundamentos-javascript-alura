const nombrePasajero = 'Leonardo';
const apellidoPasajero = 'Lacruz';


//INTERPOLAR trae automaticamente las variables y la incluye alli, va sustituyendo la variable
//Template String, plantilla de texto
let nombreCompleto = `El nombre completo es: ${nombrePasajero} ${apellidoPasajero}`;
console.log(nombreCompleto)

//MUTABILIDAD USAR CONST si no se necesita cambiar valor, con let se cambia y se puede cambiar
//de tipo de variable de numero a string sin solicitar restriccion.
let segundoPasajero = "Diego Castillo";
console.log(`El nombre del segundo pasajero es: ${segundoPasajero}`);
segundoPasajero = 1234050;
console.log(`El nombre del segundo pasajero es: ${segundoPasajero}`);