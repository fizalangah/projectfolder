#! /usr/bin/env node
import inquirer from 'inquirer';
let randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    { name: "guessedNumber",
        type: "number",
        message: "guess the correct number",
    }
]);
if (answer.guessedNumber === randomNumber) {
    console.log("congratulations you guess the correct number");
}
else {
    console.log("you guess wrong number try again");
}
