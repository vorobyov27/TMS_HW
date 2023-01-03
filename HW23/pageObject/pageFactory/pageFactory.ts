import { Page } from '@playwright/test';
import { Pages } from './pages';
import { MainPage } from '../pages/mainPage';
import { JobsPage } from '../pages/jobsPage';

export class PageFactory {
    static page: Page;

    constructor(page: Page) {
        PageFactory.page = page;
    }

    public static getPage(pageName: Pages.mainPage): MainPage;
    public static getPage(pageName: Pages.jobs): JobsPage;
    public static getPage(pageName: Pages) {
        switch (pageName) {
            case Pages.mainPage:
                return new MainPage(this.page);
            case Pages.jobs: 
                return new JobsPage(this.page); 
            default:
                throw new Error(`Page factory is not implemented for ${pageName} `)
                break;
        }
    }
}