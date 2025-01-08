
// Pedimos al usuario por prompt los valores del margin, bacgkround-color, y rotación

const cuadrado = document.querySelector('.cuadrado')

const margin = prompt('Dame el numero de pixeles que quieres que tenga el margin')
const background = prompt('Que color quieres que tenga el cuadro')
const rotacion = prompt('Cuantos grados de rotación quieres que tenga el cuadrado')

cuadrado.setAttribute('style', `margin:${margin}px; background-color:${background}; transform: rotate(${rotacion}deg);`)
////////////////////////////////////////////////////