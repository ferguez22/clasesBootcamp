
// Recuperar imagen

const imagenes = [
    { url: './img/photo.jpg', title: 'fotografa' },
    { url: './img/salad.jpg', title: 'Ensalada' },
    { url: './img/skaterboy.jpg', title: 'Skater' }
]

const img = document.querySelector('figure img')
const figcaption = document.querySelector('figure figcaption')
img.src = imagenes[2].url

let contador = 0
const interval = setInterval(() => {
    img.src = imagenes[contador].url
    figcaption.textContent = imagenes[contador].title
    img.alt = imagenes[contador].title
    contador++
    if (contador === imagenes.length) {
        contador = 0
    }
}, 5000);

function stop() {
    clearInterval(interval)
}

//////////////////////////////////////////////////
