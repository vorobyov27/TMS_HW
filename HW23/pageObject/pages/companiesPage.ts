import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class CompaniesPage extends DefaultPage {
    public readonly companiesFilter = ElementsManager.getElement('.widget-companies-fiter', Elements.Label);

    constructor() {
        super('.widget-companies-list');
    }
}