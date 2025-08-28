
// Filter nos devuelve un array que tiene la misma longitud om menor que el array inicial
// siempre cuando el valor de retorno es igual  de la funcio evalue a true 
const arr = [-5,-1,-2,-3,-4]

const r = arr.filter((el , i ) => {
// console.log(i);
return el > 2

} )
// console.log(r);

// Metodos de arreglos con  map 
// const mapped  = arr.map((el) => '<h1>${el}</h1>')
// console.log (mapped);

const users = [
    {id : 1, name : "Chanchito Feliz"},
    {id : 1, name : "Chanchito Triste"},
    {id : 1, name : "Chanchito Emocionado"},
    {id : 1, name : "Felipe"},
]
const mapped  = users.map((user) => '<h1>${user.name}</h1>')
// console.log (mapped);

// Metodos de arreglos con reduce
// const r1 = arr.reduce((acc, el ) => acc + el , 0)
// const getMax = (a,b) => Math.max (a,b)
// const r1 = arr.reduce(getMax,0)

// const r1 = users.reduce((acc, el ) => 
// '${acc === '' ? '' : '${acc},'${el.name}','')

const r1 = users.reduce((acc, el)=> {
 if (el.id < 2 ){
    return acc
 }
 return acc.concat(el)
} ,[])

console.log(r1);

