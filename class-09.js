// LOGIC STATMENTS //
// IF , ELSE STATMENT //
let isRaining = true;
if (isRaining) {
    console.log("wear a raining coat.");
}
else {
    console.log("wear a sunglasses.");
}
// IF , IF-ELSE , ELSE STATMENT //
let weather = "cloudy";
if (weather === "raining") {
    console.log("wear a raining coat.");
}
else if (weather === "cloudy") {
    console.log("wear a light jacket.");
}
else {
    console.log("wear a sunglasses.");
}
// CONDITIONAL TERNARY OPERATOR //
let ishungry = true;
ishungry ? console.log("eat a snack.") : console.log("not need.");
// QUIZ CHECKING //
let answer = "Correct";
if (answer === "Correct") {
    console.log("You Got it Right!");
}
else {
    console.log("Sorry, that's Not Correct.");
}
// NUMBER GUESSING //
let guess = 5;
let target = 5;
if (guess < target) {
    console.log("Your guess is too Low.");
}
else if (guess > target) {
    console.log("Your guess is to high.");
}
else {
    console.log("You guess Corectly.");
}
// SWITCH STATMENT // 
let dayoff = "Sunday";
switch (dayoff) {
    case "Saturday":
        console.log("Go Hiking.");
        break;
    case "Sunday":
        console.log("Read a Book.");
        break;
    default:
        console.log("Work On a Hobby.");
}
// FRIEND GAME //
let isFriend = "Amin";
if (isFriend === "Amin" || isFriend === "Ahmed") {
    console.log(`${isFriend} is your Friend`);
}
else {
    console.log(`${isFriend} is not your Friend`);
}
// FROM INQUIRER //
import inquirer from "inquirer";
let asFriend = await inquirer.prompt({
    message: "Enter your Friend name", type: "number", name: "name"
});
if (asFriend.name === 1 || asFriend.name === 2) {
    console.log(`${asFriend.name} is your friendname`);
}
else {
    console.log(`${asFriend.name} is not your friendname`);
}
// ROCK , PAPER & SCISSORS GAME //
let player1 = "Rock";
let player2 = "Scissors";
if (player1 === player2) {
    console.log("its a tie!");
}
else if ((player1 === "Rock" && player2 === "Scissor") ||
    (player1 === "Scissor" && player2 === "paper") ||
    (player1 === "Paper" && player2 === "Rock")) {
    console.log("Player1 wins!");
}
else {
    console.log("Player2 wins!");
}
