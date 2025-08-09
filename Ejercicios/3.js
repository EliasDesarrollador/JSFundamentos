
function indiceValid (arr,ind){
    if (ind < 0 ||  arr.length <= ind){
        return "Elemento no existe";
    }
    return arr[ind];
}
let resultado = indiceValid([1,2,3,4] , 5 );
console.log(resultado);