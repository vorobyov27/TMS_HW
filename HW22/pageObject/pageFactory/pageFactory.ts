import { Pages } from './pages';
import { MainPage } from '../pages/mainPage';
import { CatalogPage } from '../pages/catalogPage';
import { AutocatalogPage } from '../pages/autocatalogPage';
import { SearchPopup } from '../pages/searchPopup';

export class PageFactory {
    public static getPage(pageName: Pages.mainPage): MainPage;
    public static getPage(pageName: Pages.catalog): CatalogPage;
    public static getPage(pageName: Pages.autoCatalog): AutocatalogPage;
    public static getPage(pageName: Pages.searchPopup): SearchPopup;
    public static getPage(pageName: Pages) {
        switch (pageName) {
            case Pages.mainPage:
                return new MainPage();
            case Pages.catalog: 
                return new CatalogPage();
            case Pages.autoCatalog:
                return new AutocatalogPage();    
            case Pages.searchPopup:
                return new SearchPopup();    
            default:
                throw new Error(`Page factory is not implemented for ${pageName} `)
        }
    }
}