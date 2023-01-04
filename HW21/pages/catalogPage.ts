export class catalogPage {

    static get pageTitle() {
        return '//*[@class="catalog-navigation__title"]'
    }

    static get catalogNavItem() {
        return '//*[@class="catalog-navigation-classifier__item "]'
    }

    static get catalogBarItem() {
        return '//*[@class="catalog-bar__item"]'
    }

    static get footerLink() {
        return '//*[@class="footer-style__item"]'
    }
}