// Declara Funciones
function triple(numeroA) {
    return numeroA * 3
}
let numeroA = 3
console.log(triple)

// Ejecutar Funciones
function cuadruple(numero) {
    return 4 * numero;
}
console.log(cuadruple(5))

// Hacer matematicas
function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB
}
console.log(multiplicar(3, 4))
// Funcionception
function tripleDeLaSuma(numeroA, numeroB) {
    let resultado = triple(numeroA + numeroB)
    return resultado

}
tripleDeLaSuma(4, 5)

// Matematicas mas complejas
let radio = 5
pi = 3.14
function perimetro(radio) {
    return pi * radio * 2
}
function area(radio) {
    return pi * radio * radio
}

// Strings
// let nombre
// let apellido
// function longitudNombreCompleto(nombre, apellido) {
//     return (nombre + " " + apellido).length
// }
// console.log(longitudNombreCompleto("Juan", "Perez"))

// Imprimir strings (Cartelitos)
// function escribirCartelito(titulo, nombre, apellido) {
//     return titulo + " " + nombre + " " + apellido
// }
// console.log(escribirCartelito("Dra.", "Ana", "Pérez"))

// Dias de la semana

function sePoneLaOlla(diaDeLaSemana) {
    if (diaDeLaSemana == 'Domingo') {
        return '¡Pongamos la olla, hoy se comen pastas!'
    }
    else {
        return "Mejor lo dejamos para el domingo"
    }

}
console.log(sePoneLaOlla('Lunes'))
console.log(sePoneLaOlla('Domingo'))

// Length para contar los digitos
let nombre
let apellido
function longitudNombreCompleto(nombre, apellido) {
    return (nombre + " " + apellido).length
}
console.log(longitudNombreCompleto("Juan", "Perez"))

// Strings 
function sePoneLaOlla(diaDeLaSemana) {
    if (diaDeLaSemana == 'Lunes' || 'Martes' || 'Miercoles' || 'Jueves' || 'Viernes' || 'Sabado') {
        return 'Mejor lo dejamos para el domingo'
    }
    else if (diaDeLaSemana == 'Domingo')
        return "¡Pongamos la olla, hoy se comen pastas!"

    else {
        return " "
    }

}
console.log(sePoneLaOlla('Domingo'))

// Ejercicio 1 Fin de semana

let dia = 'jueves'
function finDeSemana(dia) {
    switch (dia) {
        case 'viernes':
            console.log('buen finde')
            break;
        case 'lunes':
            console.log('buena semana')
            break;
        default:
            console.log('buen dia')
            break;
    }
}
