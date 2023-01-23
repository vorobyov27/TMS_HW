import { CyElement } from './../../helpers/element';
import { DefaultPage } from "./defaultPage";

export class SearchResultPage extends DefaultPage {
    public readonly searchResultAudi = new CyElement('[data-ym-target="sitesearch-results-click"] [class*="item__header"]');
}