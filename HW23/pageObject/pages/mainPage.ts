import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class MainPage extends DefaultPage {
    public readonly primeNewsBlock = ElementsManager.getElement('[class*="island__body_primenews"]', Elements.Label);
    public readonly vacanciesBlock = ElementsManager.getElement('[data-gtm-track="vacancies-informer"]', Elements.Label);
    public readonly salariesBlock = ElementsManager.getElement('[data-gtm-track="salaries-informer"]', Elements.Label);
    public readonly companiesBlock = ElementsManager.getElement('//*[@data-gtm-track="companies-informer"]', Elements.Label);
    public readonly insightBlock = ElementsManager.getElement('//*[@data-gtm-track="insight-informer"]', Elements.Label);

    public readonly newsItemPrimary = ElementsManager.getElement('[data-vr-contentbox="mainpage-primenews_long_1"]', Elements.Link);
    public readonly navBarVacanciesLink = ElementsManager.getElement('[class*="navbar__nav-item"][href*="jobs.devby"]', Elements.Link);
    public readonly navBarCompaniesLink = ElementsManager.getElement('[class*="navbar__nav-item"][href*="companies.devby"]', Elements.Link);
    public readonly navBarAccountLink = ElementsManager.getElement('[class="navbar__nav-item"][href*="id.devby"]', Elements.Link)

    constructor() {
        super('[data-vr-zone="mainpage"]');
    }

}