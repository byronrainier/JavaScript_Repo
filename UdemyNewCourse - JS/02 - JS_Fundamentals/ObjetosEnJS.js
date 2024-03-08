// Objetos

let byron = {
    cedula: '40228021776',
    primerNombre: 'Byron Rainier',
    segundoNombre: 'Henriquez Diaz',
    anioNacimiento: 1997,
    ocupacion: 'Ingeniero en Sistemas',
    edad: null,
    correo: 'Rainesyahir@outlook.com',
    amigos: ['Alan','Samuel','Josly','Anthony','Henrry','Jose Angel'], //  Se pueden almacenar arrays
    tieneLicenciaDeConducir: true,
    // Se pueden almacenar tambien otro objeto dentro de este mismo objeto.

    // Tambien se pueden almacenar Metodos/Comportamientos... Funciones
    // Se coloca el nombre del metodo/funcion y se colocan dos puntos : 
    CalculaEdad: function (anioPersona){
        const anioActual = 2024;
        return anioActual - anioPersona;
    }
};
function CalculaEdad (anioPersona){
    const anioActual = 2024;
    return anioActual - anioPersona;
}
// Se puede imprimir el objeto completo o solo un atributo

console.log(byron);
console.log(byron.cedula); // Esta forma es conocida como el Dot Notation
//
console.log(byron['correo']); 
console.log(byron.amigos.length);
// Esta forma es conocida como el Bracket Notation, aqui tenemos la ventaja de poder hacer expresiones
//const nombreObj = '';
//console.log(byron['El primer nombre de la persona es:' + nombreObj]);

byron.edad = byron.CalculaEdad(1997);

console.log(`El anio de nacimiento de ${byron.primerNombre +' '+ byron.segundoNombre} es: ${byron.edad}`);