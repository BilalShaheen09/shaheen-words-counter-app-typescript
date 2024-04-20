#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("****Shaheen Word Counter App ****"));
async function counter() {
    const answer = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: chalk.blueBright("Enter your sentence to count the words: "),
        },
    ]);
    if (answer.sentence.length === 0) {
        console.log(chalk.redBright("Please enter a valid sentence"));
        return;
    }
    const words = answer.sentence.trim().split(" ");
    console.log(words);
    console.log(chalk.greenBright(`Total words: ${words.length}`));
}
await counter();
(async function () {
    while (true) {
        const ask = await inquirer.prompt([
            {
                name: "question",
                type: "list",
                message: chalk.blueBright("What would you like to do?"),
                choices: ["Continue", "Exit"],
            },
        ]);
        if (ask.question === "Exit") {
            console.log(chalk.greenBright("Goodbye!"));
            break;
        }
        else {
            await counter();
        }
    }
})();
