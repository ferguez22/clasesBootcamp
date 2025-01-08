//
// Como se crea un array
//

const letras = []   // Array vacio

const numeros = new Array()

const empleados = ['Fernando', 'Mario', 'Alvaro', 'Cristina', 'Carlos', 'Ruben']
// Son listas de elementos del mismo tipo

console.log(empleados.length);  // 4
console.log(empleados[2]);       // Alvaro
empleados[6] = 'Tomás'
empleados[7] = 'Hugo'

console.log(empleados);

//
// Función que a partir de un array de strings, pinte una lista no ordenada
//

function pintarLista(lista) {
    let resultado = '<ul>'
    for (let i = 0; i < lista.length; i++) {
        resultado = resultado + `<li>${lista[i]}</li>`
    }
    resultado = resultado + '</ul>'
    return resultado
}

document.write(pintarLista(empleados))
document.write('<br>')
document.write('<hr>')
document.write('<br>')


// Arrays multidimensionales

const aves = ['aguila', 'loro', 'guamcamayo', 'agapornis']
const felinos = ['leon', 'tigre', 'gato', 'ligre', 'pantera']
const peces = ['salmon', 'trucha', 'carpa']

const zoo = [aves, felinos, peces]
console.log(zoo)
console.log(aves[1])
console.log(zoo[2][1], zoo[0][3])

//
// Mostrar por consola todos los animales del Zoo
//

console.log('------------');
console.log('------------');

function animalesZoo(zoo) {
    for (let i = 0; i < zoo.length; i++) {
        for (let j = 0; j < zoo[i].length; j++) {
            console.log(zoo[i][j]);
        }
    }
} //Es un metodo un poco fastidioso

animalesZoo(zoo)

console.log('------------');
console.log('------------');

for (let felino of felinos) {
    console.log(felino);
}

console.log('------------');
console.log('------------');

for (let especie of zoo) {
    for (let animal of especie) {
        console.log(animal);
    }
}

console.log('------------');
console.log('------------');