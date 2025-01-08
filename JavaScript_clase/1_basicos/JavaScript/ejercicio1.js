
/*

Dados 54321 segundos hay que calcular la cantidad de horas, minutos y segundos en *dicha cifra

*/


const segundos = 54321
let horas
let minutos
let segundosRestantes

horas = segundos / (60 * 60)
horas = parseInt(horas)

segundosRestantes = segundos % (60 * 60)

minutos = segundosRestantes / 60
minutos = parseInt(minutos)

segundosRestantes = segundosRestantes % 60

// En X segundos hay X horas, X minutos y X segundos

console.log('En ' + segundos + ' segundos hay ' + horas + ' horas, ' + minutos + ' minutos y ' + segundosRestantes + ' segundos.');


console.log(`En ${segundos} segundos hay ${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos`);
