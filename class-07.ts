// BMI CALCULATOR //
let weightInKg = 70;
let heightInMeter = 1.75;
let bmi = weightInKg / (heightInMeter * heightInMeter);
console.log(`your bmi is${bmi}`) // 22.85714

// HOME WORK //
import inquirer from "inquirer";

const calculator = await inquirer.prompt([{ message: "Enter your firstNumber", type: "number", name: "firstNumber" }, { message: "Enter your secondNumber", type: "number", name: "secondNumber" }, { message: "select one operator to perform operation", type: "list", name: "operator", choices: ["addition", "subtraction", "multipliction", "division", "exponation", "moduls", "BMI"], },]);

if(calculator.operator === "addition"){
    console.log(`your addition is ${calculator.firstNumber + calculator.secondNumber}`);
}
else if(calculator.operator === "subtraction"){
    console.log(`your subtraction is ${calculator.firstNumber - calculator.secondNumber}`);
}
else if(calculator.operator === "multipliction"){
    console.log(`your multipliction is ${calculator.firstNumber * calculator.secondNumber}`);
}
else if(calculator.operator === "division"){
    console.log(`your division is ${calculator.firstNumber / calculator.secondNumber}`);
}
else if(calculator.operator === "exponation"){
    console.log(`your exponation is ${calculator.firstNumber ** calculator.secondNumber}`);
}
else if(calculator.operator === "moduls"){
    console.log(`your moduls is ${calculator.firstNumber % calculator.secondNumber}`);
}
else if(calculator.operator === "BMI"){
    console.log(`your BMI is ${calculator.firstNumber / (calculator.secondNumber*calculator.secondNumber)}`);
}
else{
    console.log("please select the valid operator");
}