
//     Data Attribute     //

const lis = document.querySelectorAll('ul li')
for (let li of lis) {
    li.addEventListener('click', (event) => {
        console.log(event.target.dataset.color);
        document.body.style.backgroundColor = event.target.dataset.color
    })
}

//////////////////////////
// Crear un menú a partir de un array

const ul = document.querySelector('.menu')
const items = [
    { label: 'Purple', color: 'purple' },
    { label: 'Indigo', color: 'indigo' },
    { label: 'Dodger Blue', color: 'dodgerblue' },
    { label: 'Gray', color: 'Gray' },
    { label: 'Light Green', color: 'lightgreen' },
]

for (item of items) {
    const li = document.createElement('li')
    // Agregar el texto del li
    li.textContent = item.label

    // Agregar su propiedad data-color
    li.dataset.color = item.color

    // Caputurar el Evento click
    li.addEventListener('click', cambiarColor)
    ul.appendChild(li)
}

function cambiarColor(event) {
    document.body.style.backgroundColor = event.target.dataset.color
}






