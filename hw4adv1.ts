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
            let userInput = readlineHw4.question("Enter any string(5-15 symbols) or any number(form 5 to 15): ");
            let numericUserInput = +userInput;
            let tryCount: number;
            let correctGuess: boolean = false;
            let randomArrInd: number;
            let messageToAsk: string;
            let maxArrInd: number = 0;
            let targetSymbol: string;
            
            // развилка: является ли ввод игрока строкой
            if (isNaN(numericUserInput)) {
                // Если строка: вычисляем максимальный номер символа, вычисляем рандомный символ строки.
                console.log("User input is a string!");
                maxArrInd = userInput.length > 15 ? 15 : userInput.length;
                randomArrInd = Math.floor(Math.random() * maxArrInd);
                messageToAsk = "Guess the symbol";

                targetSymbol = userInput[randomArrInd];
            } else {
                // Если число: вычисляем, ввёл ли игрок число больше 15, получаем рандомное число в зависимости от ввода
                console.log("User input is a number!");
                messageToAsk = "Guess the number";
                maxArrInd = numericUserInput > 15 ? 15 : numericUserInput;
                targetSymbol = (Math.floor(Math.random() * +maxArrInd) + 1).toString();
            }
            tryCount = Math.floor(maxArrInd/3);

            // предлагаем игроку угадать число
            for (let j:number = 1; j <=tryCount; j++) {
                let guessChar: string = readlineHw4.question(`${messageToAsk}. Attempt #${j} from ${tryCount}: `);
                if (guessChar == targetSymbol){
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
            isCorrectMenuItem = true;
            break;

        default: {
            console.clear();
            console.log("Incorrect menu item. Try again");
        }
    }
}
