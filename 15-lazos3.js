const datos = [
    {
        "Ciudad" :"Bogota",
        "precio":500
    },
    {
        "Ciudad" :"Lima",
        "precio":400
    },
    {
        "Ciudad" :"Santiago",
        "precio":380
    },
    {
        "Ciudad" :"Montevideo",
        "precio":200
    }
]

const presupuestoDisponible = 400;
// Siempre comenzamos en 0 let i = 0;

//while... 0 o mas veces
//Do ... 1 o mas veces
//primero debo recorrer hasta el final de la lista y despues evaluar el precio

/*while(i < datos.length && datos[i].precio > presupuestoDisponible){
    i++;
}*/
//FOR VALOR INICIAL HASTA UN VALOR FINAL
let ciudadSeleccionada = "";

//el ciclo con el break llega y toma el dato peru y como es el primero, coge el break y termina
//colocando el condicional &&, bogota no cumple y despues evalua lima, como el condicional && evalua que este vacio pero ya tiene a lima entonces termina y sale del codigo

for (let i = 0; i < datos.length && ciudadSeleccionada == ""; i++) {
   
    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].Ciudad;
       
    }
}

if (ciudadSeleccionada == "")
    console.log("No tenemos pasajes disponibles");
else
console.log("puedes comprar pasaje para: "+ciudadSeleccionada);