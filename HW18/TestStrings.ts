import { assert } from "console";

class TestStrings {

    symbolCount(mainStr: string, ind: number): string {
        if (ind<0 || ind > mainStr.length -1) {
            return "Index is incorrect!"
        } else {
            let totalCount: number = 0;
            const targetSymbol: string = mainStr[ind];
            for (let i = 0; i < mainStr.length; i++) {
                if (mainStr[i] === targetSymbol) {
                    totalCount++
                }
            }
            return targetSymbol + totalCount.toString();
        }
    }

    subStrCount (mainStr: string, subStr: string): number[] | string {
        if (mainStr.length < 1 || subStr.length < 1) {
            return "Incorrect income string"
        } else {
            let totalArray = [];
            let position = 0;
            while(true) {
                let targetPosition = mainStr.indexOf(subStr, position);
                if (targetPosition === -1) {
                    break
                }
                totalArray.push(targetPosition);
                position = targetPosition + 1;
            }
            return totalArray;
        }
    }

    deleteExclude (mainStr: string, subStr: string, ind: number): string {
        if (mainStr.length < 1 || subStr.length < 1) {
            return "Incorrect income string"
        } else if (ind < 0 || ind > mainStr.length) { 
            return "Incorrect index!"   
        } else {
            let finalString: string = "";
            let startPos: number = 0;
            let targetPos: number = 0;
            let counter: number = 0;
            while (true) {
                targetPos = mainStr.indexOf(subStr, startPos);
                if (targetPos > -1) {
                    finalString += mainStr.slice(startPos, targetPos);
                    if (counter === ind) {
                        finalString += subStr
                    }
                    startPos = targetPos + subStr.length;
                    counter++;
                } else {
                    finalString += mainStr.slice(startPos, mainStr.length);
                    break;
                }
            }
            return finalString;
        }
    }

    replaceSymbols (incomeStr: string, firstArr: number[], secondArr: number[]): string {
        if (firstArr.length < 1 || secondArr.length < 1) {
            return "Enter valid arrays!"
        } else if (incomeStr.length<1) {
            return "Income string is empty!"
        } else {
            let totalStr = incomeStr;
            for (let i = 0; i < firstArr.length; i++) {
                totalStr = totalStr.slice(0, firstArr[i]) + totalStr[secondArr[i]] + totalStr.slice(firstArr[i]+1)
            }
            return totalStr
        }
    }
}

export {TestStrings}