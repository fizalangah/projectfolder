#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userinput",
    type: "number",
    message: "plz enter the amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return ("enter a valid number");
        }
        else if (input > 60) {
            return ("second must be in 60");
        }
        else {
            return true;
        }
    }
});
let input = res.userinput;
function strtTimer(value) {
    const initTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(initTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("time has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (36000 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
strtTimer(input);
