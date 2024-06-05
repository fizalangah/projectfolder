//  import inquirer from "inquirer";
//  type data = {
//     username : string,
//     password: string,
//  }
//  const mydata:data[] = [];
// let exit = false
// do {
// const actions = await inquirer.prompt([
//     {
//         name: "actions1",
//         type: "list",
//         message: " chose one action",
//         choices: ["singUp","singIn","Exit" ]
//     }
// ]);
// if (actions.actions1 ==="singUp") {
//     await singUpdata()
// } else if(actions.actions1 ==="singIn"){
//     await signIn()
// }else if (actions.actions1 =="Exit") {
//     exit = true
//     console.log("good bye")
// }} while (!exit);
//  async function singUpdata() {
//     const singUp = await inquirer.prompt([{
//         name: "username",
//         type: "input",
//         message: "enter username or email",
//     },
// {
//    name: "password" ,
//    type: "password",
//    message: "creat a strong pasword"
// }])
// let name =singUp.username
// let pass = singUp.password
// mydata.push(name,pass)
// console.log("signup successfuly")
// console.log(...mydata)
//  }
//  async function signIn() {
//  const singIn = await inquirer.prompt([
//     {
//       name: "username",
//       type: "input",
//       message: "Enter username or email:",
//     },
//     {
//       name: "password",
//       type: "password",
//       message: "Enter your password:",
//     },
//   ]);
//   const isAuthenticated = mydata.some((user) => user.username === singIn.username);
//   //console.log("login successfully")
//   if (isAuthenticated !=mydata.some((user) => user.username === singIn.username)) {
//     console.log("inccorect")
//   }else if(isAuthenticated ==mydata.some((user) => user.password === singIn.password)){
//     console.log("login successfully")
//   }
//   }
import inquirer from "inquirer";
const userData = [];
let exit = false;
do {
    const { action } = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Choose one action",
            choices: ["SignUp", "SignIn", "Exit"]
        }
    ]);
    switch (action) {
        case "SignUp":
            await signUp();
            break;
        case "SignIn":
            await signIn();
            break;
        case "Exit":
            exit = true;
            console.log("Goodbye!");
            break;
    }
} while (!exit);
async function signUp() {
    const signUpData = await inquirer.prompt([
        {
            name: "username",
            type: "input",
            message: "Enter username or email:"
        },
        {
            name: "password",
            type: "password",
            message: "Create a strong password:"
        }
    ]);
    userData.push(signUpData);
    console.log("Sign up successful!");
}
async function signIn() {
    const signInData = await inquirer.prompt([
        {
            name: "username",
            type: "input",
            message: "Enter username or email:"
        },
        {
            name: "password",
            type: "password",
            message: "Enter your password:"
        }
    ]);
    let user = userData.find((u) => u.username === signInData.username);
    if (user) {
        if (user.password === signInData.password) {
            console.log("login successfuly");
        }
        else {
            console.log("inccorect password");
        }
    }
    else {
        console.log("user not found");
    }
    // const user = userData.find(u => u.username === signInData.username);
    // if (user) {
    //     if (user.password === signInData.password) {
    //         console.log("Login successful!");
    //     } else {
    //         console.log("Incorrect password.");
    //     }
    // } else {
    //     console.log("User not found. Please sign up.");
    // }
}
