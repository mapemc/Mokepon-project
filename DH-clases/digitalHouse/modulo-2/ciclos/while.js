function tablaDeMultiplicar(numero) {
    let i = 1
    let resultado = 0
    while (i < 10) {
        resultado=i*numero
        console.log(numero+' ' + '*' +' +'+ i +' '+ '=' + ' ' + resultado)
        i++
    }
} tablaDeMultiplicar(5)