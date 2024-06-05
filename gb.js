import inquirer from "inquirer";
import fs from "fs";
console.log("welcom to the quize");
let appData = JSON.parse(fs.readFileSync("app.json", 'utf-8'));
function displayQuestion(question) {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            message: question.question,
            choices: question.options,
        }
    ]);
}
async function startQuiz() {
    console.log("lets stat the quiz!");
    let score = 0;
    for (const quiz of appData) {
        const answer = await displayQuestion(quiz);
        if (answer.answer === quiz.correctAnswer) {
            console.log('Correct answer!');
            score++;
        }
        else {
            console.log('Wrong answer!');
        }
    }
    console.log(`Quiz ended! Your score: ${score}/${appData.length}`);
}
startQuiz();
// async function totalScore() {
//     let score = 0;
//     for (const quiz of appData) {
//         const answer = await displayQuestion(quiz);
//         if (answer.answer === quiz.correctAnswer) {
//             score++;
//         }
//     }
//     console.log(`Your total score is: ${score}/${appData.length}`);
// }
// 
// async function main() {
//     while (true) {
//         const { action } = await inquirer.prompt([
//             {
//                 type: 'list',
//                 name: 'action',
//                 message: 'What would you like to do?',
//                 choices: [
//                     'Start Quiz',
//                     'Total Score',
//                     'View All Answers',
//                     'Exit'
//                 ]
//             }
//         ]);
//         switch (action) {
//             case 'Start Quiz':
//                 await startQuiz();
//                 break;
//             case 'Total Score':
//                 await totalScore();
//                 break;
//             case 'View All Answers':
//                 await viewAllAnswers();
//                 break;
//             case 'Exit':
//                 console.log('Exiting quiz...');
//                 return;
//         }
//     }
// }
// main();
