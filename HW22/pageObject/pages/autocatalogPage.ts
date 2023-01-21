import { By } from 'selenium-webdriver';
import { DefaultPage } from './defaultPage';
import { TextLabel } from '../../framework/elements/textLabel';

export class AutocatalogPage extends DefaultPage {
    public readonly autoCatPageTitle = new TextLabel(By.xpath('//h1[contains(@class,"title_big-alter")]'));
}