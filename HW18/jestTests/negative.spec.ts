import { TestStrings } from "../TestStrings";

describe ("Negative tests.", () => {

    test("1. SymbolCount function. Index > string.lenght.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Index is incorrect!";
        const actualRes = testObject.symbolCount("strings", 20);
        expect(actualRes).toBe(expectedRes);
    })

    test("2. SymbolCount function. Index < string.lenght.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Index is incorrect!";
        const actualRes = testObject.symbolCount("strings", -2);
        expect(actualRes).toBe(expectedRes);
    })

    test("3. SubStrCount function. Substr is empty", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.subStrCount("str with some subs in str", "");
        expect(actualRes).toBe(expectedRes);
    })

    test("4. SubStrCount function. String is empty", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.subStrCount("", "str");
        expect(actualRes).toBe(expectedRes);
    })

    test("5. SubStrCount function. String and substring are empty", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.subStrCount("", "");
        expect(actualRes).toBe(expectedRes);
    })

    test("6. DeleteExclude function. String is empty.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.deleteExclude("", "3", 1);
        expect(actualRes).toBe(expectedRes);
    })

    test("7. DeleteExclude function. Substring is empty.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect income string";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "", 1);
        expect(actualRes).toBe(expectedRes);
    })

    test("8. DeleteExclude function. Incorrect index: < 0.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Incorrect index!";
        const actualRes = testObject.deleteExclude("3 str for 3 excercise 3", "3", -1);
        expect(actualRes).toBe(expectedRes);
    })

    test("9. ReplaceSymbols function. Empty array.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Enter valid arrays!";
        const actualRes = testObject.replaceSymbols("string", [1,2,3], []);
        expect(actualRes).toBe(expectedRes);
    })

    test("10. ReplaceSymbols function. Empty string.", () => {
        const testObject = new TestStrings;
        const expectedRes = "Income string is empty!";
        const actualRes = testObject.replaceSymbols("", [4,2,1], [1,2,3]);
        expect(actualRes).toBe(expectedRes);
    })
});

