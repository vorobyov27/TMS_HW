import { Locator } from '@playwright/test';
import { DefaultPage } from './defaultPage';


export class MainPage extends DefaultPage {

    async clickNews() {
        await this.page.locator('[class*="navbar__row"] [href="https://devby.io/news"]').click();
    }

    public newsHeader() {
        return this.page.locator('[class*="navbar__row"] [href="https://devby.io/news"]');
    } 

    public async clickNewsHeader() {
        await this.newsHeader().click();
    }

    

}