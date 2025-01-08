/*
    Función para pintar un único inmueble
    - Recibe como parámetro el inmueble y construye el HTML correspondiente
    - Un poco de CSS (Opcional)
    - Retorna dicho HTML
        PRUEBA: document.write(pintarInmuebles(inmuebles[2]))
*/

function pintarInmueble(inmueble) {
    return `
    <div>
        <h2>${inmueble.titulo}</h2>
        <p>${inmueble.ubicacion}</p>
        <p>${inmueble.precio}</p>
        <p>${inmueble.disponible}</p>
    </div>`}

// document.write(pintarInmueble(inmuebles[0]))

/*
    Función para pintar todos los inmuebles.
    - Recibe como parametro una lista de inmuebles y retorna el HTML correspondiente.
    - Dentro utilizamos la función anterior
        PRUEBA:
        document.write(pintarInmuebles(inmuebles))
*/

function pintarInmuebles(lista) {
    let resultado = '<section>'
    for (let inmueble of inmuebles) {
        resultado += pintarInmueble(inmueble)
    }
    resultado = resultado + '</section>'
    return resultado
}

// document.write(pintarInmuebles(inmuebles))


/*
    Función que filtre por precio
    - Recibe como parámetros una lista de inmuebles, un precio minimo y un precio maximo.
    - Retorna un array con los inmuebles que se encuentren en ese rango de precios.

    recorro todos con bucles y voy preguntando quienes tienen las caracteristicas que busco

        PRUEBA:
const filtroPorPrecio= filtrarPorPrecio(inmuebles, 300, 900)
document.write(pintarInmuebles(filtrarPorPrecio))

*/

function filtrarPorPrecio(lista, precioMax, precioMin) {
    const filtrado = []
    for (let inmueble of lista) {
        if (inmueble.precio >= precioMin && inmueble.precio <= precioMax) {
            filtrado.push(inmueble)
        }
    }
    return filtrado
}

const filtroPorPrecio = filtrarPorPrecio(inmuebles, 100, 100)
// document.write(pintarInmuebles(filtroPorPrecio))


/*
    Funcion que filtre por disponibilidad
    - Recibe por parametros una lista de inmuebles
    - Retorna aquellos que estén disponibles
*/

function filtroDisponible(lista) {
    return lista.filter(inmueble => inmueble.disponible)
}

const disponibles = filtroDisponible(inmuebles)
// document.write(pintarInmuebles(disponibles))