import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class JobsPage extends DefaultPage {
    public readonly vacanciesPopup = ElementsManager.getElement('.wish-popup_show', Elements.Label);

    constructor() {
        super('//*[contains(@class,"wish-popup_show")]//*[contains(text(),"Вакансии")]');
    }
}