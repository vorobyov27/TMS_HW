import { By } from 'selenium-webdriver';
import { DefaultPage } from './defaultPage';
import { ModalPopup } from '../../framework/elements/modalPopup';
import { TextLabel } from '../../framework/elements/textLabel';
import { Button } from '../../framework/elements/button';

export class SearchPopup extends DefaultPage {
    public readonly popupBody = new ModalPopup(By.css('[class="search__results"]'));
    public readonly resultItem = new Button(By.css('[class*="result__item_product"]'));
    public readonly resultName = new TextLabel(By.css('[class*="result__item_product"] [class="product__title"]'));
    public readonly resultItemPrice = new TextLabel(By.css('[class*="price-value"]'));
    public readonly closeButton = new Button(By.css('[class="search__close"]'))
}