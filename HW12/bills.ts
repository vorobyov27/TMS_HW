// #### Task 2 
// Создайте класс Bills в отдельном файле с:
// - приватным static полем, содержащим суммы долгов 
// - публичный static методам getBill (с параметром типа string). Возвращает сумму по счету параметра (вроде fuel, flat rent и тд)
// - addBill (параметры string и number). Добавляет к счету string сумму number.
// Создайте enum FuelCost, в котором поместите несколько видов топлива и их цену
// Для каждого класса создайте поле `fuelType`;
// В методе `refuel` добавьте расчет суммы за топливо с учетом типа топлива и заправляемого объёма (до заправки в машине может оставаться топливо)
// Создайте класс Bills в отдельном файле.

enum FuelCost {
    benz92 = 2.36,
    benz95 = 2.46,
    benz98 = 2.68,
    diesel = 2.46
}

class Bills {
    private static billSum: number;

    public static getBill(billType: string): number {
        console.log("Not implemented")
        return 0
    }

    public static addBill(billType: string, billAmount: number): void {
        console.log("Not implemented")
    }
}

export {FuelCost, Bills}