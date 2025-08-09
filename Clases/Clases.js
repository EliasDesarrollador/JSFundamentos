/* Expresion de clase 
const Rectangulo = class R{

}
*/
// Declaracion de clase
// Clases declaradas con la palabra reservada class no tienen hoisting
class Rectangulo {}

/* Hoisting  esto es cuando tomamos variables definidos  con var , y funciones definidas con function
   y las llevamos al principio del archivo */
//console.log(Cuadrado);
 function Cuadrado (){}
 //console.log(Cuadrado, Rectangulo);
 const r = new Rectangulo();


// Declarar Otra clase
 class Chancho  {
    //Propiedad pubilica que se puede acceder desde fuera de la clase
    propiedad = 'Mi propiedad';
    // Propiedad privada que solamente se puede acceder desde dentro de una instancia de la clase
    #hambre 
    constructor ( estado = 'feliz' ,hambre = false) {
      this.estado = estado
      this.#hambre = hambre
         
    }
    hablar() {
      console.log(`El chancho está ${this.estado} ${this.#hambre ? 'y tiene hambre mucha hambre !!' : 'Esta satisfecho'}`);
    }
    // Método estático que se puede llamar sin crear una instancia de la clase , pero no puede acceder a las propiedades de la instancia sean públicas o privadas
    // Se accede a las propiedades estáticas con el nombre de la clase con la palabra reservada static
    static comer(){
        console.log(this.propiedad,'El chancho está comiendo');
    }
  }
   
   // Chancho.comer(); // Llamada al método estático
// Crear instancias de la clase Chancho con la palabra reservada new
  const feliz = new Chancho('Feliz');
  const triste = new Chancho('triste');
  const nose = new Chancho ();
     /*feliz.hablar();
     console.log(feliz);*/
