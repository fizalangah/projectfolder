#!/usr/bin/env node
import inquirer from "inquirer";
let currencyData = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.5,
    AUD: 1.31,
    CAD: 1.25,
    CHF: 0.92,
    CNY: 6.44,
    INR: 75.1,
    PKR: 177.5,
};
const curency = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: " enter from curency",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: " enter To curency",
        choices: ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR", "PKR"]
    },
    { name: "amount",
        type: "number",
        message: "Enter your amount "
    }
]);
let fromCurrency = currencyData[curency.from];
let toCurrency = currencyData[curency.to];
let amount1 = curency.amount;
let baseCurency = amount1 / fromCurrency;
let currencyConvertor = baseCurency * toCurrency;
console.log(currencyConvertor);
