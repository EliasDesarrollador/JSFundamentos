
// Fetch API ejemplo
const url = 'https://jsonplaceholder.typicode.com/users'
  // API de Promesas 
// fetch(url, {
//     method:'POST', // GET ,POST ,PUT ,PACH , DELETE
//     headers: {
//         'Content-Type': 'aplication/json', // Le decimos que el contenido que le enviamos al servidor es de tipo json.
//         'Authorization': 'Bearer acadebiesexistiruntokendeautorizacion'
//     },
//     body: JSON.stringify({
//        name:'Chachito feliz',
//        website:'google.com'
//     })
// })
//   .then((response) => response.json())
//   .then( data => console.log(data))
 

// Functiones con async await 
const fn = async () => {


 const response = await fetch(url, {
    method:'POST', // GET ,POST ,PUT ,PACH , DELETE
    headers: {
        'Content-Type': 'aplication/json', // Le decimos que el contenido que le enviamos al servidor es de tipo json.
        'Authorization': 'Bearer acadebiesexistiruntokendeautorizacion'
    },
    body: JSON.stringify({
       name:'Chachito feliz',
       website:'google.com'
        })
    })
 const data = await response.json()
 console.log(data);


}
fn ()