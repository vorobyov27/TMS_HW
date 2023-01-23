import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class NewsItemPage extends DefaultPage {
    public readonly articleHeader = ElementsManager.getElement('[class="article__container"] h1', Elements.Label);

    constructor() {
        super('[class="article__header"] [class="article__container"]');
    }

}