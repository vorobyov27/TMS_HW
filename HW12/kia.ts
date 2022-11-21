import {Car} from "./mainCar.js";
import {Bills} from "./bills.js";

class Kia extends Car {
    maxFuel: number;
    fuelPer100: number;
    fuelReserve: number;
    fuelType: string;
    constructor(maxFuel: number, fuelPer100: number, fuelReserve: number, fuelType: string) {
        super();
        this.maxFuel = maxFuel;
        this.fuelPer100 = fuelPer100;
        this.fuelReserve = fuelReserve;
        this.fuelType = fuelType;
    }
}

const rio = new Kia(45, 6.7, 20, "benz95");
rio.drive(2000);
console.log("Total bill is: " + Bills.getBill("fuel"))