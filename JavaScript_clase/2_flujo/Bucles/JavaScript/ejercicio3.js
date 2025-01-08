//
// Script para gestión de dinero
// - Inicialmente vamos a tener una cantidad guardada
// - Luego lanzamos la pregunta para saber que acción vamos a realizar.
//    - Sacar Dinero       (sacar)
//    - Ingresar Dinero    (ingresar)
//    - Consultar Dinero   (consultar)
//    - Salir              (salir)
// 
//  - SIEMPRE lanzamos la pregunta excepto si se elige la opción de salir.
//


// Evaluar la opción
// 1- Sacar     -> Preguntar cuanto dinero quieres sacar y restarlo de la cantidad
// 2- Ingresar  -> Preguntar cuando ingresamos y sumarlo a la cantidad
// 3- Consultar -> Mostramos la cantidads


let option = ''
let cantidad = 500

do {
    option = prompt('Que acción desea realizar? •sacar •ingresar •consultar •salir ')

    if (option === 'sacar') {
        sacar = Number(prompt('¿Cuanto dinero quieres sacar?'))
        cantidad = cantidad - sacar
        alert(`Has retirado: ${sacar}€, Su saldo restante es: ${cantidad}€`)

    } else if (option === 'ingresar') {
        ingresar = Number(prompt('¿Cuanto dinero quieres ingresar?'))
        cantidad = cantidad + ingresar
        alert(`Has ingresado: ${ingresar}€, y su saldo actual es: ${cantidad}€`)

    } else if (option === 'consultar') {
        alert(`Tienes un saldo de: ${cantidad}€`)

    } else {
        alert('Seleccione una opción de la lista')
    }

} while (option !== 'salir');

// SE PUEDE MEJORAR //

