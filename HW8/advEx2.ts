// + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
// Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
// Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ```
const inputString: string = "Dermatoglyphics";

function isIsagram(str:string): boolean {
    let arr = str.toLowerCase().split("");

    let isagram = true;
    arr.forEach(function(el:string, i:number, array: string[]){
        // создаём копию массива и вырезаем текущий символ
        let tempArray = arr.slice(0);
        tempArray.splice(i,1);

        // проходим по временному массиву и если вырезанный символ встречается ещё раз - проставлям флаг "изограмма" = false
        tempArray.forEach(function(tempEl: string, j:number, tempArray: string[]){
            if (el === tempEl) {
                isagram = false;
            }
        })
    });
    return isagram;
}

console.log("Is string isagram?: "+isIsagram(inputString));