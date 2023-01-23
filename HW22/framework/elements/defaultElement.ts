import { By, until } from 'selenium-webdriver';
import { DriverManager } from '../helpers/driverManager';

export abstract class DefaultElement {
    protected driver = DriverManager.driver;

    constructor(private readonly selector: By) {
    }

    protected get element() {
        return this.driver.findElement(this.selector);
    }

    public click() {
        this.driver.wait(until.elementIsVisible(this.element))
        return this.element.click();
    }

    public getAttribute(attributeName: string) {
        return this.element.getAttribute(attributeName);
    }

    public waitForDisplayed() {
        return this.driver.wait(until.elementIsVisible(this.element));
    }

    public getText() {
        return this.element.getText();
    }
}