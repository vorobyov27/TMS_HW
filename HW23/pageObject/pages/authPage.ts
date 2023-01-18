import { DefaultPage } from './defaultPage';
import { ElementsManager } from '../../framework/elements/manager/elementManager';
import { Elements } from '../../framework/elements/manager/elements';

export class AuthPage extends DefaultPage {
    public readonly nameField = ElementsManager.getElement('[class="input-group"] [name="email"]', Elements.Label);
    public readonly passField = ElementsManager.getElement('[class="input-group"] [name="password"]', Elements.Label);
    public readonly submitBtn = ElementsManager.getElement('[class="main-body"] [type="submit"]', Elements.Button);

    constructor() {
        super('.auth-page');
    }
}