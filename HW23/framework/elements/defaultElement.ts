import { Page } from "@playwright/test";

export abstract class DefaultElement {
    readonly page: Page;
    selector: string;

    constructor(page: Page, selector: string){
        this.page = page;
        this.selector = selector;
    }


    // protected get element() {
    //     return this.driver.findElement(this.selector);
    // }

    // public click() {
    //     return this.element.click();
    // }

    // public getAttribute(attributeName: string) {
    //     return this.element.getAttribute(attributeName);
    // }

    // public waitForDisplayed() {
    //     return this.driver.wait(until.elementIsVisible(this.element));
    // }

    // public getText() {
    //     return this.element.getText();
    // }
}