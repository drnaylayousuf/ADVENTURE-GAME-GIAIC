#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    fuelDecrease() {
        this.fuel = Math.max(0, this.fuel - 30);
    }

    fuelIncrease() {
        this.fuel = 100;
    }
}

class Enemy {
    name: string;
    fuel: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    fuelDecrease() {
        this.fuel = Math.max(0, this.fuel - 30);
    }
}

let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter your name"
});

let enemy = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Pick your enemy",
    choices: ["Pokemon", "Zombie", "Spider"]
});

let p1 = new Player(player.name);
let e1 = new Enemy(enemy.select);

do {
    if (enemy.select == "Pokemon") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Pick one option",
            choices: ["Attack", "Drink fuel", "Run for your life"]
        });

        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.yellow(p1.name)} fuel is ${chalk.yellow(p1.fuel)}`);
                console.log(`${chalk.red(e1.name)} fuel is ${chalk.red(e1.fuel)}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red(`You lose, better luck next time!`));
                    process.exit();
                }
            } else {
                e1.fuelDecrease();
                console.log(`${chalk.red(e1.name)} fuel is ${chalk.red(e1.fuel)}`);
                console.log(`${chalk.yellow(p1.name)} fuel is ${chalk.yellow(p1.fuel)}`);
                if (e1.fuel <= 0) {
                    console.log(chalk.green(`You win!`));
                    process.exit();
                }
            }
        } else if (ask.option == "Drink fuel") {
            p1.fuelIncrease();
            console.log(chalk.green(`Your fuel is ${p1.fuel}`));
        } else if (ask.option == "Run for your life") {
            console.log(chalk.red(`You lose, better luck next time!`));
            process.exit();
        }
    }

    if (enemy.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Pick one option",
            choices: ["Attack", "Drink fuel", "Run for your life"]
        });

        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.yellow(p1.name)} fuel is ${chalk.yellow(p1.fuel)}`);
                console.log(`${chalk.red(e1.name)} fuel is ${chalk.red(e1.fuel)}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red(`You lose, better luck next time!`));
                    process.exit();
                }
            } else {
                e1.fuelDecrease();
                console.log(`${chalk.red(e1.name)} fuel is ${chalk.red(e1.fuel)}`);
                console.log(`${chalk.yellow(p1.name)} fuel is ${chalk.yellow(p1.fuel)}`);
                if (e1.fuel <= 0) {
                    console.log(chalk.green(`You win!`));
                    process.exit();
                }
            }
        } else if (ask.option == "Drink fuel") {
            p1.fuelIncrease();
            console.log(chalk.green(`Your fuel is ${p1.fuel}`));
        } else if (ask.option == "Run for your life") {
            console.log(chalk.red(`You lose, better luck next time!`));
            process.exit();
        }
    }

    if (enemy.select == "Spider") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Pick one option",
            choices: ["Attack", "Drink fuel", "Run for your life"]
        });

        if (ask.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.yellow(p1.name)} fuel is ${chalk.yellow(p1.fuel)}`);
                console.log(`${chalk.red(e1.name)} fuel is ${chalk.red(e1.fuel)}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red(`You lose, better luck next time!`));
                    process.exit();
                }
            } else {
                e1.fuelDecrease();
                console.log(`${chalk.red(e1.name)} fuel is ${chalk.red(e1.fuel)}`);
                console.log(`${chalk.yellow(p1.name)} fuel is ${chalk.yellow(p1.fuel)}`);
                if (e1.fuel <= 0) {
                    console.log(chalk.green(`You win!`));
                    process.exit();
                }
            }
        } else if (ask.option == "Drink fuel") {
            p1.fuelIncrease();
            console.log(chalk.green(`Your fuel is ${p1.fuel}`));
        } else if (ask.option == "Run for your life") {
            console.log(chalk.red(`You lose, better luck next time!`));
            process.exit();
        }
    }
} while (true);
