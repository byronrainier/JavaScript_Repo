const dia = new Date()

let diaDeLaSemana = dia.getDay();
console.log(diaDeLaSemana);

if(diaDeLaSemana == 1){
    console.log('Hoy es Lunes');
} else if (diaDeLaSemana == 2){
    console.log('Hoy es Martes')
} else if (diaDeLaSemana == 3){
    console.log('Hoy es Miercoles')
} else if (diaDeLaSemana == 4){
    console.log('Hoy es Jueves')   
} else if (diaDeLaSemana == 5){
    console.log('Hoy es Viernes')   
} else if (diaDeLaSemana == 6){
    console.log('Hoy es Sabado')   
} else if (diaDeLaSemana == 7){
    console.log('Hoy es Domingo')   
}