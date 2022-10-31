// Task 1
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

const readlinePalindrom = require("readline-sync");

let incomeWord: string = readlinePalindrom.question("Enter your word: ");

function isPalindrom(str: string): boolean {
    let palindromFlag = true;
    const mid = Math.floor(str.length/2);
    for (let i = 0; i<mid; i++){
        if (str[i] !== str[str.length-1-i]) {
            palindromFlag =  false;
            break;
        }
    }
    return palindromFlag;
}

console.log("Is word palindrome? "+ isPalindrom(incomeWord));