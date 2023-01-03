import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome.js';
import { path } from 'chromedriver';

async function newReleasesContent() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://store.steampowered.com');
    while(!driver.executeScript('document.readyState === "complete"'));
    const items = await driver.findElements(By.xpath('//div[@id="tab_newreleases_content"]//a[contains(@href, "app")]'))

    for (let i = 0; i <= items.length; i++) {
        console.log(`${i}.Name: `+await items[i].findElement(By.xpath(`//*[@class="tab_item_name"]`)).getText())
        console.log("Genres: "+await items[i].findElement(By.xpath(`//*[@class="tab_item_top_tags"]`)).getText())
        console.log("Price: "+await items[i].findElement(By.xpath(`//*[@class="discount_final_price"]`)).getText())
        console.log("")
    }
    driver.quit();
}


newReleasesContent();