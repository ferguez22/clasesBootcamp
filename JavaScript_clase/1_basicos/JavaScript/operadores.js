// Operador de Asignación
const numA = 34
const numB = 29

// Operadores matemáticos

console.log('Número A es', numA);
console.log('Número B es', numB);

console.log('-------');

console.log('La suma es', numA + numB)
console.log('La resta es', numA - numB)
console.log('La multiplicación es', numA * numB)
console.log('La division es', numA / numB)
console.log('El módulo - resto es', numA % numB)
console.log('La potencia es', numA ** numB)

// Operadores de comparaciín
// El resultado de estas operaciones siempre es o TRUE o FALSE
console.log('mayor que', numA > numB);

// Negación (SOLO PARA BOOLEANOS
const activo = true
console.log(!activo);

// Igualdad - Desigualdad
const num1 = 20
const num2 = 20
const num3 = '20'

console.log('Iguales ==', num1 == num2); // Compara el valor más no el tipo de valor
console.log('Iguales ===', num1 === num3); // Compara el valor y el tipo (Si es string, caracteres, number...)
// Casi siempre, para comparaciones de igualdad, usamos triple igual ===

// Operadores logicos
//  && - AND  ---  || - OR
//  Estos operadores se aplican sobre valores boolean y su resultado es otro boolean

const marca = 'nike'
const precio = 200

const miMarca = prompt('Dime una marca')
const miPrecio = Number(prompt('Dime un precio'))

console.log('¿Compro?', miMarca === marca && miPrecio <= precio);

console.log('¿Compro?', miMarca === marca || miPrecio <= precio);
