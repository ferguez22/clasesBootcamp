
const inputNombre = document.getElementById('inputNombre')
const inputPais = document.getElementById('inputPais')
const inputAceptar = document.getElementById('inputAceptar')


// change //
inputNombre.addEventListener('change', (event) => {
    console.log('change', event.target.value)
})

// input //
inputNombre.addEventListener('input', (event) => {
    console.log('input', event.target.value)
    document.querySelector('.nombre').textContent = event.target.value
})

// focus //
inputNombre.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = '#(217, 217, 217)'
})

// blur //
inputNombre.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = 'white'
})

// Capturar el valor del desplegable //
inputPais.addEventListener('change', (event) => {
    console.log(event.target.value);

    if (event.target.value === 'es') {
        document.querySelector('.pais').textContent = '🇪🇸'
    } else if (event.target.value === 'fr') {
        document.querySelector('.pais').textContent = '🇫🇷'
    } else if (event.target.value === 'it') {
        document.querySelector('.pais').textContent = '🇮🇹'
    }
    else if (event.target.value === 'de') {
        document.querySelector('.pais').textContent = '🇩🇪'
    } else {
        document.querySelector('.pais').textContent = ''
    }
})

// change sobre checkbox
inputAceptar.addEventListener('change', (event) => {
    if (event.target.checked) {
        // document.querySelector('form input[type=submit]').classList.remove('d-none');
        // document.querySelector('.btn.btn-info')
        document.querySelector('form input[type=submit]').disabled = false;
    } else {
        // document.querySelector('form input[type=submit]').classList.add('d-none');
        document.querySelector('form input[type=submit]').disabled = true;
    }
});

// TODO: CAPTURAR EL EVENTO SUBMIT DEL FORMULARIO.

// CAPTURAR EL EVENTO SUBMIT DEL FORMULARIO.
//  - RECUPERAR LOS DATOS
//  - COLOCARLOS EN UN ARRAY
//  - PINTAR EL ARRAY