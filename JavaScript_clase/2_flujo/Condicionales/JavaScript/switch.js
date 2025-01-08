const color = prompt('Dame un color en castellano')

switch (color) {
    case 'rojo':
        alert('red')
        break

    case 'amarillo':
        alert('yellow')

        break
    case 'azul':
        alert('blue')
        break

    case 'verde':
        alert('green')
        break

    default:
        alert('Selecciona un color entre rojo, amarillo, azul o verde.');
}