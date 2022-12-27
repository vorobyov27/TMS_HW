import { browser } from '../framework/helpers/browser';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { Pages } from '../pageObject/pageFactory/pages';

describe('Switch pages feature', () => {
    beforeEach(async () => {
        await browser.openUrl("https://www.onliner.by/")
    });

    afterEach(async () => {
        await browser.close();
    });

    test('Open catalog via header menu', async () => {
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.headerTabCatalog.waitForDisplayed();
        await mainPage.headerTabCatalog.click();

        const catalogPageItem = PageFactory.getPage(Pages.catalog);
        await catalogPageItem.pageTextTitle.waitForDisplayed();
        const actualText = await catalogPageItem.pageTextTitle.getText();
        const expectedText = 'Каталог';
        expect(actualText).toContain(expectedText);
    })

    test('Open autocatalog via header menu', async () => {
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.headerTabAutocatalog.waitForDisplayed();
        await mainPage.headerTabAutocatalog.click();

        const autocatalogPageItem = PageFactory.getPage(Pages.autoCatalog);
        await autocatalogPageItem.autoCatPageTitle.waitForDisplayed();
        const actualText = await autocatalogPageItem.autoCatPageTitle.getText();
        const expectedText = 'Автобарахолка';
        expect(actualText).toContain(expectedText);
    })
})