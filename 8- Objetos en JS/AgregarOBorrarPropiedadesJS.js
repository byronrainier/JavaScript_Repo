// Agregar o borrar propiedades de un objeto en JavaScript

// Otras forma de accedes a los atributos de un objeto
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

// Otra forma es este colocar la variable a la que apunta nuestra objeto y entre corchetes indicar la propiedad que se quiere imprimir
console.log(persona['apellido']);

// De esta manera puedo agregar otra propiedad al objeto
persona.telefono = '8093406010'; //  Se indica el objeto, el nombre de la nueva propiedad y su valor.

// Tambien se puede hacer mediante un bucle For In
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

// Para poder eliminar una propiedad existente
delete persona.telefono; // Se indica la palabra reservada delete, luego el objeto y el atributo/propiedad a eliminar.

// Tambien se puede hacer mediante un bucle For In
// Luego del delete ya no se imprime la propiedad de telefono
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

