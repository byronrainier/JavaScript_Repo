// Arrow Function o Funcion Flecha
const EdadPersona = (anioNacimiento, primerNombre) => {
    const anioActual = 2024;
    let edad = anioActual - anioNacimiento;

    return `La edad de ${primerNombre} es ${edad}`;
}

let edadByron = EdadPersona(1997, 'Byron Rainier');

console.log(edadByron);

const YearsToRetire = (anioNacimiento) =>{
    const anioParaRetiro = 65;
    const anioActual = 2024;

    let edadPersona = anioActual - anioNacimiento;

    return anioParaRetiro - edadPersona;
}

let retiroByron = YearsToRetire(1997);
console.log(retiroByron);