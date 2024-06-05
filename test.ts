import inquirer from "inquirer";
const currencyData:any = {
    USD: 1, 
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.5,
    AUD: 1.31,
    CAD: 1.25,
    CHF: 0.92,
    CNY: 6.44,
    INR: 75.1,
    PKR: 280,  
}


const curency = await inquirer.prompt([
{name: "from",
type: "list",
message: "enter from curency",
choices: ["USD","EUR","GBP","JPY","AUD","CAD","CHF","CNY","INR","PKR"]

},
{name: "to",
type: "list",
message: "enter To curency",
choices: ["USD","EUR","GBP","JPY","AUD","CAD","CHF","CNY","INR","PKR"]
},
{name: "amount",
type: "number",
message: "enter amount"
}
]);

let fromCurrency = currencyData[curency.from]
let toCurrency = currencyData[curency.to];
let amountcurency = curency.amount;
let baseCurency = amountcurency / fromCurrency
let currencyConvertor = baseCurency *toCurrency ;
console.log(currencyConvertor)

