#! /usr/bin/env node

import inquirer from "inquirer";

 type todoData = {
 task: string
 } 

 let mydata:todoData[] = [];
let exit = false
 
do{
     const todo = await inquirer.prompt([
        {
           name: "todos",
           type: "list",
           message: "chose one option",
           choices: ["addTask","removeTask","exit","viewTasks"]
           
        }
         
    ,]);

 if(todo.todos === "addTask"){
    await addTaskfunc()
 } else if(todo.todos === "removeTask"){
  await removeitem();

 } else if(todo.todos === "viewTasks"){
   await viewfunc()
 }
 else if(todo.todos === "exit"){
     exit = true;
     console.log("good bye")
      }} while (!exit);
 

async function addTaskfunc() {
  const addTask1 = await inquirer.prompt([ 
    
    {
        name: "moretask",
        type: "confirm",
        message: "do you want to add any task?"
    },

    {
        name: "question",
        type: "input",
        message: "  add  your tasks"
    },
     ]);
    mydata.push(addTask1.question) 
    // console.log(...mydata)
 } 
 {
 }

async function removeitem() {
  const remove = await inquirer.prompt([
    {
        name:"remove",
        type: "confirm",
        message: "do you want to remove item from todo app?"
    }
  ]);
  mydata.pop();
//   console.log(...mydata)
}

async function viewfunc() {
    console.log("All tasks = " ,...mydata)

}


 