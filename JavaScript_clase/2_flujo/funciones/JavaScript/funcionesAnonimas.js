const sumar = function (numA, numB) {
    const resultado = numA + numB
    return resultado
}

console.log(sumar(3, 6));

// Callbacks

setTimeout(function () {
    console.log('Pasan 2 segundos');
    console.log(sumar(100, 200));

}, 2000)

const mensaje5Segundos = function () {
    console.log('Han pasado 5 segundos');
}

setTimeout(mensaje5Segundos, 5000);

setInterval(mensaje5Segundos, 10000)

// Arrow Functions

const sumar2 = (num1, num2) => {
    const resultado = num1 + num2
    return resultado
}
const sumar3 = (num1, num2) => {
    return num1 + num2
}
const sumar4 = (num1, num2) => num1 + num2
console.log(sumar2(100, 200), sumar3(30, 70), sumar4(50, 50));


// Enviar un mensaje pasado 4 segundos

setTimeout(() => {
    console.log('Han pasado 4 segundos');
}, 4000);

setTimeout(() => console.log('Han pasado 4 segundos'), 4000);

function mensaje4Seg() {
    console.log('Han pasado 4 segundos')
}
setTimeout(mensaje4Seg, 4000);