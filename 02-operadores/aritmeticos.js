// Operadores Aritmeticos
// Los operadores aritméticos son utilizados para realizar operaciones matemáticas básicas como suma, resta, multiplicación y división.
// Estos operadores toman dos operandos y devuelven un resultado numérico.  
// Ejemplos de uso de operadores aritméticos en JavaScript:

//Declaración de variables
let a = 40;
let b = 20;
let operadorSuma ="+"; 
let operadorResta ="-";
let operadorMultiplicacion ="*";
let operadorDivision ="/";
// Operaciones aritméticas
console.log("Operdadores Aritmeticos: ",operadorSuma, operadorResta, operadorMultiplicacion, operadorDivision);
// Suma
console.log(a + b,"Es una suma" );
//Resta
console.log(a - b,"Es una resta" );
//Multiplicación
console.log(a * b,"Es una multiplicacion");
// División
console.log(a / b,"Es una division");
// Ejercicios de operadores aritméticos
let numero1 = 8;
let numero2 = 3;
let resultadoSuma = numero1 + numero2;
let resultadoResta = numero1 -numero2;
let resultMultiplicacion = numero1 * numero2;
let resultDivision = numero1 / numero2 ;
let resultModulo = numero1 % numero2 ;
let resultExponente = numero1 ** numero2;
console.log("Ejercicios de Operaciones Aritmeticas");
// Imprimir resultados
console.log("Numero 1:",numero1);
console.log("Numero 2:",numero2);
console.log("Resulto suma : ",resultadoSuma);
console.log("Resultado resta: ",resultadoResta);
console.log("Rsultado Multiplicacion :", resultMultiplicacion);
console.log("Resultado Division :", resultDivision);
console.log("Resultado Modulo :",resultModulo);
console.log("Resultado Exponente:",resultExponente);

// Ejercios de operadores aritméticos con informacion que introduce el usuario
 const prompt = require('prompt-sync')();

 let num1 = parseInt(prompt('Ingrese el primer número: '));
 let num2 = parseInt(prompt('Ingrese el segundo número: '));
 let suma = num1 + num2;
 let resta = num1 + num2;
 let multiplicacion = num1 * num2;
 let division = num1 / num2;
 let modulo = num1 % num2; 
 let exponente = num1 ** num2;
 console.log("Numero 1 : ",num1);
 console.log("Numero 2 :", num2);
 console.log("Resultado Suma :",suma);
 console.log("Resultado Resta :",resta);
 console.log("Resultado Multiplicacion :",multiplicacion);
 console.log("Resultado Division : ",division);
 console.log("Resultado Modulo :",modulo);
 console.log("Resultado Exponente :",exponente);



