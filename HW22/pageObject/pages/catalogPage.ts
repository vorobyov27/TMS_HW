import { By } from 'selenium-webdriver';
import { DefaultPage } from './defaultPage';
import { TextLabel } from '../../framework/elements/textLabel';

export class CatalogPage extends DefaultPage {
    public readonly pageTextTitle = new TextLabel(By.xpath('//*[@class="catalog-navigation__title"]'));
    public readonly openedItemTitle = new TextLabel(By.css('[class*="catalog-masthead__title"]'))
}