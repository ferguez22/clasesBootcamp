const contactos = []

//    Formularios    //
const form = document.getElementById('form')

form.addEventListener('submit', getDataForm)

function getDataForm(event) {
    event.preventDefault()
    const obj = {
        nombre: event.target.nombre.value,
        email: event.target.email.value
    }
    contactos.push(obj)

    const contactHtml = pintarContactos(contactos)
    document.querySelector('.divcontacto').innerHTML = ''
    document.querySelector('.divcontacto').appendChild(contactHtml)
    event.target.reset()
}
/*

Crear article con 2 parrafos y cada uno con el valor que queremos
FUNCION para pintar todos los contactos
    - Recibe por parámetro una lista de contactos
    - Retorna el HTML con la lista de todos los contactos

    <artcile>
        <h3>Nombre</h3>
        <p>Email</p>
    </article>

    PRUEBA: Cada vez que enviemos el formulario hay que repintar todos los contactos

*/

const listaContactos = document.querySelector('.listacontactos')

function pintarContactos(lista) {
    const section = document.createElement('section');
    for (let contacto of lista) {
        const article = document.createElement('article')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')

        h3.textContent = contacto.nombre
        p.textContent = contacto.email

        article.appendChild(h3)
        article.appendChild(p)
        section.appendChild(article)
    }
    return section
}





