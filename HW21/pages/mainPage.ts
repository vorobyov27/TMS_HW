export class mainPage {

    static get headerTab() {
        return '//*[@class="b-main-navigation"]//*[contains(@class,"b-main-navigation__link")]'
    }

    static get catalogTab() {
        return '[class = "b-main-navigation__link"][href = "https://catalog.onliner.by"]'
    }
}