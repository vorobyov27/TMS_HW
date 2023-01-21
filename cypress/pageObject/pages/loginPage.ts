import { CyElement } from './../../helpers/element';
import { DefaultPage } from "./defaultPage";

export class LoginPage extends DefaultPage {
    public readonly loginField = new CyElement('[id="login"]');
}