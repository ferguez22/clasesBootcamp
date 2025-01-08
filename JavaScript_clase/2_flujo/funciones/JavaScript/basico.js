//
// Encapsulan ciertas sentencias de código para poder ejecutarlas cuando sea necesario.
//
// - Dos partes:
//   - DEFINICIÓN: Implementamos qué es lo que hace la función.
//   - EJECUCIÓN: Lanzamos la acción de la función.


//DEFINCIÓN
function saludar() {
    console.log('----------');
    console.log('Hola mundo');
    console.log('----------');
}
//EJECUCIÓN
saludar()
saludar()
saludar()

////////////////////////////////

//DEFINICIÓN
function saludarNombre(nombre) {
    console.log(`Hola ${nombre}`);
}
//EJECUCIÓN
saludarNombre('Irene')
saludarNombre('Marcos')
saludarNombre('Laura')

const usuario = 'Roberto'
saludarNombre(usuario)

////////////////////////////////

// Función que recibe 2 números y muestra por consola el resultado de la suma
//DEFINICIÓN
function sumar(num1, num2) {
    console.log('----------');
    console.log(`El resultado de sumar ${num1} + ${num2} es ${num1 + num2}`);
}
//EJECUCIÓN
sumar(100, 5)
sumar(4, 5)

const numero1 = 2
const numero2 = 5
sumar(numero1, numero2)
sumar(numero1 * numero2, 10)

// const a = Number(prompt('Dame un numero'))
// const b = Number(prompt('Dame otro'))

// sumar(a, b)

////////////////////////////////

// Función que calcule el factorial de un número

//DEFINICIÓN
function factorial(numero) {
    let resultado = 1

    for (let i = numero; i >= 1; i--) {
        resultado = resultado * i
    }
    console.log('----------');
    console.log(`El factorial de ${numero} es ${resultado}`);
}

//EJECUCIÓN
factorial(5)
factorial(200)
factorial(10)