import { browser } from '../framework/helpers/browser';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { Pages } from '../pageObject/pageFactory/pages';

describe('Search feature tests', () => {
    beforeEach(async () => {
        await browser.openUrl("https://www.onliner.by/")
    });

    afterEach(async () => {
        await browser.close();
    });

    test('Search valid item - check item name', async () => {
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.searchTextField.waitForDisplayed();
        await mainPage.searchTextField.clearAndType('Kia');
        mainPage.switchToFrame();

        const searchPopup = PageFactory.getPage(Pages.searchPopup);

        await searchPopup.popupBody.waitForDisplayed();
        await searchPopup.resultItem.waitForDisplayed();
        await searchPopup.resultName.waitForDisplayed();

        const actualItemName = await searchPopup.resultName.getText();
        expect(actualItemName).toContain('Kia');
    })

    test('Search valid item - open offers', async () => {
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.searchTextField.waitForDisplayed();
        await mainPage.searchTextField.clearAndType('Kia');
        mainPage.switchToFrame();

        const searchPopup = PageFactory.getPage(Pages.searchPopup);
        await searchPopup.popupBody.waitForDisplayed();
        await searchPopup.resultItemPrice.waitForDisplayed();
        await searchPopup.resultItemPrice.click();
        mainPage.switchToWindow();

        const catalogPage = PageFactory.getPage(Pages.catalog);
        await catalogPage.openedItemTitle.waitForDisplayed();
        const actualItemName = await catalogPage.openedItemTitle.getText();
        expect(actualItemName).toContain('Kia');
    })

    test('Search valid item - close search popup', async () => {
        const mainPage = PageFactory.getPage(Pages.mainPage);
        await mainPage.searchTextField.waitForDisplayed();
        await mainPage.searchTextField.clearAndType('Kia');
        mainPage.switchToFrame();

        const searchPopup = PageFactory.getPage(Pages.searchPopup);
        await searchPopup.popupBody.waitForDisplayed();
        await searchPopup.closeButton.waitForDisplayed();
        await searchPopup.closeButton.click();

        mainPage.switchToWindow();
        await mainPage.searchTextField.waitForDisplayed();
    })
})  
