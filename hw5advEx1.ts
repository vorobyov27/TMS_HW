// #### Task 1

// Реализуйте функцию, который принимает 3 целочисленных значения a, b, c. 
// Функция должна возвращать **true**, если треугольник можно построить со сторонами заданной длины, и **false** в любом другом случае.
const readlineTriangle = require("readline-sync");
let trSideArray: number[] = [0,0,0];

function canCreateTriangle(a: number, b: number, c: number): boolean {
    let canCreate: boolean = false;
        if ((a+b>c)&&(a+c>b)&&(b+c>a)) canCreate = true;

    return canCreate;
}

for (let b = 0; b<3; b++){
    trSideArray[b] = +readlineTriangle.question(`Enter triangle side #${b+1}: `);
}

console.log(`Can we create a triangle?: ${canCreateTriangle(trSideArray[0],trSideArray[1],trSideArray[2])}`);