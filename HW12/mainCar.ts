// Создайте абстрактный класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям. 
// Класс Car включает:
// - абстрактные поля: максимальный объем топливного бака, расход топлива на 100км, запас топлива (`fuelReserve`) - 
// поля инициализируются в конструкторе дочерних классов
// - метод `drive` (не абстрактный), который принимает расстояние в км, отнимает от `fuelReserve` количество затраченного топлива,
// в случае, если расстояние невозможно проехать с текущим запасом топлива, вызывается другой метод - `refuel` (заправиться) столько раз, 
// сколько необходимо для того, чтобы проехать расстояние
// Метод `refuel` имеет необязательный параметр количества топлива. Если он не указан, то заправляется полный бак
// import { FuelCost } from "./bills";
enum FuelCost {
    benz92 = 2.36,
    benz95 = 2.46,
    benz98 = 2.68,
    diesel = 2.46
}

export abstract class Car {
    abstract maxFuel: number;
    abstract fuelPer100: number;
    abstract fuelReserve: number;
    abstract fuelType: string;

    drive(distance: number) {
        const calcFuel = this.fuelReserve - ((distance / 100)*this.fuelPer100);
        if (calcFuel < 0){
            const fuelIndex = Math.abs(Math.floor(calcFuel / this.maxFuel));
            for (let i = 0; i< fuelIndex; i++) {
                this.refuel()     
            }
            console.log(`Drive with refuel count = ${fuelIndex}, distance = ${distance}`)
        } else console.log(`Drive without refuel, ${distance} km...`)
    }

    refuel(fuelAmount?: number){
        if ((fuelAmount !== null) && (fuelAmount <= this.maxFuel)) {
            this.fuelReserve = fuelAmount;
            console.log(`Add ${fuelAmount} liters. Fuel bill = ${FuelCost[this.fuelType]*fuelAmount}`)
        } else if ((fuelAmount == null) || (fuelAmount > this.maxFuel)) {
            this.fuelReserve = this.maxFuel;
            console.log(`Added maximum fuel! Fuel bill = ${FuelCost[this.fuelType]*this.maxFuel}`);
        }
    }
}