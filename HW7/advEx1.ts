// Task 1
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

const readlinePalindrom = require("readline-sync");

let incomeWord: string = readlinePalindrom.question("Enter your word: ");

function isPalindrom(str: string): boolean {
    let palindromFlag = true;
    const leftPart = str.slice(0, Math.floor(str.length/2));
    const rightPart = str.slice( -Math.floor(str.length/2));
    console.log("leftPart = " + leftPart);
    console.log("rightPart = " + rightPart);
    for (let i = 0, j = rightPart.length-1; i <leftPart.length, j > -1; i++, j--){
        if (leftPart[i] !== rightPart[j]) palindromFlag = false;
    }
    return palindromFlag;
}

console.log("Is word palindrome? "+ isPalindrom(incomeWord));