// Arrays en JavaScript

let amigos = ['Juan','Pedro','Mario'];
let arrayFamilia = ['Huascar','Melania','Yahir','Rafelina','Carlos'];

console.log(amigos);
console.log(arrayFamilia);
console.log(arrayFamilia[2]);

// Metodos que se pueden usar para trabajar con los arrays

// Para agregar un elemento al final del array
arrayFamilia.push('Melissa');
console.log(arrayFamilia);

// Para agregar un elemento al inicio del array
arrayFamilia.unshift('Blanca');
console.log(arrayFamilia);

// Para eliminar un elemento del array
arrayFamilia.pop(); // Esta funcion integrada remueve el ultimo elemento del array
console.log(arrayFamilia);

// Para eliminar un elemento del array
arrayFamilia.shift(); // Esta funcion integrada remueve el primer elemento del array
console.log(arrayFamilia);

// Para conocer la posicion de un elemento en el array
// Le paso la referencia del elemento en cuestion
console.log(arrayFamilia.indexOf('Yahir'));

// Para validar si un array contiene un elemento x si o no, true or false
// Se le pasa la referencia del elemento a buscar
console.log(arrayFamilia.includes('Yahir'));
console.log(arrayFamilia.includes('Melissa'));