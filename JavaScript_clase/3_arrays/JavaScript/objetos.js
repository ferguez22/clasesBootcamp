
/// OBJETOS \\\

const producto = { // PRODUCTO Es el array
    nombre: 'iPhone 15 Pro Max',
    precio: 1289.99,
    stock: 100,
    disponible: true
}
// Nombre es igual a CLAVE de un array y su
// contenido son los VALORES pueden ser string, boolano o numero
console.log(producto)


// Acceso a los valores
console.log(producto['precio'])
console.log(producto.nombre)

// Modificar valores
producto.precio = 1150
producto.codigo = 'AFFA560'

console.log(producto.precio)

console.log(producto);

// For in
for (let clave in producto) {
    console.log(clave, producto[clave]);

}






