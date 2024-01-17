// Metodo Constructor en JavaScript
// Se recomienda que siempre las funciones contructores de Metodos sean declarados con letras iniciales mayusculas

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


// Creacion de un objeto de tipo persona haciendo uso del constructor.

let padre = new Persona('Byron','Henriquez','prueba@gmail.com', 26);
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Rafelina','Vasquez','prueba2@gmail.com', 30);
console.log(madre);
console.log(madre.nombreCompleto());

for (propidades in madre){
    console.log(propidades);
    console.log(madre[propidades]);
}

for (propidades in padre){
    console.log(propidades);
    console.log(padre[propidades]);
}