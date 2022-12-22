import { Browser, Builder, By, Condition, Key, until, WebDriver, WebElement } from "selenium-webdriver";
import { DriverManager } from "./driver-manager";

export class elements {
    private static get driver() { return DriverManager.driver };

    public static waitForDisplayed(element: WebElement){
        this.driver.wait(until.elementIsVisible(element))
    }

    public static getElementByCss(selector: string){
        return this.driver.findElement(By.css(selector))
    }

    public static getElementByXpath(selector: string){
        return this.driver.findElement(By.xpath(selector))
    }

    public static getElementsByCss(selector: string){
        return this.driver.findElements(By.css(selector))
    }

    public static getElementsByXpath(selector: string){
        return this.driver.findElements(By.xpath(selector))
    }

    public static waitForPageLoad(){
        while(!this.driver.executeScript('document.readyState === "complete"'));
    }
}