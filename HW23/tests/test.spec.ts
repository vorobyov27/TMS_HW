import { test, expect } from '@playwright/test';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { Pages } from '../pageObject/pageFactory/pages';
import { Browser } from '../framework/helpers/browser';

test.describe("Test suite", async () => {
    test.only('test1', async ({ page }) => {
        // const browser = new Browser(page);
        // await browser.openUrl("https://devby.io/");
        
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.goto("https://devby.io/");
        // const newsLink = await mainPage.locator('[class*="navbar__row"] [href="https://devby.io/news"]');
        // newsLink.click();
        //await page.goto("https://devby.io/");
        //await page.locator('[class*="navbar__row"] [href="https://devby.io/news"]').click();
        mainPage.clickNewsHeader();
        await expect(page.getByText('Лента')).toBeVisible();
    });
});
