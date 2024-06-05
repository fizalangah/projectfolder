#! /usr/bin/env node
import inquirer from "inquirer";
class student {
    id;
    name;
    courseEnrolled;
    feesAmount;
    constructor(id, name, courseEnrolled, feesAmount) {
        this.id = id,
            this.name = name,
            this.courseEnrolled = courseEnrolled,
            this.feesAmount = feesAmount;
    }
}
let baseId = 10000;
let studentId = "";
let contiEnroledstudent = true;
let students = [];
do {
    let action = await inquirer.prompt({
        type: "list",
        name: "ans1",
        message: "please select an option\n",
        choices: ["enroll a student", "show student status"]
    });
    if (action.ans1 === "enroll a student") {
        let stName = await inquirer.prompt({
            name: "ans2",
            type: "input",
            message: "please enter student name here",
        });
        let studentTrimName = (stName.ans2).trim().toLowerCase();
        let studentNameCheck = students.map(obj => obj.name);
        if (studentNameCheck.includes(studentTrimName) === false) {
            if (studentTrimName !== "") {
                baseId++;
                studentId = "STID" + baseId;
                console.log("\n\t your account has created");
                console.log(`welcon${studentTrimName}!`);
                let course = await inquirer.prompt({
                    name: "ans3",
                    type: "list",
                    message: "please select a course",
                    choices: ["IT", "English", "Maths"]
                });
                let courseFees = 0;
                switch (course.ans3) {
                    case "It":
                        courseFees = 10000;
                        break;
                    case "English":
                        courseFees = 50000;
                        break;
                    case "Maths":
                        courseFees = 70000;
                        break;
                }
                let courseconfirm = await inquirer.prompt({
                    name: "ans4",
                    type: "confirm",
                    message: "do you want to enroll in this course?"
                });
                if (courseconfirm.ans4 === true) {
                    let Student = new student(studentId, studentTrimName, [course.ans3], courseFees);
                    students.push(Student);
                    console.log("you have enrolled in this course");
                }
            }
            else {
                console.log("invalid name");
            }
        }
        else {
            console.log("this name is already exist");
        }
    }
    else if (action.ans1 === "show student status") {
        if (students.length !== 0) {
            let studentNamesCheck = students.map(e => e.name);
            let studentNameSelected = await inquirer.prompt({
                name: "ans5",
                type: "list",
                message: "please select a student name",
                choices: studentNamesCheck
            });
            let foundStuden = students.find(Student => Student.name === studentNameSelected.ans5);
            console.log("student information");
            console.log(foundStuden);
            console.log("\n");
        }
        else {
            console.log("record is empty");
        }
    }
    let userConfirm = await inquirer.prompt({
        name: "ans6",
        type: "confirm",
        message: "do you want to continue?"
    });
    if (userConfirm.ans6 === false) {
        contiEnroledstudent = false;
    }
} while (contiEnroledstudent);
