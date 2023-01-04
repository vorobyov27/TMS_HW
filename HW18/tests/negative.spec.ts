import { expect } from "chai";
import { TestStrings } from "../TestStrings.js";

describe ("Negative tests.", () => {
    before("Before",async function(){
        console.log("Starting test suit!")
    })

    after("After",async function(){
        console.log("End test suit!")
    })

    it("1. SymbolCount function. Index > string.lenght.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Index is incorrect!";
        const actualRes = testObject.symbolCount("strings", 20);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("2. SymbolCount function. Index < string.lenght.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Index is incorrect!";
        const actualRes = testObject.symbolCount("strings", -2);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("3. SubStrCount function. Substr is empty", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.subStrCount("str with some subs in str", "");
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).to.deep.equal(expectedRes);
    })

    it("4. SubStrCount function. String is empty", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.subStrCount("", "str");
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).to.deep.equal(expectedRes);
    })

    it("5. SubStrCount function. String and substring are empty", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.subStrCount("", "");
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).to.deep.equal(expectedRes);
    })

    it("6. DeleteExclude function. String is empty.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.deleteExclude("", "3", 1);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("7. DeleteExclude function. Substring is empty.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "", 1);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("8. DeleteExclude function. Incorrect index: < 0.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect index!";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "3", -1);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("9. DeleteExclude function. Incorrect index: > string.lenght.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect index!";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "3", -1);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })

    it("10. ReplaceSymbols function. Empty array", () => {
        const testObject = new TestStrings;
        const expectedRes = "Enter valid arrays!";
        const actualRes = testObject.replaceSymbols("string", [], [1,2,3]);
        expect(actualRes, `Expected ${expectedRes} is not equal to actual ${actualRes}`).equals(expectedRes);
    })
});

