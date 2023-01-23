import { CyElement } from './../../helpers/element';
import { DefaultPage } from "./defaultPage";

export class JoinPage extends DefaultPage {
    public readonly emailPhoneButton = new CyElement('[data-slot="signup-email-form.button"]');
}
