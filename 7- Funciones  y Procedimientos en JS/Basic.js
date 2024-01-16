// Una funcion es un bloque de codigo reutilizable que realiza una tarea predeterminada
/**
 * Sintaxis de una funcion en JS
 * function <NombreFuncion(Casi siempre suele ser un vero o accion a realizar)>(Parametros que recibe (Opcionales y son variables locales de la funcion)){
 *  cuerpo de la funcion
 * }fin de la funcion
 * 
 * Diferencia entre Funcion y Procedimiento
 *  una funcion devuelve un valor, en cambio un procedimiento no
 * 
 * Tipos de Funciones:
 *  Funciones definidas por el usuario
 *  Funciones incorporadas (Built in), digase ya vienen en las clases definidas por el lenguaje de JavaScript
 * 
 */

// Procedimiento en JS
// Definicion
function saludarUsuario (mensaje){ // Firma del metodo
    // Cuerpo de la funcion
    console.log(`Mensaje: ${mensaje}`);
}

// Llamado del procedimiento
saludarUsuario('Buenas tardes');

// Funciones en JS
// Defincion

function sumar(a,b){
    let resultadoSuma = a + b;
    return resultadoSuma;
}

console.log(sumar(5,28));