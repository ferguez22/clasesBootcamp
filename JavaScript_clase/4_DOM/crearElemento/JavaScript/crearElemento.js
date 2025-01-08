
//      CREAR ELEMENTOS     //
// Necesito dentro del UL para cada elemento del array generar un li

const items = ['Home', 'Contacto', 'Proyecto', 'Sobre Nosotros']
const ul = document.querySelector('.menu')

// for (let item of items) {
//     ul.innerHTML += `<li>${item}</li>`
// }

for (let item of items) {
    const li = document.createElement('li')
    const a = document.createElement('a')

    a.textContent = item.toUpperCase()
    a.href = `${item.toLowerCase()}.html`
    a.style.color = 'black'
    a.style.textDecoration = 'none'

    ul.appendChild(li) // Meter <li></Li> dentro de <ul></ul>
    li.appendChild(a) // Y aquí meter <a></a> dentro de <li></li>
    // append - Nos permite insertar N cantoad de hijos
}
