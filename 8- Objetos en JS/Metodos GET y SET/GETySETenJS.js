// Metodos GET y SET en JavaScript
// GET signigica Obtener y SET significa establecer o modificar

let persona = {
    nombre: 'Barry',
    apellido: 'Zito',
    edad: 23,
    nacionalidad: 'American',
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    // Aqui vamos a modificar la manera de obtener el nombre completo, con el uso del GET
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },

    //Aqui usaremos el SET, para modificar los valores de los atributos
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
};

console.log(persona.nombreCompleto);

// Usando el Metodo SET
console.log(persona.lang);

persona.lang = 'Urrs'; // Aqui accediendo a esa propiedad, que es un set, estoy cambiando el valor en este caso del idioma.

// Luego de usar el Metodo SET, ahora el idioma es otro.
console.log(persona.lang);


