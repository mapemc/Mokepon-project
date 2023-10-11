/**/
// let perfil = identificarPerfil("administrador")
// function identificarPerfil(perfil) {

//     if (perfil == "administrador") {
//         console.log("Usted tiene todos los privilegios de uso del sistema")
//     } else if (perfil == "asistente") {
//         console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos")
//     }
//     else if (perfil == "invitado") {
//         console.log("Usted sólo tiene permisos de consultar datos")
//     } else {
//         console.log("Debe especificar un perfil valido")
//     } return perfil
// }
/*      #2          */
// let pagoDelMes = 500
// let consumoKWH = 300
// let consumoTotal = pagoDelMes > consumoKWH ? pagoDelMes * 1.20 : pagoDelMes
// console.log(consumoTotal)
/*       #3           */

let posicion = ''

switch (posicion) {
        
    case 'top':
        console.log("Deprimido")
        break;
    case 'mid':
        console.log('El crecido')
        break;
    case 'adc' || 'tirador' :
        console.log('el niño lloron')
        break;
    case 'support':
        console.log('el rechazao')
        break;
    case 'jungla':
        console.log('todo es tu culpa')
        break;
    default:
        console.log('si, ambos lo sabemos, desinstala')
        break;
}

/*       #4           */


// function calculadora(n1, n2, operador) {
//     let resultado 
//     switch (operador) {
//         case "+" || "suma":
//             resultado = n1 + n2
//             console.log("el resultado es " + resultado)
//             break;
//         case "-" || "resta":
//             resultado = n1 - n2
//             console.log("el resultado es " + resultado)
//             break;
//         case "*" || "multiplicar":
//             resultado = n1 * n2
//             console.log("el resultado es " + resultado)
//             break;
//         case "/" || "dividir":
//             resultado = n1 / n2
//             console.log("el resultado es " + resultado)
//             break;
//         default:
//             console.log("escribe dos numeros para la operacion y su operador para empezar")
//             break;
//     }
// }
// console.log(calculadora(2,3,"*"))

/*      desafio extra     */

// let altura
// let velocidad
// function aterrizarElAvion(velocidad,altura){
//     if ((altura >= 150 && altura <=300 ) && (velocidad >= 268 && velocidad <= 278)) {
//         console.log('puedes aterrizar')
//     } else {
//         console.log("velocidad entre 268-278 y la altura entre 150-300 ")
//     }
// }