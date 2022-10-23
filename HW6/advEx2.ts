// #### Task 2 🖥

// Даны два одинаковых обьекта. Сравните их так чтобы они были равны (должно работать при изменении количества и названий свойств объекта)
//     let student1 = {
//         name: 'Polina',
//         age: 27,
//     }

//     let student2 = {
//         name: 'Polina',
//         age: 27,
//     }
    let student1: object = {
        name: 'Polina',
        age: 27
    };
    let student2: object = {
        name: 'Polina',
        age: 27
    };

    function compareObj(obj1: object, obj2: object): boolean {
        let compareResults = true;
        for (const key in obj1) {
            if (obj1[key] !== obj2[key]) compareResults = false;
        }
        return compareResults;
    }

    console.log(compareObj(student1, student2));