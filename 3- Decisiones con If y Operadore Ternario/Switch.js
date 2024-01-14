// Sentencia Switch en JavaScript

const dia = new Date()

let diaDeLaSemana = dia.getDay();
console.log(diaDeLaSemana);

// Usaremos el mismo ejemplo del dia de la semana

// El break se utiliza para salir del flujo y no seguir buscando donde se cumple la condicion, con el primero que cumpla termina el flujo

// el default se utiliza cuando el valor no es encontrado en ninguna de los bloques a evaluar

switch (diaDeLaSemana) // Este es la condicion o valor a ser evaluado
{
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Dia no especificado');
        break;
}