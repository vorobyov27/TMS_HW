import { ChainablePromiseElement } from 'webdriverio';
import { logger } from '../../helpers/logger';

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
        logger.info(`wait ${selector} selector`)
        const element = await $(selector)
        logger.info(`wait ${selector} successful`)
        logger.info(`wait for clickable ${selector} selector`)
        await element.waitForClickable();
        logger.info(`click ${selector} selector`)
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