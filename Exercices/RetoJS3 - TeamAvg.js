/**CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110. */

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let koalasScore1 = 88;
let koalasScore2 = 91;
let koalasScore3 = 110;

let dolphinsAverage = Math.round((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3);
console.log(dolphinsAverage); 

let koalasAverage = Math.round((koalasScore1 + koalasScore2 + koalasScore3 ) / 3);
console.log(koalasAverage);

if(dolphinsAverage > koalasAverage){
    console.log('Los Delfines ganan el trofeo!!');
} else if (koalasAverage > dolphinsAverage){
    console.log('Los Koalas ganan el trofeo!!');
} else if (koalasAverage === dolphinsAverage){
    console.log('Ambos equipos ganan el trofeo!!');
}

