
const animales = ['panda', 'perro', 'gato', 'langosta']

// PUSH
// Agrega un elemento en la última posición

let nuevaLongitud = animales.push('caballo')
animales.push('mono', 'tortuga', 'oso')

console.log(animales);

// POP
// Eliminar ultimo elemento de un array

animales.pop()
console.log(animales)

// UNSHIFT = Agrega elementps al inicio del array
// SHIFT   = Elimina el primer elemento del array

animales.unshift('vaca')
console.log(animales);

animales.shift('')
console.log(animales);

// AT
// Recuperar un elemento situado e un índice concreto

console.log(animales[4])
console.log(animales.at(4));

// JOIN 
// Añade un string a tu array SE TIENE QUE GUARDAR EN UNA VARIABLE

const cadena = animales.join(' 🤡 ')
console.log(cadena);

// SPLIT
// Corta un String a partir de un caracter

const texto = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
const palabras = texto.split(' ')
console.log(palabras);

// SPLICE = Borrar un item de un array

console.log(animales);

animales.splice(2, 2)
console.log(animales);

// SLICE
// Retorna un "trozo" del array original
// NO modifica el array original

const animalSeleccion = animales.slice(2, 4)
console.log(animalSeleccion, animales);

// REVERSE

animales.reverse()
console.log(animales);

////////////////////////////////////////
// Función que reciba una frase por parámetro y le de la vuelta

miFrase = ('En un lugar de la mancha')

console.log(miFrase);

function vuelta(frase) {
    let nuevaFrase = frase.split(' ')
    nuevaFrase = nuevaFrase.reverse()
    return nuevaFrase.join(' ')
}

console.log(vuelta(miFrase))
////////////////////////////////////////

// STRING vs ARRAY

const mensaje = 'Este es mi mensaje'
console.log(mensaje.length);
console.log(mensaje[9]);

console.log(mensaje.includes('ro'))
console.log(mensaje.includes('je'))