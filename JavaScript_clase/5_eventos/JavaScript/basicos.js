
function pulsarBoton(button) {
    button.style.border = '5px solid black'
}

function ratonEntra(div) {
    div.style.backgroundColor = 'tomato'
}

function ratonSale(div) {
    div.style.backgroundColor = 'steelblue'
}

// Eventos con listener

const btnListener = document.getElementById('btnListener')

btnListener.addEventListener('click', manejarClick)
function manejarClick(event) {
    console.log('Se ha pulsado este boton');
    event.target.style.marginLeft = '200px'
}

// Cambiar el color de fondeo del body en función del botoón pulsado

const lis = document.querySelectorAll('.menu li')

for (let li of lis) {
    li.addEventListener('click', cambiarColor)
    li.addEventListener('mouseenter', (event) => {
        event.target.style.fontSize = '30px'
    })
    li.addEventListener('mouseleave', (event) => {
        event.target.style.fontSize = '16px'
    })
}

function cambiarColor(event) {
    console.log(event.target.id);
    document.body.style.backgroundColor = event.target.id
}
