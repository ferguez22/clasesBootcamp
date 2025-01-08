

const numero = Number(prompt('Dime tu nota'))


if (numero >= 0 && numero < 5) {
    alert('No hás aprobado 🥺')
    console.log(`No has aprobado 🥺`)
} else if (numero >= 5 && numero < 6) {
    alert('Suficiente 😯')
    console.log(`Suficiente 😯`)
} else if (numero >= 6 && numero < 7) {
    alert('Bien 😊')
    console.log(`Bien 😊`)
} else if (numero >= 7 && numero < 9) {
    alert('Notable 😃')
    console.log(`Notable 😃`)
} else if (numero >= 9 && numero < 10) {
    alert('Sobresaliente 🥳')
    console.log(`Sobresaliente 🥳`)
} else {
    alert('Valor no admitido, introduzca un valor del 0 al 10')
    console.log('Valor no admitido, introduzca un valor del 0 al 10');
}





