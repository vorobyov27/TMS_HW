// + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
// Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
// Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ```
const inputString: string = "moOse";

function isIsagram(str:string): boolean {
    let arr = str.toLowerCase().split("");

    for (let i = 0; i< arr.length; i++) {
        // создаём копию массива и вырезаем текущий символ
        let tempArray = arr.slice(0);
        tempArray.splice(i,1);

        // проходим по временному массиву и если вырезанный символ встречается ещё раз - проставлям флаг "изограмма" = false
        for (let j = 0; j<tempArray.length; j++){
            if (arr[i] === tempArray[j]) {
                return false
            }
        }
    }
    return true;
}

console.log("Is string isagram?: "+isIsagram(inputString));