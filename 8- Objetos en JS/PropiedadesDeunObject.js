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

// Tambien se puede hacer mediante un bucle For In

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}