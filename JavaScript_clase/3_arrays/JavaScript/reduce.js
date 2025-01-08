



/////////////////////////////////////////////

// REDUCE = Te calcula la suma de todos los números dentro de un array
const numeros = [34, 5, 1, 54, 8, 51, 126]

const resultado = numeros.reduce((acumulador, numero) => {
    return acumulador + numero
})
console.log(numeros);
console.log(resultado);

const letras = ['H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
const palabras = letras.reduce((acumulador, letras) => {
    return acumulador + letras
})
console.log(palabras);

/////////////////////////////////////////////

const carrito = [
    { nombre: 'Lápiz verde', precio: 12, cantidad: 3 },
    { nombre: 'Cuaderno', precio: 30, cantidad: 12 },
    { nombre: 'Sacapuntas', precio: 5, cantidad: 6 },
    { nombre: 'Rotulador rojo', precio: 2, cantidad: 3 },
    { nombre: 'Tippex', precio: 45, cantidad: 1 },
]
const carritoReduce = carrito.reduce((acumulador, producto) => {
    return acumulador + (producto.precio * producto.cantidad)
}, 0)

console.log(carritoReduce);

/////////////////////////////////////////////








