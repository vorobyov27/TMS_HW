import { Calculator } from "./calculator.js";


function testAdd (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'add').start()
    if(actual === expected) console.log(`Passed test for ADD ${arg1} + ${arg2} = ${expected}, OK `);
    //else throw new Error(`Failed test for ADD ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for ADD ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

function testSubstract (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'substract').start()
    if(actual === expected) console.log(`Passed test for SUBSTRACT ${arg1} + ${arg2} = ${expected}, OK `);
    //else throw new Error(`Failed test for SUBSTRACT ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for SUBSTRACT ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

function testMultiply (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'multiply').start()
    if(actual === expected) console.log(`Passed test for MULTIPLY ${arg1} + ${arg2} = ${expected}, OK `);
    //else throw new Error(`Failed test for MULTIPLY ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for MULTIPLY ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

function testDivide (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'divide').start()
    if(actual === expected) console.log(`Passed test for DIVIDE ${arg1} + ${arg2} = ${expected}, OK `);
    //else throw new Error(`Failed test for DIVIDE ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for DIVIDE ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

function testPower (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'power').start()
    if(actual === expected) console.log(`Passed test for POWER ${arg1} + ${arg2} = ${expected}, OK `);
    //else throw new Error(`Failed test for POWER ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for POWER ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

testAdd(1,2,3);
testAdd(1,2,5);
testSubstract(5,2,3);
testSubstract(10,1,2);
testMultiply(2,3,6);
testMultiply(2,3,10);
testDivide(10,5,2);
testDivide(10,5,3);
testPower(2,3,8);
testPower(2,3,10)