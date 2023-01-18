import { Page as PageType } from './pages';
import { MainPage } from '../pages/mainPage';
import { JobsPage } from '../pages/jobsPage';
import { NewsItemPage } from '../pages/newsItemPage'
import { CompaniesPage } from '../pages/companiesPage';
import { AuthPage } from '../pages/authPage';

export class PageFactory {
    public static getPage(pageType: PageType.Main): Promise<MainPage>;
    public static getPage(pageType: PageType.Jobs): Promise<JobsPage>;
    public static getPage(pageType: PageType.NewsItem): Promise<NewsItemPage>;
    public static getPage(pageType: PageType.Companies): Promise<CompaniesPage>;
    public static getPage(pageType: PageType.Auth): Promise<AuthPage>;
    public static getPage(pageType: PageType) {
        switch (pageType) {
            case PageType.Main:
                return new MainPage().waitForLoad();
            case PageType.Jobs: 
                return new JobsPage().waitForLoad(); 
            case PageType.NewsItem:
                return new NewsItemPage().waitForLoad();    
            case PageType.Companies:
                return new CompaniesPage().waitForLoad();
            case PageType.Auth:
                return new AuthPage().waitForLoad()   
            default:
                throw new Error(`Page factory is not implemented for ${pageType} `)
        }
    }
}