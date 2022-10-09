const readline = require("readline-sync");
let firstNum: number = +readline.question("Enter first number");
let secondNum: number = +readline.question("What number should we minus from previous?");
let thirdNum: number = +readline.question("what number should we plus to previous?");
let fourthNum: number = +readline.question("On what number should we multiply previous value?");
let fifthNum: number = +readline.question("On what number should we divide previous value?");

//count total value
let totalValue = ((((firstNum - secondNum) + thirdNum) * fourthNum) / fifthNum)

//create total string
let totalString = `(((((${firstNum} - ${secondNum}) + ${thirdNum}) * ${fourthNum}) / ${fifthNum}) = ${totalValue}`

console.log('totalString = '+totalString);