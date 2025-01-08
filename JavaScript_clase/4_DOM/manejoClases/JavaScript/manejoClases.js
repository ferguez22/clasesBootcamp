
const cuadrado = document.querySelector('.cuadrado')

// const clases = cuadrado.getAttribute('class')
// cuadrado.setAttribute('class', clases + ' azul')

// const clases = cuadrado.className
// cuadrado.className += ' azul'

// classList
console.log(cuadrado.classList.item(0))
cuadrado.classList.remove('azul')
cuadrado.classList.add('verde')
cuadrado.classList.replace('verde', 'azul')

function changeSize() {
    cuadrado.classList.toggle('grande')
}