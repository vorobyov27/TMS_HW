// #### Task 2 👨‍🏫 
// Ваша задача - разбить плитку шоколада заданного размера n x m на маленькие квадраты. 
// Каждый квадрат имеет размер 1x1 и не может быть разбит. Реализуйте функцию, которая будет возвращать минимальное количество 
// необходимых надломов.

// Например, если вам дается плитка шоколада размером 2 x 1, вы можете разделить ее на отдельные квадраты всего за один надлом, 
// но для размера 3 x 1 вы должны сделать два надлома.

// Если входные данные недействительны, вы должны вернуть 0 (поскольку надломы не требуются, если у нас нет шоколада для разделения). 
// Ввод всегда будет неотрицательным целым числом.
const readlineChocoBar = require("readline-sync");
let chocoBar: number[] = [0,0];
let divisionNumber: number = 0;

for (let c = 0; c<2; c++){
    chocoBar[c] = +readlineChocoBar.question(`Enter chocolate side #${c+1}: `);
}

function calcDivideNumber(a: number, b:number): number {
    divisionNumber = (a-1)+(a*(b-1));
    if (Number.isNaN(divisionNumber)){
        divisionNumber = 0;
    }
    return divisionNumber;
}

console.log(`Minimal division number is: ${calcDivideNumber(chocoBar[0],chocoBar[1])}`);