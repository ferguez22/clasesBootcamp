
// Pedir por prompt un color, un alto en px y un ancho en px
// <div style="background-color: XXXXXX; width: XXXXXX; height: XXXXXX;"></div>
// Recuperar los valores a traves del prompt


const color = prompt('Dame un color en inglés')
const altura = prompt('Dame una altura en pixeles')
const ancho = prompt('Dame un ancho en pixeles')

const elemento = `<div style="background-color: ${color}; width: ${ancho}px; height: ${altura}px;"></div>`

document.write(elemento)