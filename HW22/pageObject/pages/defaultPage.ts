import { DriverManager } from './../../framework/helpers/driverManager';
import { By } from "selenium-webdriver";
import { TextField } from "../../framework/elements/textField";
import { Button } from "../../framework/elements/button";
import { Browser } from '../../framework/helpers/browser';

export class DefaultPage {
    protected driver = DriverManager.driver;
    public readonly searchTextField = new TextField(By.css('[class*="fast-search__input"]'));
    public readonly headerLogo = new Button(By.css('[class*="top-logo"]'));
    public readonly headerTabCatalog = new Button(By.css('[href="https://catalog.onliner.by"][class*="navigation__link"]'));
    public readonly headerTabAutocatalog = new Button(By.css('[href="https://ab.onliner.by"][class*="navigation__link"]'));
}