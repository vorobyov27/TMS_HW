import { HomePage } from './../pages/homePage';
import { JoinPage } from './../pages/joinPage';
import { LoginPage } from './../pages/loginPage';
import { SearchResultPage } from './../pages/searchResultPage';
import { AutoItemPage } from './../pages/autoItemPage';
import { Page as PageType } from "./pages";

export class PageFactory {
    public static getPage(pageType: PageType.Home): HomePage;
    public static getPage(pageType: PageType.Join): JoinPage;
    public static getPage(pageType: PageType.Login): LoginPage;
    public static getPage(pageType: PageType.SearchResult): SearchResultPage;
    public static getPage(pageType: PageType.AutoItem): AutoItemPage;
    public static getPage(pageType: PageType) {
        switch(pageType) {
            case PageType.Home:
                return new HomePage();
            case PageType.Join:
                return new JoinPage();
            case PageType.Login:
                return new LoginPage();
            case PageType.SearchResult:
                return new SearchResultPage();        
            case PageType.AutoItem:
                return new AutoItemPage();                         
            default:
                throw new Error(`Not implemented ${this.getPage.name} for ${pageType}`);
        }
    }
}