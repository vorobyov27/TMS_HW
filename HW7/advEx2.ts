// Task 2

//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]

// Выведите в консоль среднее значение чисел в многомерном массиве.
    const matrix = [
        [12, 98, 78, 65, 23],
        [54, 76, 98, 43, 65],
        [13, 324, 65, 312],
        [9092, 22, 45, 90000],
    ];

function calculateMiddleValue (arr: number[][]) {
    let totalArr: number[] = [];
    let midValue: number;

    for (let i = 0; i < arr.length; i++){
        midValue = 0;
        for (let j = 0; j < arr[i].length; j++){
            midValue +=arr[i][j];
        }
        totalArr.push(midValue/arr[i].length);
    };
    console.log("Total array = " + totalArr);
}

calculateMiddleValue(matrix);