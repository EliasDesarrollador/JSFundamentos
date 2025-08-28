
//Spread Operator 
// Creamos una funcion con la sintaxis de fat arrow function 
const fn = (a,b,c) => console.log (a ,b ,c)

const arr = [1 ,2 ,3, 4]

// Con Spread
// El spread operator nos ahorra codigo cuando tenemos un arreglo y queremos llamar a una funcion 
// podemos tomar el arreglo llamar al spread operator y los elementos que contiene el arreglo 
// va a mapear con cada uno de los parametros de la funcion (primer elemento = primer parametro, y asi sucesivamente)

//  fn (...arr)

// sin Spread operator 
//fn (arr[0],arr[1],arr[2])

const arr1 = [5,6]

// const arr2 = arr.concat(arr1)
// const arr2 =[ ...arr, ...arr1]
const arr2 = [...arr , 2 , 3]
const arr3 = arr 
arr[0]= 'Chanchito Feliz'
// console.log(arr , arr2);

// Spread operator con objetos 
const  obj1 = { a:1, b:2}
const obj2 = {b: 5 , c: 'Chanchito Feliz'}
const obj3 = {...obj1 }
obj1.a = 10 
// console.log (obj3, obj1);

const obj4 = { ...obj1 , ...obj2}
console.log (obj4);

const obj5 = {
    ...obj1,
    loading: true,
    data : {
        prop: 'lala',
        animal: 'perro'
    }
}

console.log(obj5);
