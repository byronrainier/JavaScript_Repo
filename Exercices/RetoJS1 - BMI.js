/** 
 * Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.
 */


let markHeight = 2.80;
let markMass = 120;
//
let johnHeight = 6.00;
let johnMass = 89;

let markBMI = Math.round(markMass / (markHeight * markHeight));
let johnBMI = Math.round(johnMass / (johnHeight * johnHeight));

console.log(`Marks Height is: ${markHeight} And his Mass is: ${markMass}, His Body Mass Index (BMI) is: ${markBMI}`);
console.log(`John Height is: ${johnHeight} And his Mass is: ${johnMass}, His Body Mass Index (BMI) is: ${johnBMI}`)