#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.bgGray("<<<------welcome to Guessing Number Game------>>>"));
console.log("-----------------------------------------------");
let condition = true;
while (condition) {
    let gameNumber = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please guess a number between 1 To 6 :",
        },
    ]);
    if (gameNumber === answer.userGuessedNumber) {
        console.log(chalk.italic.yellowBright("Congratulatios! you Winner: You guessed right number"));
        console.log(chalk.italic.bgRed("<<<--------------Game End-------------->>>"));
        condition = false;
    }
    else {
        console.log(chalk.red("you are wrong guessed!"));
        console.log(chalk.blue(`computer Guessed Number is : ${gameNumber}`));
        console.log("-----------------------------------------------");
    }
}
