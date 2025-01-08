
function sacar() {
    if (opcion === 'sacar') {
        const numero = Number(prompt('¿Cuánto dinero quieres sacar?'));
        if (isNaN(numero) || numero > cantidad) {
            alert('El número introducido no es correcto');
        } else {
            cantidad = cantidad - numero;
            alert(`Ha retirado ${numero}€ , su saldo restante es ${cantidad}€`);

        }
    }
}
function ingresar() {
    if (opcion === 'ingresar') {
        const numero = Number(prompt('¿Cuánto dinero quieres ingresar?'));
        if (isNaN(numero)) {
            alert('El número introducido no es correcto');
        } else {
            cantidad = cantidad + numero;
            alert(`Ha ingresado ${numero}€ , su saldo actual es ${cantidad}€`);

        }
    }
}
function consultar() {
    if (opcion === 'consultar') {
        alert(`Su saldo disponible es ${cantidad}€`);
    }
}

let opcion = '';
let cantidad = 500;

do {
    opcion = prompt('¿Qué acción quieres hacer? sacar, ingresar, consultar, salir');

    if (opcion === 'sacar') {
        sacar()
    } else if (opcion === 'ingresar') {
        ingresar()
    } else if (opcion === 'consultar') {
        consultar()
    } else if (opcion === 'salir') {
        alert('Nos vemos');
    } else {
        alert('Opción no disponible');
    }

} while (opcion !== 'salir')


