import {Car} from "./mainCar.js";
import {Bills} from "./bills.js";

class Wv extends Car {
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

const passat = new Wv(66, 8, 20, "benz92");
passat.drive(3000);
console.log("Total bill is: " + Bills.getBill("fuel"))