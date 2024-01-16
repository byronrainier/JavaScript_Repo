// Distintas formas de imprimir un objeto en JavaScript


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
// De esta manera puedo agregar otra propiedad al objeto
persona.telefono = '8093406010'; //  Se indica el objeto, el nombre de la nueva propiedad y su valor.

// Formas de imprimir un objeto y sus propiedades

// Concatenar cada propiedad y su valor
console.log('Nombre: ' + ' '+ persona.nombre +', ' +'Apellido: ' + persona.apellido);

// Bucle for in 
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

// En un array de datos
let personaArray = Object.values(persona); //  Toma los valores/values del object y los pone en una variable
console.log(personaArray); // Se imprime dicho array con los valores

// en formato JSON, convirtiendolo en cadena
let personaString = JSON.stringify(persona); // Se le pasa el objeto en cuestion
console.log(personaString);