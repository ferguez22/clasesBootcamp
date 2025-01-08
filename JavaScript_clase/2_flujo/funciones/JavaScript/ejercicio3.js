//
// Función tablaMultiplicar
//     - Recibe un parámetro y tiene que mostrar por consola la tabla de multiplicar del número que recibe
//     - Si no reciob parámetro me muestra la tabla del 2
//     
//      • Formato: 5x4 = 20
//     5 x 1 = 5
//     5 x 2 = 10
//     5 x 3 = 15
//     5 x 4 = 20
//     5 x 5 = 25
//

function tablaMultiplicar(numA = 2) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numA} x ${i} = ${numA * i}`);
    }
}
console.log(tablaMultiplicar(4))
console.log('--------')

//
// FUncion arbolito
// - Recibe como parámetro un número y pinta la siguiente estructura
//  *
//  **
//  *** 
//  ****
//  *****
//  ******
//

function arbolito(num = 5) {
    let linea = ''
    for (let i = 1; i <= num; i++) {
        linea += '*'
        //linea = linea + '*'
        console.log(linea);
    }
}
console.log(arbolito(20))