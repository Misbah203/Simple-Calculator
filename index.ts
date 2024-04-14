#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "fisrtNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Division", "Multiplication"],
  },
]);
console.log(answer)

if (answer.operator==="Addition"){
    console.log( answer.fisrtNumber + answer.secondNumber)
} else if (answer.operator==="Subtraction") {
    console.log( answer.fisrtNumber - answer.secondNumber)
} else if (answer.operator==="Multiplication") {
    console.log( answer.fisrtNumber * answer.secondNumber)
} else if (answer.operator==="Division") {
    console.log( answer.fisrtNumber / answer.secondNumber)
} else {
    console.log("Please select valid operator")
}

