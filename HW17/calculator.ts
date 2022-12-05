class Calculator {
    dataArr: number[];
    operation: string;

    constructor(dataArr: number[], operation: string) {
        this.dataArr = dataArr;
        this.operation = operation;
    }

    add(a: number, b:number): number {
        return a+b;
    }

    substract(a: number, b:number): number {
        return a-b;
    }

    multiply(a: number, b:number): number {
        return a*b;
    }

    divide(a: number, b:number): number {
        return a/b;
    }

    power(a: number, b:number): number {
        return a ** b;
    }

    start(): number {
        let result: number = 0;
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