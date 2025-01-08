
//indexOf : Le coloco el elemento a buscar y ya
const animales = ['león', 'gato', 'perro', 'periquito']
const pos = animales.indexOf('perro')
console.log(pos);

animales.splice(pos, 1)
console.log(animales);


// findIndex : Sirve para busquedas más complejas
const alumnos = [
    { nombre: 'Juan Antonio', edad: 41 },
    { nombre: 'Lucia', edad: 26 },
    { nombre: 'Maria', edad: 54 },
    { nombre: 'Rodrigo', edad: 27 },
    { nombre: 'Pepe', edad: 12 },
]
const posPepe = alumnos.findIndex((alumno) => {
    return alumno.nombre === 'Pepe'
})
console.log(posPepe);

alumnos.splice(posPepe, 1)
console.log(alumnos);