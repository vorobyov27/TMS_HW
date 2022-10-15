// #### Task 18 Advanced 💻
// Вывести сообщение пользователю (отображаться должно в несколько строк): 
// "Введите цифру из меню:
// 1. Калькулятор
// 2. Предсказание
// 3. Игра угадай"
// Пользователь должен ввести число от 1 до 3. 
// Если вводится что-то другое, то отображается "Неправильный ввод. Попробуйте еще раз" и то же самое меню (можно использовать console.clear() для очистки консоли).
// ###### В случае выбора 1 пользователю предлагается ввести 2 числа и действие из списка (можно вывести также в виде выбора пунктов меню):
// Сложение
// Вычитание
// Умножение
// Деление
// Возведение в степень
// Остаток от деления 1 числа на 2
// ###### В случае выбора 2 пользователю последовательно предлагается ввести отчество, возраст и 3 любых животных в формате "конь, пёс, жираф". 
// После вопросов вывести:
// Имя вашего отца начинается с <3-5 первых букв отчества>
// Вы родились в *** году
// Вероятно, но не точно, что в прошлой жизни вы были <одно из введенных животных>
// ###### Пользователю предлагается ввести строку (от 5 до 15 символов) или число (от 5 до 15). Далее пользователь должен угадать:
// Число (n): если число больше 15, то берётся 15, рандомно берется число от 1 до n. 
// Строка (n - длина строки): если строка больше 15 символов, то используются только первые 15, рандомно берется символ строки.
// У пользователя n / 3 (округление в большую сторону) попыток угадать число либо символ.
// При правильном ответе: "Поздравляем, Вы выиграли"
// При неправильном: "А вот и нет. Еще варианты?"
// Если закончились попытки, но ответ неправильный: "В этот раз как-то не удалось, заходите еще"

const readlineHw4 = require("readline-sync");

let isCorrectMenuItem: boolean = false;

while (!isCorrectMenuItem) {
    let userMenuItem: string = readlineHw4.question("Enter menu number: \n1. Calculator \n2. Prediction \n3. Guess game \n: ");
    switch (userMenuItem) {
        case "1":
            let userCalcItem: string = readlineHw4.question("Select needed action: \n1. Plus \n2. Minus \n3. Multiply \n4. Divide \n5. Power \n6. Divide rest from 1 number to 2 \n: ");
            let inputFirstNumber: number = +readlineHw4.question("Enter first number: ");
            let inputSecondNumber: number = +readlineHw4.question("Enter second number: ");
            console.log(`You select operation №${userCalcItem} and numbers ${inputFirstNumber} and ${inputSecondNumber}`);
            isCorrectMenuItem = true;
            break;
        case "2":
            let patrName: string = readlineHw4.question("Enter your patronymic name: ");
            let userAge: number = +readlineHw4.question("Enter your age: ");
            let userAnimals: string = readlineHw4.question("Enter 3 favourite anumals(horse, dog, giraffe) for example: ");
            const fatherNameLetters: string = patrName.slice(0,3);
            let now = new Date();
            const birthYear: number =  now.getFullYear() - userAge;
            const animalArray = userAnimals.split(', ');
            const randomIndex: number = Math.floor(Math.random()*(animalArray.length - 1));

            console.log(`Your father name starts with ${fatherNameLetters}`);
            console.log(`You was born in ${birthYear} year`);
            console.log(`Probably, but not exactly, you was a ${animalArray[randomIndex]} in your previous life!`);

            isCorrectMenuItem = true;
            break;
        case "3":
            // считываем ввод игрока
            let userInput: string = readlineHw4.question("Enter any string(5-15 symbols) or any number(form 5 to 15): ");
            let regexp = /\D/;
            let tryCount: number;
            let correctGuess: boolean = false;
            // развилка: является ли ввод игрока строкой(содержит не цифры) или числом
            if (regexp.exec(userInput) !== null) {
                // разбиваем строку на массив из символов, вычисляем рандомное число до 15
                console.log("User input is a string!");
                const inputArray = userInput.split('');
                let randomArrInd: number;
                // вычисляем, ввёл ли игрок строку больше 15 символов, получаем рандомное число в зависимости от ввода
                if (userInput.length > 15){
                    randomArrInd = Math.floor(Math.random() * 15);
                    tryCount = 5;
                } else { 
                    randomArrInd = Math.floor(Math.random() * +userInput.length);
                    tryCount = Math.floor(userInput.length/3);
                }
                let targetSymbol = inputArray[randomArrInd];

                // предлагаем игроку угадать символ
                for (let j:number = 1; j <=tryCount; j++) {
                    let guessSymb: string = readlineHw4.question(`Try to guess symbol. Attempt #${j} from ${tryCount}: `);
                    if (guessSymb == targetSymbol){
                        console.log("Nice! You've won!");
                        correctGuess = true;
                        break;
                    } else if (!correctGuess && j==tryCount) {
                        console.clear();
                        console.log("You've lost! Try again later!");
                        break;
                    }
                    else console.log("Incorrect. Try again!: ");
                }
            } else {
                // вычисляем, ввёл ли игрок число больше 15, получаем рандомное число в зависимости от ввода
                let randomNumber: number;
                console.log("User input is a number!");
                if (+userInput > 15){
                    randomNumber = Math.floor(Math.random() * 15) + 1;
                    tryCount = 5;
                } else { 
                    randomNumber = Math.floor(Math.random() * +userInput) + 1;
                    tryCount = Math.floor(+userInput/3);
                }
                
                // предлагаем игроку угадать число
                for (let j:number = 1; j <=tryCount; j++) {
                    let guessNum: number = +readlineHw4.question(`Try to guess number. Attempt #${j} from ${tryCount}: `);
                    if (guessNum == randomNumber){
                        console.log("Nice! You've won!");
                        correctGuess = true;
                        break;
                    } else if (!correctGuess && j==tryCount) {
                        console.clear();
                        console.log("You've lost! Try again later!");
                        break;
                    }
                    else console.log("Incorrect. Try again!: ");
                }
            }
            
            isCorrectMenuItem = true;
            break;

        default: {
            console.clear();
            console.log("Incorrect menu item. Try again");
        }
    }
}
