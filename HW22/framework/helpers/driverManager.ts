import { Browser, Builder, ThenableWebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';

export class DriverManager {
    private static driverInstance: ThenableWebDriver;

    public static get driver() {
        if(!this.driverInstance) {
            const service = new chrome.ServiceBuilder(path);
            this.driverInstance = new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
            this.driverInstance.manage().setTimeouts({pageLoad: 30000, implicit: 10000});
            this.driverInstance.manage().window().maximize();
        }
        return this.driverInstance;
    }
}