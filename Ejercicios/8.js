

/**
 * Crear un algortimo que tome una array  de  objetos 
 * y devuelva una array de pares.
 */
let array =[{
    id: 1,
    name:'Samuel',
},{
    id:2,
    name: 'Juan',
},{
    id:3,
    name:'Ana',
}];
let pares = [
    [1,{id:1, name:'Samuel'}],
    [2,{id:2, name:'Juan'}],
    [3,{id:3, name:'Ana'}],
]

function losPares(arr){
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado =losPares(array);
console.log(resultado);