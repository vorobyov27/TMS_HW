import { DriverManager } from './driverManager';

export class Browser {
    private static driver = DriverManager.driver;

    public static close() {
        return this.driver.quit();
    }

    public static openUrl(url: string) {
        return this.driver.get(url);
    }

    public static async switchToFrame() {
        await this.driver.switchTo().frame(0);
    }

    public static async switchToWindow() {
        await this.driver.switchTo().defaultContent();
    }
}