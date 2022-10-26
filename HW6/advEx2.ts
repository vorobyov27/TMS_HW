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
        age: 27,
    };
    let student2: object = {
        name: 'Polina',
        age: 27
    };

    function compareObj(obj1: object, obj2: object): boolean {
        let compareResults = true;
        const arr1 = (Object.values(obj1));
        const arr2 = (Object.values(obj2));
        for (let i: number = 0; i<arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    compareResults = false;
                }
        }
        return compareResults;
    }

    function compareObjEqual(obj1: object, obj2: object): boolean {
        let compareResults = false;
        const obj1String = JSON.stringify(obj1);
        const obj2String = JSON.stringify(obj2);
        if (obj1String === obj2String) {
            compareResults = true;
        }
        return compareResults;
    }
    console.log("Students are equal?: "+compareObjEqual(student1, student2));

//(!compareObj(student1, student2) || !compareObj(student2, student1))? console.log("Students are different!"): console.log("Students are the same!");