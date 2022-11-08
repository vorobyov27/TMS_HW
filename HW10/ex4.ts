// Опишите интерфейс IElectronics. 
// У интерфейса есть свойства price - число, electrType - строка, 
//manufacturer - строка и метод turnOn. Сделать 2-3 класса, например, телефон, электропила и тп, реализующие интрефейс.
// Создать функцию, которая принимает параметром любой класс, реализующий IElectronics
// и выводит 3 свойства и вызывает метод turnOn.

interface IElectronics {
    price: number;
    electrType: string;
    manufacturer: string;
    turnOn(): void;
}

const phone: IElectronics = {
    price: 2000,
    electrType: "wireless",
    manufacturer: "Nokia",
    turnOn() {
        console.log("Ring-Ring!")
    }
}

const saw: IElectronics = {
    price: 1500,
    electrType: "cable connection",
    manufacturer: "bocsh",
    turnOn() {
        console.log("wzzzzz!")
    }
}

const doorBell: IElectronics = {
    price: 20,
    electrType: "wireless",
    manufacturer: "siemens",
    turnOn() {
        console.log("ding!")
    }
}

function checkItemInfo (item: IElectronics):void {
    console.log(`price = ${item.price}`)
    console.log(`electrType = ${item.electrType}`)
    console.log(`manufacturer = ${item.manufacturer}`)
    item.turnOn()
}

checkItemInfo(phone)
checkItemInfo(saw)
checkItemInfo(doorBell)