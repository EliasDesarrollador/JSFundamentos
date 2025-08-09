
// Objeto Alumno
let nombre = "Juan";
let curso = "Logica";
let edad = 20;
//Creamos un Objeto
let alumno = {
    nombre: "Juan",
    curso: "Logica",
    ciudad: "Asuncion",
    carrera:  "Ciencias Informaticas",
    edad: 20,
};
console.log(alumno);
console.log(alumno.curso);
console.log(alumno['nombre']);

alumno.edad = 21;

let llave ='edad';
alumno[llave] = 21;

console.log(alumno);