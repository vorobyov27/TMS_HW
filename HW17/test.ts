import { Calculator } from "./calculator.js";


function testAdd (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'add').start()
    if(actual === expected) console.log(`Passed test for ADD ${arg1} + ${arg2} = ${expected}, OK `);
    //else throw new Error(`Failed test for ADD ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else if (isNaN(arg1)||isNaN(arg2)) {
        console.log(`Incorrect inputs. Inputs should be number.`)
    }
    else console.log(`Failed test for ADD ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

function testSubstract (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'substract').start()
    if(actual === expected) console.log(`Passed test for SUBSTRACT ${arg1} - ${arg2} = ${expected}, OK `);
    else if (isNaN(arg1)||isNaN(arg2)) {
        console.log(`Incorrect inputs. Inputs should be number.`)
    }
    //else throw new Error(`Failed test for SUBSTRACT ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for SUBSTRACT ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

function testMultiply (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'multiply').start()
    if(actual === expected) console.log(`Passed test for MULTIPLY ${arg1} * ${arg2} = ${expected}, OK `);
    else if (isNaN(arg1)||isNaN(arg2)) {
        console.log(`Incorrect inputs. Inputs should be number.`)
    }
    //else throw new Error(`Failed test for MULTIPLY ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for MULTIPLY ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

function testDivide (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'divide').start()
    if(actual === expected) console.log(`Passed test for DIVIDE ${arg1} / ${arg2} = ${expected}, OK `);
    else if (isNaN(arg1)||isNaN(arg2)|| arg2 === 0) {
        console.log(`Incorrect inputs. Inputs should be number. arg2 cannot be 0`)
    }
    //else throw new Error(`Failed test for DIVIDE ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for DIVIDE ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

function testPower (arg1: number, arg2: number, expected: number) {
    const actual = new Calculator([arg1,arg2], 'power').start()
    if(actual === expected) console.log(`Passed test for POWER ${arg1} ** ${arg2} = ${expected}, OK `);
    else if (isNaN(arg1)||isNaN(arg2)) {
        console.log(`Incorrect inputs. Inputs should be number.`)
    }
    //else throw new Error(`Failed test for POWER ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
    else console.log(`Failed test for POWER ${arg1}, ${arg2}, Incorrect result: ${actual} != expected ${expected}, FAIL`)
}

testAdd(1,2,3);
testAdd(0,0,0);
testAdd(NaN,1,NaN);
testAdd(1,NaN,NaN);

testSubstract(5,2,3);
testSubstract(0,0,0);
testSubstract(NaN,1,NaN);
testSubstract(5,NaN,NaN);

testMultiply(2,3,6);
testMultiply(0,1,0);
testMultiply(NaN,3,NaN);
testMultiply(1,NaN,NaN);

testDivide(10,5,2);
testDivide(0,2,0);
testDivide(NaN,5,NaN);
testDivide(10,0,NaN);

testPower(2,3,8);
testPower(2,0,1);
testPower(NaN,3,NaN);
testPower(10,NaN,NaN);