import { Link } from './../link';
import { DefaultElement } from "../defaultElement";
import { Button } from "../button";
import { Label } from '../label';
import { Elements } from './elements';

export class ElementsManager {
    public static getElement(locator: string, element: Elements.Button): Button;
    public static getElement(locator: string, element: Elements.Link): Link;
    public static getElement(locator: string, element: Elements.Label): Label;
    public static getElement(locator: string, element: Elements, frameLocator?: string): DefaultElement {
        switch (element) {
            case Elements.Button:
                return new Button(locator);
            case Elements.Link:
                return new Link(locator);
            case Elements.Label:
                return new Label(locator);
            default:
                throw new Error(`Elements manager is not implemented for ${element}`);
        }
    }
}
