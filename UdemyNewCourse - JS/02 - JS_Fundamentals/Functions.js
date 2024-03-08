// Function o Funciones en JavaScript
'use strict';

// Firma de la funcion
function logger(){
    console.log('Hola mi nombre es Byron Henriquez'); //  Cuerpo de la funcion
};

// Llamado de la funcion
logger();

// Funcion que recibe parametros y devuelve una variable interna.
function HacerJugo(fruta1, fruta2){
    return `He realizado un jugo con extracto de ${fruta1} y ${fruta2}`;
}

console.log(HacerJugo('Mango','Manzana'));

// Funcion para calcular la edad
function CalculaEdad(anioNacimiento){
  const anioActual = 2024;
  let edad = (anioActual - anioNacimiento);

  if(anioNacimiento > anioActual) return 'Anio de nacimiento no puede ser mayor al anio actual';  

  return edad; 
};

let edadByron  = CalculaEdad(2018);
console.log(edadByron);