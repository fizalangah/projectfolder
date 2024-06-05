import inquirer from "inquirer";
let userNamedata = ["ali", "fiza", "kanwal", "mehwish", "noor", "zaid"];
const userName = await inquirer.prompt([
    {
        name: "username",
        type: "input",
        message: "write username here",
    }
]);
userNamedata.forEach(names => {
    if (userName.username === names) {
        console.log("not available");
    }
    else {
        console.log("available");
    }
});
