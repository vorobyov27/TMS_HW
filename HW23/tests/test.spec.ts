import { expect } from '@playwright/test';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { test } from '../pageObject/hooks/fixtures/openUrl'
import { Page } from '../pageObject/pageFactory/pages';


test.describe("Test suite", async () => {
    test('Basic homepage elements', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await expect(mainPage.primeNewsBlock.isDisplayed).resolves.toBeTruthy();
        await expect(mainPage.vacanciesBlock.isDisplayed).resolves.toBeTruthy();
        await expect(mainPage.companiesBlock.isDisplayed).resolves.toBeTruthy();
        await expect(mainPage.salariesBlock.isDisplayed).resolves.toBeTruthy();
        await expect(mainPage.insightBlock.isDisplayed).resolves.toBeTruthy();
    });

    test('Open news item from Home page', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await mainPage.newsItemPrimary.click();

        const newsItemPage = await PageFactory.getPage(Page.NewsItem);
        await expect(newsItemPage.articleHeader.isDisplayed).resolves.toBeTruthy();
    });

    test('Open vacancies page from Header', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await mainPage.navBarVacanciesLink.click();

        const jobsPage = await PageFactory.getPage(Page.Jobs)
        await expect(jobsPage.vacanciesPopup.isDisplayed).resolves.toBeTruthy();
    });

    test('Open companies page from Header', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await mainPage.navBarAccountLink.click();

        const companiesPage = await PageFactory.getPage(Page.Companies);
        await expect(companiesPage.companiesFilter.isDisplayed).resolves.toBeTruthy();
    });

    test.only('Open login page from Header', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await mainPage.navBarAccountLink.click();

        const authPage = await PageFactory.getPage(Page.Auth);
        await expect(authPage.nameField.isDisplayed).resolves.toBeTruthy();
        await expect(authPage.passField.isDisplayed).resolves.toBeTruthy();
        await expect(authPage.submitBtn.isDisplayed).resolves.toBeTruthy();
    });
});
