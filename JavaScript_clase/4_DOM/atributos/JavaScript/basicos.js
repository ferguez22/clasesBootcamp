
// Recuperar todas las etiquetas a contenidas dentro del menu

const enlaces = document.querySelectorAll('.menu a')
console.log(enlaces[1].href);
enlaces[1].href = ('https://noexiste.com')

for (let enlace of enlaces) {
    enlace.href = 'https://daily.dev'
    enlace.title = 'Daily Dev'
    enlace.target = '_blank'
    enlace.style.textDecoration = 'none'
    enlace.style.backgroundColor = 'lightblue'
    enlace.style.borderRadius = '5px'
}
//////////////////////////////////////////////////

