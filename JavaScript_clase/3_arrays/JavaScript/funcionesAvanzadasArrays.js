
////// MAP
// - Nos permite realizar la misma acción sobre todos los elementos de un array
// - NO modifica el array orignal
// - 

const numeros = [9, 1, 8, 2, 7, 3, 6, 4, 5]

// numeros.map(function () { })
const dobles = numeros.map((numero) => {
    return numero * 2
})
// Lo que retornemos dentro de esta función se inserta en el array resultante

console.log(dobles);

//////////////////////////////////
// Array con todas las ciudades en minúsculas

const ciudades = ['MaDRid', 'bArcELoNa', 'VaLLAdolid', 'CoruÑA', 'ZaRAgoZA']

const ciudadesMin = ciudades.map((ciudad) => ciudad.toLowerCase())
console.log(ciudadesMin);

// Intentar usar arrow function y simplificarla
//////////////////////////////////


// ARRAY con todos los nombres de alumnos
// ['Juan Antonio', 'Lucia', 'Maria', 'Rodrigo', 'Pepe']

const alumnos = [
    { nombre: 'Juan Antonio', edad: 41 },
    { nombre: 'Lucia', edad: 26 },
    { nombre: 'Maria', edad: 54 },
    { nombre: 'Rodrigo', edad: 27 },
    { nombre: 'Pepe', edad: 12 },
]

console.log(alumnos)
const nombres = alumnos.map((alumno) => alumno.nombre)
console.log(nombres)

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


////// FILTER
// - Retorna un array que con todos aquellos elementos que cumplan con cierta condición
// - La estructura es IGUAL que MAP
// - SI queremos que el elemento pase el filtro RETORNAMOS TRUE, si no queremos, RETORNAMOS FALSE.

// ARRAY con todos los alumnos mayores de 30 años

const filtrados = alumnos.filter((alumno) => {
    // if (alumno.edad >= 30) {
    //     return true
    // } else {
    //     false
    // }
    return alumno.edad >= 30
})
console.log(filtrados);

//Version super super simplificada
const filtradosV2 = alumnos.filter((alumno) => alumno.edad >= 30)
console.log(filtrados);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

////// FIND
// - Retorna el primer elemento del array que cumpla una condición
// - Denytro de la función RETORNAMOS TRUE si hemos encontrado el elemento.
// FALSE si no lo hemos encontrado

// Recupera el primer alumno que tenga más de 30 años

const alumnoBuscado = alumnos.find((alumno) => alumno.edad > 41)
console.log(alumnoBuscado);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

////// Función buscaLetras que FILTRE todos aquellos alumnos que contengan ciertas letras en su nombre.
// buscaLetras(alumnoas, 'a')
// Retorna un ARRAY
// Podemos usar find, filter, map, includes, splice

console.log('////////////////////////////////////');

function buscaLetras(lista, letras) {
    const filtrados = lista.filter((alumno) => {
        return alumno.nombre.includes(letras)
    })
    return filtrados
}
console.log(buscaLetras(alumnos, 'a'))

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

////// FOREACH
// - Recorre cada una de las posiciones del array original
// Mostrar por consola todos los nombres de los alumnos

alumnos.forEach((alumno) => {
    console.log(alumno.nombre)
})

