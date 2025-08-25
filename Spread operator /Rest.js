
// Rest operator 
// Creamos una funcion con la sintaxis de fat arrow function
const rest = (a,b,...args) => {
    console.log(a, b);
    console.log(args);

}
// rest (1,2,3,4,5,6);
//El rest operator nos permite tomar los parametros que no se estan utilizando y agruparlos en un arreglo

// Ejemplo de uso del rest operator con un objeto
const obj = {
    a:1, b:2, c:3, d:4
}

// const {a,b ,...restobj } = obj 
// console.log(a,b, restobj); 

//Creamos un arreglo despues podemos usar el rest operator ya agrupar los elementos de un arrglo en un nuevo arreglo

const arr = [1,2,3,4,5,]

const [a, b, ...r] = arr

 // Tambien podemos hacer con las arrow funtion  con destructuring 

const useState = () => ['valor', ()=> {}]
 
const [valor, setvalor] = useState()
console.log(valor, setvalor );
