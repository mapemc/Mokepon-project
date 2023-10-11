function calculoVehiculo(tipoVehivulo, diasAlquiler, sillaBebe) {
    
    switch (tipoVehivulo) {
        case "compacto":
            tipoVehivulo = 14000
            break;
        case "mediano":
            tipoVehivulo = 17000
            break;
        case "camioneta":
            tipoVehivulo = 28000
            break;
    }

   if (sillaBebe == 1) {
    sillaBebe = 1200
   } else {
       sillaBebe = 0 
   }
    precioFinal = ((tipoVehivulo + sillaBebe) * diasAlquiler)
    
    return console.log("Estimado cliente: en base al tipo de vehículo " + tipoVehivulo + " alquilado, considerando los " + diasAlquiler + " días utilizados, el monto total a pagar es de " + precioFinal);
}
console.log(calculoVehiculo("camioneta", 28,1));
