import { CyElement } from './../../helpers/element';
import { DefaultPage } from "./defaultPage";

export class HomePage extends DefaultPage {
    public readonly kiaItem = new CyElement('[data-ym-target="root_screen_experience"][href*="kia"]');
    public readonly seeAllList = new CyElement('button[data-action="filter.full"]');
    public readonly loginButton = new CyElement('[data-testid="topbar.login"]');
    public readonly registrationButton = new CyElement('[href*="/signup"]');
    public readonly seeAllSwitcher = new CyElement('label:nth-of-type(2) > .c-radiogroup__button');
}
