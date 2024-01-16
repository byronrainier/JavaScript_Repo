// Objetos en JavaScript
// Un objeto puede poseer propieades y/o atributos y metodos

let x1 = 23;
// Esta declaracion de variable como tal no tiene atributos relacionados, por lo cual no seria posible acceder x1.

// Esto crea un objeto en memoria, con las propiedades indicadas.
let persona = {
    nombre: 'Barry',
    apellido: 'Zito',
    edad: 23,
    nacionalidad: 'American',
    // Como agregar un metodo al objeto
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }

};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nacionalidad);

//Para imprimir el objeto completo
console.log(persona);
// Llamado del metodo del objeto
console.log(persona.nombreCompleto());

