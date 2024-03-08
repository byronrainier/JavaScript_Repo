function CortarFrutas(cantidadFruta){
    return cantidadFruta * 4;
}

function HacerJugo(fruta1, cantidadFruta1, fruta2, cantidadFruta2){
    const pedazosFruta1 = CortarFrutas(cantidadFruta1);
    const pedazosFruta2 = CortarFrutas(cantidadFruta2);

    return `He realizado un jugo con ${pedazosFruta1} pedazos de ${fruta1} y ${pedazosFruta2} pedazos de ${fruta2}`;
}

console.log(HacerJugo('Pina',1,'Mango',3))