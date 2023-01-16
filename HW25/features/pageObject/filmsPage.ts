import CommonPage from './commonPage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FilmsPage extends CommonPage {
    
    promoTitle = `[class*="OnBoardingMainSection_header"]`
}

export default new FilmsPage();
