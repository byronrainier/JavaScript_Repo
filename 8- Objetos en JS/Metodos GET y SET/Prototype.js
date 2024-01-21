// Prototype en JavaScript

// Funcion constructor de objetos de tipo persona 
function Persona(nombre_arg,apellido_arg,email_arg,edad_arg){
    this.nombre = nombre_arg; // Del lado izquierdo va la propiedad y del lado derecho el argumento/parametro
    this.apellido = apellido_arg; // Del lado izquierdo va la propiedad y del lado derecho el argumento/parametro
    this.email = email_arg; // Del lado izquierdo va la propiedad y del lado derecho el argumento/parametro
    this.edad = edad_arg; // Del lado izquierdo va la propiedad y del lado derecho el argumento/parametro

    this.nombreCompleto = function(){
        return this.nombre +' '+ this.apellido;
    }
}


// Agregando una propiedad que en este caso afectara a los objetos ya creados.
Persona.prototype.telefono = null; // Se accede al objeto,  luego a prototype, y se indica la nueva propiedad y su valor.
// Si el prototipo se crea con valor, solo aplica para los nuevos objetos que se vayan a crear. Para darle valor a objetos ya creados hay que acceder a la propiedad. 


let padre = new Persona('Byron','Henriquez','prueba@gmail.com', 26);
padre.telefono = '8093731540';
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Rafelina','Vasquez','prueba2@gmail.com', 30);
madre.telefono = '809781245';
console.log(madre);
console.log(madre.nombreCompleto());
