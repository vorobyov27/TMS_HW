class Calculator {
    dataArr: number[];
    operation: string;

    constructor(dataArr: number[], operation: string) {
        this.dataArr = dataArr;
        this.operation = operation;
    }

    add(a: number, b:number): number | string {
        if (isNaN(a)||isNaN(b)) {
            return `Incorrect inputs. Inputs should be number.`;
        }
        return a+b;
    } 

    substract(a: number, b:number): number | string {
        if (isNaN(a)||isNaN(b)) {
            return `Incorrect inputs. Inputs should be number.`;
        }
        return a-b;
    }

    multiply(a: number, b:number): number | string {
        if (isNaN(a)||isNaN(b)) {
            return `Incorrect inputs. Inputs should be number.`;
        }
        return a*b;
    }

    divide(a: number, b:number): number | string {
        if (isNaN(a)||isNaN(b) || b === 0) {
            return `Incorrect inputs. Inputs should be number. arg2 cannot be 0`;
        }
        return a/b;
    }

    power(a: number, b:number): number | string {
        if (isNaN(a)||isNaN(b)) {
            return `Incorrect inputs. Inputs should be number.`;
        }
        return a ** b;
    }

    start(): number | string {
        let result;
        switch(this.operation) { 
            case 'add': { 
                result = this.add(this.dataArr[0], this.dataArr[1]);
                break; 
            } 
            case 'substract': { 
                result = this.substract(this.dataArr[0], this.dataArr[1]);
                break; 
            }
            case 'multiply': { 
                result = this.multiply(this.dataArr[0], this.dataArr[1]);
                break; 
            } 
            case 'divide': { 
                result = this.divide(this.dataArr[0], this.dataArr[1]);
                break; 
            } 
            case 'power': { 
                result = this.power(this.dataArr[0], this.dataArr[1]);
                break; 
            }

            default: { 
               throw new Error("Incorrect operation");
            }
        } 
        return result;
    }
}

export {Calculator}