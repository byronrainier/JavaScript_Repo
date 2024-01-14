// Ciclo Do While
// Ejecuta al menos una vez su bloque de codigo debido a que la condicion a revisar se encuentra al final del bloque
/**
 * Sintaxis
 * 
 * do{
 *  Codigo a ejecutar
 * }while(condicion);
 */

let contador = 0;
let repeticiones = 5;

do{
    console.log(contador);
    contador++;
}while (contador <= repeticiones);