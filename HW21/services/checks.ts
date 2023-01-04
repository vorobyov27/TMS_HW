import { WebElement } from "selenium-webdriver";

export class checks {
    static async compareElementArrayHref(elementArray: WebElement[], expectedArray: string[]): Promise<boolean> {
        for (let i = 0; i <elementArray.length; i++) {
            let tempText: string = await elementArray[i].getAttribute('href');
            if ( tempText !== expectedArray[i]) {
                console.log(`${tempText} is not equal to ${expectedArray[i]}`)
                return false;
            }
        }
        return true;
    }

    static async compareElementArrayText(elementArray: WebElement[], expectedArray: string[]): Promise<boolean> {
        for (let i = 0; i <elementArray.length; i++) {
            let tempText: string = await elementArray[i].getText();
            if ( tempText !== expectedArray[i]) {
                console.log(`${tempText} is not equal to ${expectedArray[i]}`)
                return false;
            }
        }
        return true;
    }
}