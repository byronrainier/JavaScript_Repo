let isIsland = true;
let Country;
const Continent = 'America';
let Population;
let Language = 'Spanish';
let finlandPopulation = 3000000;
Country = 'Republica Dominicana';
// Continent = 'America';
Population = 1100000;
let description = 'El pais ' + Country + ' se encuentra en el continente ' + Continent + ' Y su poblacion es de ' +Population+ ' Personas';

// Usando la manera de Concatenar Strign mas moderna y limpia usando `` y $ como en c#
let newDescription = `El pais ${Country} se encuentra en el continente ${Continent} Y 
su poblacion es de ${Population} personas`;

console.log(newDescription);

Country = 'Republica Dominicana';
// Continent = 'Europa';
Population = 1200000;

let isLessThanFinland = (finlandPopulation > Population);

console.log('Si dividimos la poblacion en dos mitades iguales: ' + (Population / 2))
console.log(isLessThanFinland);
console.log(description);


console.log(typeof isIsland);
console.log(typeof Country);
console.log(typeof Continent);
console.log(typeof Population);
console.log(typeof Language);
