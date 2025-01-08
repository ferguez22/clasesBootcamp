//
// Pintar N cuadrados, siendo N un número requerido al usuario
// 
// 1. Pedir el número por prompt. Tranformar el número.         √
// 2. Bucle que se ejecute tantas veces como marque el número.  √
// 3. Dentro del bucle pintar el cuadrado                       √
//
//
// - Cada cuadrado debe tener como
//   texto el número de orden que ocupa, empezando en 1
// - Si el cuadrado es de orden par, color
//   de fondo de dodgerblue. Si es impar, color de fondo teal.
//

let numero = Number(prompt('Escribe el número de cuadrados que quieras ver en pantalla'))

for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<div class="par">${i}</div>`)
    } else {
        console.log(i);
        document.write(`<div class="impar">${i}</div>`)
    }
}
