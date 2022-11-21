// Создайте абстрактный класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям. 
// Класс Car включает:
// - абстрактные поля: максимальный объем топливного бака, расход топлива на 100км, запас топлива (`fuelReserve`) - 
// поля инициализируются в конструкторе дочерних классов
// - метод `drive` (не абстрактный), который принимает расстояние в км, отнимает от `fuelReserve` количество затраченного топлива,
// в случае, если расстояние невозможно проехать с текущим запасом топлива, вызывается другой метод - `refuel` (заправиться) столько раз, 
// сколько необходимо для того, чтобы проехать расстояние
// Метод `refuel` имеет необязательный параметр количества топлива. Если он не указан, то заправляется полный бак
import { FuelCost, Bills } from "./bills.js";

export abstract class Car {
    protected abstract maxFuel: number;
    protected abstract fuelPer100: number;
    protected abstract fuelReserve: number;
    protected abstract fuelType: string;

    drive(distance: number) {
        const calcFuel = this.fuelReserve - ((distance / 100)*this.fuelPer100);
        if (calcFuel < 0){
            const fuelIndexFullTank = Math.abs(Math.ceil(calcFuel / this.maxFuel));
            const fuelIndexPartial = Math.abs(calcFuel / this.maxFuel) - fuelIndexFullTank;
            for (let i = 0; i< fuelIndexFullTank; i++) {
                this.refuel()     
            }
            if (fuelIndexPartial !== 0) {
                this.refuel(Math.ceil(fuelIndexPartial*this.maxFuel))
            }
        } else console.log(`Drive without refuel, ${distance} km...`)
    }

    refuel(fuelAmount?: number){
        if ((fuelAmount !== null) && (fuelAmount <= this.maxFuel)) {
            this.fuelReserve = fuelAmount;
            Bills.addBill('fuel', FuelCost[this.fuelType]*fuelAmount)
            console.log(`Add ${fuelAmount} liters. Fuel bill = ${FuelCost[this.fuelType]*fuelAmount}`)
        } else if ((fuelAmount == null) || (fuelAmount > this.maxFuel)) {
            this.fuelReserve = this.maxFuel;
            Bills.addBill('fuel', FuelCost[this.fuelType]*this.maxFuel)
            console.log(`Added maximum fuel! Fuel bill = ${FuelCost[this.fuelType]*this.maxFuel}`);
        }
    }
}