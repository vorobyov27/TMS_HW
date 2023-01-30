import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageObject/mainPage';
import AfishaPage from '../pageObject/afishaPage';
import FilmsPage from '../pageObject/filmsPage'
import { logger } from '../../helpers/logger';

const pages = {
    Main: MainPage,
    Afisha: AfishaPage,
    Films: FilmsPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
})

When(/^I click (\w+) on (\w+) page$/, async (element, page) => {
    const currentPage = pages[page];
    currentPage.waitAndClick(currentPage[element]);
});

Then(/^Element (\w+) appears on (\w+) page$/, async (element, page) => {
    const currentPage = pages[page];
    currentPage.waitForAppear(currentPage[element]);
});

Then(/^Element (\w+) is not displayed on (\w+) page$/, async (element, page) => {
    const currentPage = pages[page];
    logger.debug(`wait for disappear ${element}`)
    currentPage.waitForDisappear(currentPage[element]);
});

Then(/^I scroll to (\w+) element on (\w+) page$/, async (element, page) => {
    const currentPage = pages[page];
    currentPage.scrollTo(currentPage[element]);
});
