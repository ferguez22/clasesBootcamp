//
// Pedir por Prompt si queremos
// pintar un circulo o un cuadrado
//
// Circulo  - border-radius = 50%
// Cuadrado - border-radius = 0%
//
// 1. Pedir el tipo de figura  ->  √
// 2. Decidir cual es le radio en función del tipo de figura  -> √
// 3. Pintar la figura   -> √
//
// Pedir el color, el alto y el ancho


// const forma = prompt('Quieres dibujar un circulo o un cuadrado?')
// let radio

// if (forma === 'circulo') {
//     radio = 50
// } else {
//     radio = 0
// }

// console.log(radio);


// Operador ternario: Asigna el valor a una variable en función de una condicion.
// Sintaxis: const variable = (Condición) ? valor si la condición es true : valor si condición es false


// const radio = (forma === 'circulo') ? 50 : 0


// const elemento = `<div style="background-color: black; width:200px; height:200px; border-radius: ${radio}%"></div>`

// document.write(elemento)



//   Ejercicio

const forma = prompt('Quieres hacer un cuadrado o un circulo?')
const color = prompt('De que color?')
const alto = Number(prompt('Cuantos pixeles de alto?'))
const ancho = Number(prompt('Cuantos pixeles de ancho'))

if (forma === 'circulo') {
    radio = 50
} else {
    radio = 0
}

const elemento = `<div style="background-color: ${color}; width: ${ancho}px; height: ${alto}px; border-radius: ${radio}%;"></div>`

document.write(elemento)
