
let user = {
    id: 1,
    name: 'Mi Chancho',
    age: 25,
};
for (let propiedad in user ) {
    console.log(propiedad,user[propiedad]);
}
let animales = ['MiChancho','Perro Feliz','Gato'];
for (let indice in animales ){
    console.log(indice,animales[indice]);

}