
document.addEventListener('keydown', capturarTecla)

const objeto = document.querySelector('.objeto')


let avanceX = 0
let avanceY = 0

function capturarTecla(event) {

    switch (event.keyCode) {
        case 37: // Izquierda
            moverX()
            console.log('Izquierda');

            break
        case 38: // Arriba
            moverY(-30)
            console.log('Arriba');

            break
        case 39: // Derecha
            moverX()
            console.log('Derecha');

            break
        case 40: // Abajo
            moverY()
            console.log('Abajo');

            break
    }
}

function moverX(movimiento = 30) {
    avanceX += movimiento
    objeto.style.left = `${avanceX}px`
}

function moverY(movimiento = 30) {
    avanceY += movimiento
    objeto.style.top = `${avanceY}px`
}


//TODO: Como hago para que no se salga de los límites