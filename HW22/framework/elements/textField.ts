import { DefaultElement } from "./defaultElement";

export class TextField extends DefaultElement {
    public typeText(text: string) {
        return this.element.sendKeys(text);
    }

    public async clearAndType(text: string) {
        await this.element.clear();
        await this.typeText(text);
    }
}