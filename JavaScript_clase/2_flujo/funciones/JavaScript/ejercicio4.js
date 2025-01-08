
// Pintar un tablero de ajedrez
//  - Pintar una única casilla √
//  - Pintar una fila entera √
//  - Pintar todo el tablero

function pintarCasilla(color, medida) {
    return `<div style="background-color: ${color}; width:${medida}px; height:${medida}px;" ></div ><br>`
}
document.write(pintarCasilla('black', 100))
console.log('-------');
document.write('<hr>')
document.write('<br>')


function pintarFila(numCasillas, medida, colorPar, colorImpar) {
    let fila = '<div style="display: flex;">'
    for (let i = 0; i < numCasillas; i++) {
        if (i % 2 === 0) {
            fila = fila + pintarCasilla(colorPar, medida)
        } else
            fila = fila + pintarCasilla(colorImpar, medida)
    }
    fila = fila + '</div>'
    return fila
}
document.write(pintarFila(8, 90, 'black', '#c9c9c9'))
document.write('<br>')
document.write('<hr>')
document.write('<br>')


function pintarTablero(numCasillas, medida) {
    tablero = '<div>'
    for (let i = 0; i <= numCasillas; i++) {
        const colorPar = (i % 2 === 0) ? '#c9c9c9' : 'black'
        const colorImpar = (i % 2 === 0) ? 'black' : '#c9c9c9'
        tablero = tablero + pintarFila(numCasillas, medida, colorPar, colorImpar)
    }
    tablero = tablero + '</div>'
    document.write(tablero)
}
pintarTablero(7, 70)