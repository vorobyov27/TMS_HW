import CommonPage from './commonPage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends CommonPage {

    afishaLink = `[href*='afisha/new/city'][class*='link']`
    loginButton = `[class*="loginButton"]`
    filmsLink = `//*[contains(@class,"film-page")]//*[contains(@href,"hd.kinopoisk.ru")]`
    hdBlock = `[id*="hd-showcase-block"]`


    public open () {
        return super.open('');
    }
}

export default new MainPage();