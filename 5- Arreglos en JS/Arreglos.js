// Un arreglo nos permite almacenar multiples valores en una sola variable, en lugar de definir varias variables
/**
 * Sintaxis:
 * <Nommbre_Arreglo>[];
 * 
 * Ej: let numerosArreglo[];
 * 
 * Modificacion de un indice
 * numerosArreglo[0] = 10; Se indica el indice y su valor
 * numerosArreglo[4] = 40;
 * 
 * NOTA: NO es necesario modificar todos los valores del Arreglo. Los valores no inicializados tienen el valor de Undefined
 * 
 * Leer los valores de un arreglo
 * console.log(numerosArreglo[0]); Se indica por consola el nombre del arreglo y el indice que se quiere leer
 * 
 */

let numerosArreglo = []; // Definicion del arreglo
numerosArreglo[0] = 13; // Modificacion de valor del indice 0 en este caso
numerosArreglo[1] = 23;
numerosArreglo[2] = 75;
numerosArreglo[3] = 45;
numerosArreglo[5] = 'Hola'; 

console.log(`Elemento 1 - [0]: ${numerosArreglo[0]}`);
console.log(`Elemento 2 - [2]: ${numerosArreglo[1]}`);
console.log(`Elemento 4 - [4]: ${numerosArreglo[4]}`);

let miOtroArregloNumero = [100,200,300,400,500]; // Declaracion de otro arreglo ya con los indices y valores especificados

console.log(miOtroArregloNumero[3]);


// Iterar los elementos de un arreglo

for (let contador = 0; contador <= miOtroArregloNumero.length; contador++){
    console.log(miOtroArregloNumero[contador]);
}
