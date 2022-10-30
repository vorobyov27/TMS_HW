// Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей
// (в противном случае результат неверный, вывысти, что прислали неверные результаты).
// Жаль что нам присылают результат матча в формате:
// {
// 	team1: "liverpool",
// 	team2: "chelsea",
// 	matchResult: "0:0",
// 	penalty: "10:11"
// }
// ведь нам надо это вывести в консоль словами:
// -кто сколько забил
// -если были пенальти, то счет по ним (свойства в объекте может не быть)
// -результат матча - чья победа/поражение/ничья
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль. 

const matchResult1 = {
    team1: "liverpool",
    team2: "chelsea",
    matchResult: "2:2",
    penalty: "11:10"
}

function getMatchGoals(obj: {team1: string; team2: string; matchResult: string; penalty?: string}) {
// Получаем кол-во голов первой и второй команды
    const firstGoals = obj.matchResult.split(":")[0];
    const secondGoals = obj.matchResult.split(":")[1];
    // Проверяем, валидны ли пришедние рузультаты матча: если нет - выводим ошибку.
    if ((+firstGoals<=9) && (+secondGoals <=9)) {
        // Проверяем были ли пенальти. Если были, то кто победил по ним.
        if ("penalty" in obj){
            //@ts-ignore
            const firstPenalty = obj.penalty.split(":")[0];
            //@ts-ignore
            const secondPenalty = obj.penalty.split(":")[1];
            console.log(`Team \"${obj.team1}\" scores ${firstGoals} in main time, team \"${obj.team2}\" scores ${secondGoals} in main time`);
            console.log(`Scores in penalty is: ${obj.penalty}`);
            calculateWinner(+firstPenalty, +secondPenalty, obj.team1, obj.team2)
        } else {
            // Если серий пенальти не было - выводим кто победил по основному счёту.
            console.log(`Team \"${obj.team1}\" scores ${firstGoals}, team \"${obj.team2}\" scores ${secondGoals}`);
            calculateWinner(+firstGoals, +secondGoals, obj.team1, obj.team2);
        }
    } else console.log("Incorrect results in input!");
}

// функция вычисления победителя.
function calculateWinner(first: number, second: number, team1: string, team2: string) {
    if (first > second) {
        console.log(`${team1} wins!`);
    }  else if (second > first) {
        console.log(`${team2} wins!`);
    } else {
        console.log(`Draw!`);
    }
}

getMatchGoals(matchResult1);