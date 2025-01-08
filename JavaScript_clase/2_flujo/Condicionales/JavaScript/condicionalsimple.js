// Sintaxis de los condicionales
/*

    if (condicion) {
        sentencias a ejecutar si
        se cumple la condicion
    }

*/

// Vamos a pedir un número al usuario
// Si el número es mayor que 5 y menor que 10 mostramos el mensajem de aprobado

let numero = prompt('Dame un número')
numero = Number(numero)

if (numero >= 5 && numero <= 10) {
    alert('APROBADO')
    console.log('Aprobado');
}

if (numero >= 0 && numero < 5) {
    alert('No hás aprobado :(')
    console.log(`No has aprobado :(`);

}


// Si es mayor que 5 aprobado su no suspenso
if (numero >= 5 && numero <= 10) {
    alert('¡APROBADO!')
    console.log('Aprobado');

} else {
    alert('No aprobado :(')
    console.log('No aprobado :(');

}