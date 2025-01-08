// Nos permiten repetir sentencias de código de manera controlada

// Bucle for que cuenta de 1 a 10

//
// Sintaxis
// for (INICIALIZACIÓN; CONDICIÓN DE SALIDA; MODIFICACIÓN){
//      sentencias a ejecutar dentro del bucle
//    }
// 

// --------------------------

//  Bucle For que cuenta de 1 a 10

// for (let i = 1; i <= 10; i = i + 1) {
//     console.log(i);
// }
// 
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// --------------------------

// Mostrar los números del 1 al 1000. Solo quiero los números pares.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}