//
// Función máximo:
// - Recibe como parámetro dos números
// - EL objetivo es retornar qué número es el mayor de los dos
// - Si son iguales retornamos 0
//


// Hecho por mi
// function maximo(numA, numB) {
//     let resultado
//     if (numA > numB) {
//         resultado = numA
//         console.log(`El número ${numA} es mayor que ${numB}`)
//         return numA
//     } else if (numA < numB) {
//         resultado = numB
//         console.log(`El número ${numB} es mayor que ${numA}`)
//         return numB
//     } else if (numA === numB)
//         resultado = 0
//     console.log(`${numA} es igual a ${numB}`);
// 
// }

// Hecho por Mario
// function maximo(numA, numB) {
//     if (numA > numB) {
//         return numA
//     } else if (numA < numB) {
//         return numB
//     } return 0
// }
// 
// const max = maximo(40, 40)
// console.log(max);

////////////////////////////////

// // Función esDivisible:
// - Recibe como parámetro dos números
//     - Retorna true si el primer número es divisible por el sgundo.
//   - Retorna false si pasa lo contrario.

// Mi version
function esDivisible(numA, numB) {
    if (numA % numB === 0) {
        return true
    } else
        return false
}
const divisible = esDivisible(10, 5)
// console.log(divisible);

// function esDivisibleV2(numero1, numero2) {
//     return (numA % numB === 0) ? true : false
// }

// function esDivisibleV3(numero1, numero2) {
//     return numA % numB === 0
// }

////////////////////////////////

// Función es primo
//     - Recibe como parámetro un número
//     - Me dice si es primo o no
//     - Hay usar la función es divisible











function primo(numA) {
    for (let i = 2; i < numA; i++) {
        if (esDivisible(numA, i)) {
            return false
        }
    }
    return true;
}

const resultado = primo(7)
console.log(resultado);





// OGANIZAR CODIGO CON EL DE MARIO
// AL LLEGAR A CASA