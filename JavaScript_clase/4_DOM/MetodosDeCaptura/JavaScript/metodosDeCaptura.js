//////////////////////////////////////////////
const div = document.getElementById('caja')

console.log(div);
div.textContent = 'Otra cosa'
//////////////////////////////////////////////

// Recuperar los parráfos con class="impar
const parrafosImpares = document.getElementsByClassName('impar')
for (let parrafo of parrafosImpares) {
    parrafo.textContent += ' es Impar'
}
//////////////////////////////////////////////

// Recuperar todos los div
const parrafos = document.getElementsByTagName('div')
parrafos[3].textContent += ' con posición 3'
parrafos[4].innerHTML += ' tiene <strong>  posición 4</strong>'
//////////////////////////////////////////////

// queryselector
const enlace = document.querySelector('.menu li:nth-child(3) a')
enlace.textContent += ' QuerySelector'
console.log(enlace);

const enlace2 = document.querySelector('ul:nth-child(2) li:first-child a')
enlace2.textContent += ' otro querySelector'
console.log(enlace2);

//////////////////////////////////////////////

// querySelectorAll
const enlaces = document.querySelectorAll('.menu a')
console.log(enlaces);
for (let enlace of enlaces) {
    enlace.textContent = 'Enlaces'
}

enlaces[0].textContent = 'Es el primer enlace'
console.log(enlaces[1].textContent);
