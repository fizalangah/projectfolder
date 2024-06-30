#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addstudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programstsrt = async (persons) => {
    do {
        console.log("!Welcom");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "whome would you like to interreact",
            choices: ["staff", "student", "exit"],
        });
        if (ans.select === "staff") {
            console.log("you approach the staff room ,feel fre to ask any question");
        }
        else if (ans.select === "student") {
            const sudentinfo = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "enter the student name with you want to interact",
            });
            const student = persons.students.find((val) => val.name === sudentinfo.student);
            if (!student) {
                const name = new Student(sudentinfo.student);
                persons.addstudent(name);
                console.log(`Hello ${name.name} nice to meet you`);
                console.log("new student added");
                console.log("current student list");
                console.log(persons.students);
            }
            else {
                console.log(`hello i am ${student.name} nice to see you again`);
                console.log("Existing student list");
                console.log(persons.students);
            }
        }
        else if (ans.select === "exit") {
            console.log("exiting the program");
            process.exit();
        }
    } while (true);
};
programstsrt(persons);
