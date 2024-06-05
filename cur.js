// import readline from "readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const quotes = [
//   "Believe you can and you're halfway there. - Theodore Roosevelt",
//   "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
//   "The only way to do great work is to love what you do. - Steve Jobs",
//   "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
//   "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
// ];
// const getRandomQuote = () => {
//   return quotes[Math.floor(Math.random() * quotes.length)];
// };
// rl.question("Press enter to get a quote: ", () => {
//   console.log(getRandomQuote());
//   rl.close();
// });
// rl.on("close", () => {
//   console.log("\nGoodbye!");
//   process.exit(0);
// });
import inquirer from "inquirer";
const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
];
const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};
const main = async () => {
    const qouteData = await inquirer.prompt([
        {
            name: "qoute",
            type: "confirm",
            message: "Do you want to see a quote? If yes, press y",
        },
    ]);
    if (qouteData.qoute) {
        const randomQuote = getRandomQuote();
        console.log(randomQuote);
    }
};
main();
