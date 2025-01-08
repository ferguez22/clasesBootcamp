console.log('Hello world');


const listaEstudiantes = [
    {
        id: 1,
        nombre: 'Rosa Romero',
        edad: 23,
        notaMedia: 6
    },
    {
        id: 2,
        nombre: 'Manuel Martín',
        edad: 45,
        notaMedia: 4
    },
    {
        id: 3,
        nombre: 'Inés Martínez',
        edad: 34,
        notaMedia: 8
    },
    {
        id: 4,
        nombre: 'Roberto Gómez',
        edad: 54,
        notaMedia: 4.5
    }
];

// Visualizar la edad de Inés
console.log(listaEstudiantes[2].nombre);
console.log(listaEstudiantes[2].edad);

// Visualizar la edad de todos los estudiantes
for (let estudiante of listaEstudiantes) {
    console.log(`El estudiante ${estudiante.nombre} tiene ${estudiante.edad}`);
}

// Una función que filtre los estudiantes por Aprobados

// ¿Que tengo que hacer ?
// Recibe como parametro la lista de estudiantes por aprobados
// Retorna una nueva lista con los que tengan nota media mayor que 5

function aprobados(lista) {
    const listaFiltrada = [];
    for (let estudiante of lista) {  // IMPORTANTE SABER RECORRER EL ARRAY
        if (estudiante.notaMedia >= 5) {
            listaFiltrada[listaFiltrada.length] = estudiante;
            // listaFiltrada.push(estudiante)
        }
    }
    return listaFiltrada;
}

function pintarEstudiante(estudiante) {
    return `
    <article>
        <h2>${estudiante.nombre}</h2>
        <p>${estudiante.edad}</p>
        <p>${estudiante.notaMedia}</p>
    </article >
    <hr>`
}

document.write(pintarEstudiante(listaEstudiantes[0]))
document.write(pintarEstudiante(listaEstudiantes[1]))
document.write(pintarEstudiante(listaEstudiantes[2]))
document.write(pintarEstudiante(listaEstudiantes[3]))