// Metodo Call en JavaScript

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(nombre,apellido){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Maria',
    apellido: 'Lara',

}

console.log(persona1.nombreCompleto());

// Uso de call, aunque pertenece al persona1, lo podemos usar para el persona2
console.log(persona1.nombreCompleto.call(persona2));
// Sin necesidad de haber definidio el metodo para persona2, con el call se pudo hacer el llamado con los datos de dicha persona.