import inquirer from "inquirer";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let playerName = await inquirer.prompt({
    name: "pname",
    type: "input",
    message: "enter your name"
});
let Opponent = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "what can you do?",
        choices: ["Skeleton", "Alien", "Zombi"]
    }]);
let P1 = new player(playerName.pname);
let O1 = new opponent(Opponent.select);
do {
    //skeleton;
    if (Opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([{
                name: "options",
                type: "list",
                message: "select your opponent",
                choices: ["Atack", "Fuel Portion", "Run For Your Life",]
            }]);
        if (ask.options === "Atack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(`you lose beter luck next time!`);
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log(`you Win!`);
                    process.exit();
                }
            }
        }
        if (ask.options === "Fuel Portion") {
            P1.fuelIncrease();
            console.log(`${P1.name} your heath portion fuel is${P1.fuel}`);
        }
        if (ask.options === "Run For Your Life") {
            console.log(`you lose beter luck next time!`);
            process.exit();
        }
    }
    //Alien;
    if (Opponent.select === "Alien") {
        let ask = await inquirer.prompt([{
                name: "options",
                type: "list",
                message: "select your opponent",
                choices: ["Atack", "Fuel Portion", "Run For Your Life"]
            }]);
        if (ask.options === "Atack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(`you lose beter luck next time!`);
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log(`you Win!`);
                    process.exit();
                }
            }
        }
        if (ask.options === "Fuel Portion") {
            P1.fuelIncrease();
            console.log(`${P1.name} your heath portion fuel is${P1.fuel}`);
        }
        if (ask.options === "Run For Your Life") {
            console.log(`you lose beter luck next time!`);
            process.exit();
        }
    }
    // Zombi;
    if (Opponent.select === "Zombi") {
        let ask = await inquirer.prompt([{
                name: "options",
                type: "list",
                message: "select your opponent",
                choices: ["Atack", "Fuel Portion", "Run For Your Life"]
            }]);
        if (ask.options === "Atack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(`you lose beter luck next time!`);
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                if (O1.fuel <= 0) {
                    console.log(`you Win!`);
                    process.exit();
                }
            }
        }
        if (ask.options === "Fuel Portion") {
            P1.fuelIncrease();
            console.log(`${P1.name} your heath portion fuel is${P1.fuel}`);
        }
        if (ask.options === "Run For Your Life") {
            console.log(`you lose beter luck next time!`);
            process.exit();
        }
    }
} while (true);
