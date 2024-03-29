#! /usr/bin/env node
import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: 'Guess a number between 1-6: ',
        name: 'userGuessedNumber',
        type: 'number',
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log('Congratulations! You guessed it right.');
}
else
    console.log('Guessed it wrong! Try Again.');
