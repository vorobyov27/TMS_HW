import { TestPage } from './../../../framework/helpers/pageSingleton';
import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('https://devby.io');
    TestPage.getInstance(page);
    await use(page);
  },
});
