// console.log(), alert, prompt

const nombre = 'FeRnAndO RodRigUeZ' // Tipo STRING
console.log(nombre)
console.log('----------------')

// toLowerCase, toUpperCase
const minusculas = nombre.toLowerCase()
const mayusculas = nombre.toUpperCase()


console.log(minusculas)
console.log(mayusculas)

// Conversiones numéricas
const numeroString = '23.59'

// • Transformo • a número
const numero = Number(numeroString);
console.log(numero);
//• Transformo•a número (solo la parte entera)
const entero = parseInt(numeroString);
console.log(entero); // 23

// Math
console.log(Math.PI);
console.log(Math.abs(-58.96)); // Valor absoluto de un número
console.log(Math.ceil(4.23)); // Redondea los decimales al mayor
console.log(Math.floor(4.23)); // Redondea los decimales al menor

const numero2 = 4.671928893
// console.log(numero2.toFixed(3));
const numero3 = Number(numero2.toFixed(3))

console.log(typeof (numero3), numero3);

// RANDOM
const numAleatorio = Math.ceil(Math.random() * 100)
console.log(numAleatorio);


// Maximo y Minimo
console.log(Math.max(2, 56, 32, 89, 134, 4)); // Maximo 134
console.log(Math.min(2, 56, 32, 89, 134, 4)); // Minimo 4
