import { ChainablePromiseElement } from 'webdriverio';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class CommonPage {

    headerMenu = `[class*='burger'][type='button']`;
    menuHomeOption = `[class*='dropdownMenu'] [href='/'][class*='currentPageLink']`;
    menuOpened = `[class*='rootActive'] [class*='dropdownOpen']`;
    menuAfishaOption = `[class*="dropdownMenu"] [href*="/lists/categories/movies/"]`
    menuOnliheCinemaOption = `[class*="dropdownMenu"] [href="https://hd.kinopoisk.ru/"]`
    menuMoviesOption = `[class*="dropdownMenu"] [href*="/lists/categories/movies/"]`
    menuMediaOption = `[class*="dropdownMenu"] [href="/media/"]`

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://www.kinopoisk.ru/${path}`)
    }

    public async waitAndClick (selector: string) {
        const element = await $(selector)
        await element.waitForClickable();
        await element.click()
    }

    public async waitForAppear (selector: string) {
        const element = await $(selector);
        await element.waitForDisplayed();
    }

    public async waitForDisappear (selector: string) {
        const element = await $(selector);
        await element.waitForDisplayed({ reverse: true });
    }

    public async scrollTo (selector: string) {
        const element = await $(selector);
        await element.waitForExist();
        await element.scrollIntoView();
    }
}