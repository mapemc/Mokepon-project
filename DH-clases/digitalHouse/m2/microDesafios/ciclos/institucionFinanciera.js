let movimientos = [ 200, -20, 51000, 5000, -40000 , 4000, 9000, 3500, -2000 ]
let nombre
let apellido

function calculoMovimientos(movimientos) {
  let depositos = 0
  let retiros = 0
  let saldoActual = 0
  for (let i = 0; i < movimientos.length ; i++) {
    if (movimientos[i] > 0) {
      depositos += movimientos[i]
    } else if (movimientos[i] < 0) {
      retiros += movimientos[i]
    }
    
  }; 
  saldoActual = depositos + retiros

return [depositos, retiros , saldoActual]
}

function mensajeFinal(calculoMovimientos) {
  nombre = "Michael"
  apellido = "Martinez"
  for (let i = 0; i < calculoMovimientos.length; i++) {
    if (calculoMovimientos == "0") {
      console.log("Aportes " + calculoMovimientos[i])
    } else if (calculoMovimientos == "1") {
      console.log("Retiros son: " + calculoMovimientos[i])
    } else {
      console.log("Y tu saldo total es: " + calculoMovimientos[i])
    }
    }
    
}
console.log(mensajeFinal());

 
   
 
 
  // console.log(
  //   "Estimado " + nombre + " " + apellido ,
  //   "Su saldo actual es de " + calculoMovimientos,
  //   "has hecho " + calculoMovimientos + " en depositos ",
  //   "y " + calculoMovimientos + " en retiros"
  //   );
  // }


