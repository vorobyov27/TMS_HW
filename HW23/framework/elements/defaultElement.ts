import { Locator } from "playwright-core";
import { TestPage } from "../helpers/pageSingleton";

export abstract class DefaultElement {
    protected readonly page = TestPage.getInstance();

    public constructor(private readonly locator: string) {
    }

    protected getElement(): Locator {
        return this.page.locator(this.locator);
    }

    public getText() {
        return this.getElement().textContent();
    }

    protected waitForExists() {
        return this.getElement().waitFor({state: 'attached'});
    }

    public get isDisplayed() {
        return this.getElement().isVisible();
    }

    protected async waitForVisible() {
        await this.waitForExists();
        await this.getElement().waitFor({state: 'visible'});
        return this.getElement();
    }

    public async click() {
        const element = await this.waitForVisible();
        return element.click();
    }

    public async waitForExist() {
        await this.getElement().waitFor({state: 'attached'});
    }
}