#! /usr/bin/env node
// creating calculatorusing inquirer
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "Enter firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter secondnumber", type: "number", name: "secondnumber" },
    {
        message: "Select one Operator to performe Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponentiation()"],
    }
]);
// Conditional statements If-Else for performing operations
if (answers.operator === "Addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else if (answers.operator === "Modulus") {
    console.log(answers.firstnumber % answers.secondnumber);
}
else if (answers.operator === "Exponentiation()") {
    (answers.firstnumber ** answers.secondnumber);
}
;
