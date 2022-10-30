// #### Task 1 Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

const vowelsArr: string[] = ["a","e","i","o","u","A","E","I","O","U"];

const trollString = "This website is for losers LOL!";
function removeVowels(str: string): string {
    let arr = str.split("");
    let filtredArr = arr.filter(el => (!vowelsArr.includes(el)));
    return filtredArr.join("");
}

console.log(removeVowels(trollString));