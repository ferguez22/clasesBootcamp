// 
//      Factorial
// - Pedir un número por prompt
// 
// N=5
// 
//
// - Realizar el cálculo de todos los números implicados y mostrar el resultado

const numero = Number(prompt('Dame un número'))

let resultado = 1

if (Number(numero)) {
    for (let i = numero; i >= 1; i--) {
        resultado = resultado * i
    }
    console.log(resultado);
} else {
    alert('Vuelve a intarlo')
}
// Opcion que yo desarrolle,funciona pero no es correcta.


if (isNaN(numero)) {
    alert('Vuelve a intarlo')
} else {
    for (let i = numero; i >= 1; i--) {
        resultado = resultado * i
    }
    console.log(resultado);
}

// Forma correcta a traves de la función isNaN