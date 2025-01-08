
// Crear una función que reciba como parametro un número y retorne un array con tantas posiciones como marque el parametro de entrada
// Y cada una de las posiciones del array debe estar rellena de un número aleatorio entre 0 y 100
//
// llenarArray(5)
// [1,2,3,4,5]
// math.random()- 0 y 100


// Tengo que

// 1- Recibir el número de posiciones.
// 2- Crear un array vacío.
// 3- Usar un bucle para generar y agregar números aleatorios al array.
// 4- Devolver el array.


// Bucle para llenar al array x veces
// Creo el array vacio

function llenarArray(x) {
    let numeros = []
    for (let i = 0; i < x; i++) {
        numeros.push(Math.ceil(Math.random() * 100))
    }
    return numeros
}
console.log(llenarArray(Number(prompt('Dime un número'))));

// Los numeros random se generan asi
const numAleatorio = Math.ceil(Math.random() * 100)
console.log(numAleatorio);


// SOLUCIÓN de MARIO

function llenarArray2(numero) {
    const numeros = []

    for (let i = 0; i <= numero; i++) {
        const numAleatorio = Math.ceil(Math.random() * 100)
        numeros[i] = numAleatorio
    }
    return numeros
}

console.log(llenarArray2(5));