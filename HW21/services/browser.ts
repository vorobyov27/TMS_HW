import { DriverManager } from './driver-manager';

export class BrowserHelper {
    private static get driver() { return DriverManager.driver };

    public static close() {
        return this.driver.quit();
    }

    public static closeTab() {
        return this.driver.close();
    }

    public static goTo(url: string) {
        return this.driver.get(url)
    }
}