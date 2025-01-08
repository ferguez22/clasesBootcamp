function eliminarDiacriticos(texto) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(' ', '_')
        .toLowerCase()
}

/**
 * 
  Crea y devuelve un elemento HTML <article> que representa la información de un libro.

 El artículo contiene los siguientes elementos:
  - Un título <h2> con el título del libro.
  - Un subtítulo <h3> con el autor del libro.
  - Un párrafo <p> con la descripción del libro.
  - Un párrafo <p> con la categoría del libro.
 
  @param {Object} libro - Objeto que representa un libro.
  @param {string} libro.titulo - El título del libro.
  @param {string} libro.autor - El autor del libro.
  @param {string} libro.descripcion - Una breve descripción del libro.
  @param {string} libro.categoria - La categoría o género del libro.
  @param {boolean} libro.disponible - Indica si el libro está disponible para préstamo o no.
 
  @returns {HTMLElement} Un elemento HTML <article> que contiene la información del libro.

  @example
  const libro = {
    titulo: "1984",
    autor: "George Orwell",
    descripcion: "Una novela distópica que trata sobre un régimen totalitario.",
    categoria: "Ciencia ficción",
   disponible: true
 };
 
  const article = pintarLibro(libro);
  document.body.appendChild(article);

 */
function pintarLibro(libro) {
    // Creamos contantes para cada etiqueta HTML que necesitemos
    const article = document.createElement('article')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    const pDescripcion = document.createElement('p')
    const pCategoria = document.createElement('p')

    // Agregamos el valor a las constantes que tienen las etiquetas
    h2.textContent = libro.titulo
    h3.textContent = libro.autor
    pDescripcion.textContent = libro.descripcion
    pCategoria.textContent = libro.categoria

    //Agregamos al article una nueva clase que sea igual a la categoria del libro
    article.classList.add(eliminarDiacriticos(libro.categoria))

    // - Si el libro está disponible agrego la clase disponible
    //   al H2. Si no lo está no lo agrego
    if (libro.disponible === true) {
        article.classList.add('disponible')
    }

    // Añadimos al article las constantes que tienen las etiquetas HTML
    article.append(h2, h3, pDescripcion, pCategoria)
    return article
}

/////////////////////////////////////////

// Esto es lo que quiero hacer
//  <div>
//      <article></article>
//      <article></article>
//      <article></article>
//  </div>
//

function pintarTodosLibros(libros) {
    const div = document.createElement('div')
    for (let libro of libros) {
        const article = pintarLibro(libro)
        div.appendChild(article)
    }
    return div
}
/////////////////////////////////////////

// Función que filtre por categoría
//  - Recibe como parámetro la caregoria
//  - La respuesta de la función será el array filtrado

function filtrarPorCategoria(lista, categoria) {
    const filtrados = []

    for (let libro of lista) {
        if (libro.categoria === categoria) {
            filtrados.push(libro)
        }
    }
    return filtrados
}

function filtrarPorCategoriaV2(lista, categoria) {
    return lista.filter(libro => libro.categoria === categoria)
}

/////////////////////////////////////////

const categoria = prompt('¿Que categoria quieres?')

const librosFiltrados = filtrarPorCategoriaV2(libros, categoria)
const divLibros = pintarTodosLibros(libros)
const section = document.querySelector('section')
section.appendChild(divLibros)