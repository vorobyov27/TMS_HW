//  Task 1
// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.
// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс 🐒 
// Посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. 
// А если какой-то из постов не загрузиться, нам тогда необходимо  вывести в консоль ошибку.

// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты, или больше постов или меньше.
// Для получения постов использовать https://jsonplaceholder.typicode.com/posts
// Задача может бы ть выполнена через https://jsonplaceholder.typicode.com/comments?postId=1 либо через setTimeout.
// ###### Реализуйте задачу двумя способами:
// - Promise chaining
// - Async / await
import fetch from "node-fetch";
const targetIds: number [] = [15, 23, 7, 3];

type PostT = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const urlPosts: string = "https://jsonplaceholder.typicode.com/posts";
await fetch(urlPosts)
.then(resp => resp.json())
.then(resp => resp as PostT[])
.then(resp => {
    for (let i = 0; i<targetIds.length; i++) {
        console.log(resp.filter(obj => obj.id === targetIds[i]))
    }
})
.catch(err => {
    console.log(`Error while getting posts`)
})