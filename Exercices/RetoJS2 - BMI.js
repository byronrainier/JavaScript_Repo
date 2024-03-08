/**
 * 
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.
 * 
 */
let markHeight = 2.80;
let markMass = 120;
//
let johnHeight = 4.00;
let johnMass = 80;

let markBMI = Math.round(markMass / (markHeight * markHeight));
let johnBMI = Math.round(johnMass / (johnHeight * johnHeight));

console.log(`Marks Height is: ${markHeight} And his Mass is: ${markMass}, His Body Mass Index (BMI) is: ${markBMI}`);
console.log(`John Height is: ${johnHeight} And his Mass is: ${johnMass}, His Body Mass Index (BMI) is: ${johnBMI}`);

if(markBMI > johnBMI){
    console.log(`El BMI de Mark (${markBMI}) es mas alto que el de John (${johnBMI})`);
}else {
    console.log(`El BMI de John (${johnBMI}) es mas alto que el de Mark (${markBMI})`);
}