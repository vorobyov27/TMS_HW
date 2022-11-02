// #### Task 2 💻
// Написать класс человека, который принимает имя и рост в метрах в конструкторе
// Класс имеет 1 статическое поле: коэффициент длины шага при беге = 0.65
// И 1 статический метод, который принимает рост в качестве параметра и 
// вычисляет длину шага при ходьбе по формуле `Рост / 4) + 0,37`
// Написать в классе геттер для получения длины шага при беге = `коэффициент длины шага * рост`
// И написать метод, `logWalkStep`, который выводит в консоль `Длина вашего шага ${length}`
// вывести в консоль геттер и вызвать `logWalkStep`

class Man {
    name: string;
    height: number;
    static stepCoeff: number = 0.65;

    constructor(name: string, height: number) {
        this.name = name;
        this.height = height;
    }

    static calculateStep(height: number): number {
        return ((height/4)+0.37)
    }

    get getStepRun(): number {
        return Man.stepCoeff*this.height;
    }

    logWalkStep():void{
        console.log(`Длина вашего шага ${Man.calculateStep(this.height)} см`)
    }
}

const anyMan = new Man("Victor", 170);
console.log(anyMan.getStepRun);
anyMan.logWalkStep();