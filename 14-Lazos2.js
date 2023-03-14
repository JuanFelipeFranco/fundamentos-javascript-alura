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

let i = 0;
//while... 0 o mas veces
//Do ... 1 o mas veces
//primero debo recorrer hasta el final de la lista y despues evaluar el precio

/*while(i < datos.length && datos[i].precio > presupuestoDisponible){
    i++;
}*/
let ciudadSeleccionada = "";
do{
    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].Ciudad;
        break;
    }
    i++;
} while (i < datos.length && ciudadSeleccionada == "" )

if (ciudadSeleccionada == "")
    console.log("No tenemos pasajes disponibles");
else
console.log("puedes comprar pasaje para: "+ciudadSeleccionada);