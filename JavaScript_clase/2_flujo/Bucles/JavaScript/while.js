//
// El número de veces que se ejecuta el bucle DEPENDE de una condición
//
//  while (CONDICIÓN) {
//      SENTENCIAS A EJECUTAR
//  }    
// 

let contador = prompt('Dame un número')

while (contador <= 10) {
    console.log(contador)
    contador++
}

//
// do-while - Lo mismo que el while pero se ejecuta una ves como mínimo
//
//  do {
//      SENTENCIAS A EJECUTAR
//  } while (CONDICIÍON){
// 
//      }
// 

let contador2 = 11

do {
    console.log(contador2)
    contador2++
} while (contador2 <= 10)