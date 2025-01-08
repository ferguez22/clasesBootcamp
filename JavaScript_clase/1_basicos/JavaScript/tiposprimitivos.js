// Comentario en una única

/*
    Comentario en
    varias lineas.
*/

console.log('---------');


var num1 = 5
var numeroPrincipal = 3
// camelCase

// Declaración de variable
var num2
// Inicialización de variable
num2 = 67

num1 = 14

console.log(num1);
console.log(numeroPrincipal);
console.log(num1 + numeroPrincipal);


console.log('---------');


// number
var altura = 180
var precio = 25.99
var negativo = -3

var resultado = precio * negativo


console.log(precio);
console.log(negativo);
console.log(resultado);


console.log('---------');


// String - Cadena de Caracteres

var nombre = "Fernando"
var edad = "22"
var apellidos = 'Rodriguez Santamaria'

// Concatenacíon
var nombreCompleto = nombre + ' ' + apellidos
// El resultado que yo quiero es Fernando Rodriguez Santamaria (Sumo el espacio en blanco)
console.log(nombreCompleto);

// Ahora quiero que diga: Mi nombre es Fernando Rodriguez Santamaria y tengo 22 años de edad
// Se usa el template string

var mensaje = `Mi nombre es ${nombreCompleto} y tengo ${edad} años de edad`

console.log(mensaje);


console.log('---------');


// Boolean - Solo puede ser True o puede ser False

var estaEncendido = false
var activo = true
console.log(estaEncendido, activo);


console.log('---------');


// Undefined
var ciudad
console.log(ciudad);


console.log('---------');


// DEbilmente tipado
var prueba       // Undefined
prueba = 34      // Number

console.log(typeof prueba)

prueba = 'Hola'  // String
prueba = true    // Boolean