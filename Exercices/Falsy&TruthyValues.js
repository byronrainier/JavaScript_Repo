// En JavaScript hay 2 tipos de datos booleanos 
// Truthy & Falsy Values

// Falsy : false, 0, '', Nan, undefined, null

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean('Barry'));
console.log(Boolean(12));
console.log(Boolean({}));

// Hay que tomar esto en cuenta al momento de utilizar la toma de decisiones.

let money = 0;
if(money){ // Aqui lo que esta dentro del parentesis hace une conversion explicita, el resultado por ser 0 es false
    console.log('Hay dinero');
}else{
    console.log('Hay que conseguir dinero');
}

let obj1 = 23;

if(obj1){
    console.log('El objeto tiene valor')
}else{
    console.log('El objeto no tiene valor')
}