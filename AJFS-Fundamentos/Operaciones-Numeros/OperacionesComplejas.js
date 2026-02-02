
// Ejercicio de operaciones aritmeticas con parentesis

const   prompt = require('prompt-sync')();

console.log("Operaciones Numericas Complejas");
let numero1 = parseInt(prompt('Escribe el primer numero:'));
let numero2 = parseInt(prompt('Escribe el segundo numero: '));
let numero3 = parseInt(prompt('Escribe el tercer numero:'));
let numero4 = parseInt(prompt('Escribe el cuarto numero: '));


let resultado1 =  (numero1 * numero2) +  numero3  / numero4 ; 
let resultado2 = numero1*  (numero2 + numero3 / numero4 );
let resultado3 = numero1 * (numero2 + numero3 ) / numero4; 

console.log('Operacion: (%s * %s)  + %s  / %s  = %s ', numero1, numero2, numero3, numero4, resultado1);
console.log('Operacion: %s * (%s  + %s / %s) '  ,numero1, numero2, numero3, numero4, resultado2);
console.log('Operacion: %s * (%s  + %s )  / %s ' , numero1, numero2, numero3, numero4 , resultado3);