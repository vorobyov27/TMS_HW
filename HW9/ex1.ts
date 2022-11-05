// Написать класс, принимающий строку (`str`), число (`symNum`) и символ (`sym`)
// создать геттер, который возвращает есть ли в строке `sym`
// геттер, который возвращает символ `symNum` в строке `str`. 
// Если `symNum` больше, чем символов в `str`, возвращает случайный символ
// метод, который принимает коллекцию Map со строками, 
// и возвращает строку `str`, где замененена каждая 0 подстрока из Map на 1
// пример: `str = '123qweasd12', Map([['12', '-'], ['ea', '*']]), result = '-3qw*sd-'`
// вывести все созданные геттеры и поле `str`
const incMap = new Map <string, string> ([['12', '-'], ['ea', '*']]);
class HW9Class {
    str: string
    symNum: number
    sym: string

    constructor (str: string, symNum: number, sym: string) {
        this.str = str
        this.symNum = symNum
        this.sym = sym
    }

    get isSymInStr(): boolean {
        return this.str.includes(this.sym)
    }

    get getSymNum(): string {
        if (this.symNum > this.str.length) {
            console.log(`return random symbol from string`)
            return this.str[Math.random()*this.str.length]
        } else return this.str[this.symNum]
    }

    replaceTarget(incomeMap: Map <string,string>): string {
        let newStr: string = ""
        for (let [key, value] of incomeMap){
            if (this.str.indexOf(key)>0) {
                this.str = this.str.split(key).join(value)
            }
        }
        return this.str
    }

}

const myClass = new HW9Class("q12wert12ycxvb ea cxveab", 2, "t");
console.log(myClass.isSymInStr)
console.log(myClass.getSymNum)
console.log(myClass.replaceTarget(incMap))