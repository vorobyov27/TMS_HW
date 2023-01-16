import CommonPage from './commonPage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AfishaPage extends CommonPage {
    
    myAfishaTab = `[class*="myBoardButton"]`

    public open () {
        return super.open('afisha/new');
    }
}

export default new AfishaPage();