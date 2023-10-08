/*           CallBacks           */
//  UNA FUNCION QUE SE PASA COMO PARAMETRO DE OTRA FUNCION. NADA MAS!
function doble(numero1) {
    return numero1 * 2
}
function triple(numero1) {
    return numero1 * 3
}
function aplicarCallback(numero1, operacion) {
    return (operacion(numero1))
}
// Calculadora 
function suma(num1, num2) {
    return num1 + num2
}
function resta(num1, num2) {
    return num1 - num2
}
function multiplicacion(num1, num2) {
    return num1 * num2
}
function division(num1, num2) {
    return num1 / num2
}

function calculadora(num1, num2, operacion) {
    return (operacion(num1, num2))
}

// 