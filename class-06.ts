#! /usr/bin/env node
// npm init  // tsc --init // write type "module" in package.json // npm i inquirer // `npm i --save-dev @types/inquirer`
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter a FirstNumber", type: "number", name: "FirstNumber" },
    { message: "Enter a SecondNumber", type: "number", name: "SecondNumber" },
    {
        message: "Select One Operator to Perform Operation",
        type: "list",
        name: "Operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.Operator === "addition") {
    console.log(`your answer is ${answer.FirstNumber + answer.SecondNumber}`);
} else if (answer.Operator === "subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.Operator === "multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.Operator === "division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
} else {
    console.log("Please select a valid operator")
}
// two digit addition //
const input = await inquirer.prompt([{ message: "Kindly Enter your firstnumber", type: "number", name: "num1" },
{ message: "Kindly Enter your secondnumber", type: "number", name: "num2" },]);
let total: number = input.num1 + input.num2;
console.log(`your two digit addition is ${total}`);