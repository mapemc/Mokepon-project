// Crea un programa uqe pida dos numeros y que nos diga cual es el mauor, el menor y si son iguales
function numeritos(num1, num2) {
    if (num1 > num2) {
        console.log("este numero "+ num1+ " es mayor que el segundo numero " + num2);
    }else if (num2 > num1) {
        console.log("este numero " + num2 + " es mayor que el primer numero " + num1);
    } else if (num1 < num2) {
        console.log("este numero " + num1 + " es menor que el segundo numero " + num2);
    } else if(num2< num1 ){
        console.log("este numero " + num1 + " es menor que el primer numero " + num2);
    } else {
        console.log("Ambos numeros son iguales");
    }
}
numeritos(5,5)