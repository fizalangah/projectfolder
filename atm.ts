#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
console.log("your current balance is", myBalance)
let myPin = 1010;

const atmPin = await inquirer.prompt({
    name : "pin",
    type : "number",
    message: "enter your pin"
})


if (atmPin.pin === myPin) {
    console.log("your pin is correct")
   const choseOperations  = await inquirer.prompt({
    name : "operations",
    message : "what can you do? ",
    type : "list",
    choices: ["withdra" ,"checkbalanc", "fastcash", ]
   });
   
  
   
 if(choseOperations.operations === "withdra") {
    
    const myamount = await inquirer.prompt({
        name : "amount",
        type : "number",
        message : "enter your amount"
    });
         
  if(myamount.amount <= myBalance){
      myBalance -= myamount.amount;
      console.log("your remaining balance",myBalance)
 
    }else if(myamount.amount > myBalance){
        console.log("insuficient balance")
    }  
    
 }       // balane chacking;
 else if(choseOperations.operations === "checkbalanc")  {
    console.log(`your  total balance is ${myBalance} `)
} 

 
if(choseOperations.operations === "fastcash"){

 
const veryfastcash = await inquirer.prompt({
    name : "myfastcash",
    type : "list",
    message : "chose one option",
    choices : ["1000" , "2000" ,"5000"]
})



if(veryfastcash.myfastcash === "1000"){
    myBalance -= veryfastcash.myfastcash
    console.log(`your remaining balance is ${myBalance}`)

} else if(veryfastcash.myfastcash ===  "2000"){
    myBalance -= veryfastcash.myfastcash;
    console.log(`your remainig balance is${myBalance} `)

}else if(veryfastcash.myfastcash === "5000"){
    myBalance -= veryfastcash.myfastcash;
    console.log(`your remaining balance is ${myBalance}`)
} 

}

 
}else{
    console.log("incorect pin");
}