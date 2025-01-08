// Calcular la media de una lsita indeterminada de números
// ARRAYs - Lista de elementos ordenada
// Rango de valores van entre el 0 y el número de elementos menos 1 

function media(...numeros) {
    // console.log(numeros.length);
    // console.log(numeros[3]);

    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i]
    }
    return suma / numeros.length
}

console.log(media(5, 22, 93, 34))
console.log(media(21, 6, 74, 23, 33))
console.log(media(10, 20))

// Parametros opcionales

function dividr(dividiendo, divisor = 2) {
    return dividiendo / divisor
}

const resultado = (dividr(118, 10));
console.log(resultado);

// EJEMPLO


