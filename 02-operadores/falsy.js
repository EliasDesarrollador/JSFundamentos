
// short- Circuit
// falso
//false 
// 0
//''
//null
//undifined
//NaN
let nombre = 'Juan Estudia';
let username =nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('Soy Funcion 1');
    return false ;
}
function fn2() {
    console.log('Soy funcion 2');
    return true;
}
let x = fn1()  && fn2();
