import { Page } from '@playwright/test';

export class DefaultPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }
  
  // async click(element: Locator) {
  //   await element.click();
  // }

  // async locator(selector: string): Promise<Locator> {
  //   return this.page.locator(selector)
  // }
}