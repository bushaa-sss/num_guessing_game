#! /usr/bin/env node
import inquirer from "inquirer";
//computer generated num
const RandNum = Math.floor(Math.random() * 10 + 1);
//user value
const ans = await inquirer.prompt([{
        name: "value",
        type: "number",
        message: "enter any intger from 1 t0 10: \n",
    },
]);
if (ans.value === RandNum) {
    console.log("computer value: " + RandNum + "\nWOW! YOU GUESSED CORRECT");
}
else {
    console.log("computer value: " + RandNum + "\n YOU GUESS THE WRONG NUMBER");
}
