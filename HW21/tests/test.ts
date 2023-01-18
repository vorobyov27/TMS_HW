import { WebElement } from "selenium-webdriver";
import { mainPage } from "../pages/mainPage";
import { catalogPage } from "../pages/catalogPage";
import { checks } from "../services/checks";
import { DriverManager } from "../services/driver-manager";
import { elements } from "../services/elements";
import { BrowserHelper } from "../services/browser";

describe('HW21 test suite', () => {
    beforeEach(async () => {

    })

    afterEach(() => {
        BrowserHelper.close();
        BrowserHelper.closeTab();
    })

    test('Check header links.', async () => {
        const expectedTabs: string[] = ['https://catalog.onliner.by/','https://www.onliner.by/','https://ab.onliner.by/','https://r.onliner.by/pk','https://s.onliner.by/tasks','https://baraholka.onliner.by/','https://forum.onliner.by/']
        BrowserHelper.goTo('https://www.onliner.by');
        BrowserHelper.waitForPageLoad();
        const headerTab = await elements.getElementByXpath(mainPage.headerTab)
        elements.waitForDisplayed(headerTab);
        const headerTabsArray = await elements.getElementsByXpath(mainPage.headerTab)

        let flag = await checks.compareElementArrayHref(headerTabsArray, expectedTabs);
        expect(flag).toBe(true);
    })

    test('Check header tab text.', async () => {
        const expectedTabs: string[] = ['Каталог','Новости','Автобарахолка','Дома и квартиры','Услуги','Барахолка','Форум']
        DriverManager.driver.get('https://www.onliner.by');
        BrowserHelper.waitForPageLoad();
        const headerTabsArray = await elements.getElementsByXpath(mainPage.headerTab)

        let flag = await checks.compareElementArrayText(headerTabsArray, expectedTabs);
        expect(flag).toBe(true);
    })

    test('Check catalog page - categories tab.', async () => {
        const expectedArr: string[] = ['Onlíner Prime','Электроника','Компьютеры и сети','Бытовая техника','Стройка и ремонт','Дом и сад','Авто и мото', 'Красота и спорт', 'Детям и мамам', 'Работа и офис'];
        const expectedTitle: string = "Каталог";

        DriverManager.driver.get('https://catalog.onliner.by/');
        BrowserHelper.waitForPageLoad();
        const catalogPageTitle: WebElement = await elements.getElementByXpath(catalogPage.pageTitle);
        const catalogNavItems: WebElement[] = await elements.getElementsByXpath(catalogPage.catalogNavItem);
        expect(await catalogPageTitle.getText()).toContain(expectedTitle);

        let flag = await checks.compareElementArrayText(catalogNavItems, expectedArr);
        expect(flag).toBe(true);
    })

    test('Check catalog bar - bar tabs.', async () => {
        const expectedArr: string[] = ['Новогодние елки','Санки','Автомобильные аккумуляторы','Щетки стеклоочистителей','Увлажнители воздуха','Автомобильные шины','Кофе', 'Электрочайники и термопоты', 'Моторные масла'];
        DriverManager.driver.get('https://catalog.onliner.by/');
        BrowserHelper.waitForPageLoad();
        const catalogBarItems: WebElement[] = await elements.getElementsByXpath(catalogPage.catalogBarItem);

        let flag = await checks.compareElementArrayText(catalogBarItems, expectedArr);
        expect(flag).toBe(true);
    })

    test('Check footer link texts.', async () => {
        const expectedArr: string[] = ['О компании','Контакты редакции','Реклама','Тарифы','Вакансии','Манифест','Пользовательское соглашение', 'Публичные договоры', 'Политика конфиденциальности', 'Поддержка пользователей', 'Правила возврата'];
        DriverManager.driver.get('https://catalog.onliner.by/');
        BrowserHelper.waitForPageLoad();
        const footerLinks: WebElement[] = await elements.getElementsByXpath(catalogPage.footerLink);

        let flag = await checks.compareElementArrayText(footerLinks, expectedArr);
        expect(flag).toBe(true);
    })
});
