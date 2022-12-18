import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome.js';
import { path } from 'chromedriver';

async function addRemoveElPageTest() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/add_remove_elements/');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[href*="elementalselenium.com"]')).getText())
    console.log(await driver.findElement(By.css('[class="example"] button')).getAttribute('onclick'))
    driver.quit();
}

async function forgotPasswordTest() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/forgot_password');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[id ="email"]')).getAttribute('name'))
    console.log(await driver.findElement(By.css('[type="submit"]')).getText())
    driver.quit();
}

async function loginPageTest() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/login');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[for="username"]')).getText())
    console.log(await driver.findElement(By.css('[type="password"]')).getAttribute('id'))
    console.log(await driver.findElement(By.css('[class="radius"]')).getText())
    driver.quit();
}

async function fileUploaderTest() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/upload');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[id="file-upload"]')).getAttribute('name'))
    console.log(await driver.findElement(By.css('[id="file-submit"]')).getAttribute('value'))
    console.log(await driver.findElement(By.css('[id="drag-drop-upload"]')).getAttribute('class'))
    driver.quit();
}

async function tablesTest() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/tables');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.xpath('//table[@id="table1"]//tr[2]/td[4]')).getText())
    console.log(await driver.findElement(By.xpath('//table[@id="table1"]//tr[4]/td[6]/a[2]')).getAttribute('href'))
    console.log(await driver.findElement(By.xpath('//table[@id="table2"]//tr[4]/td[5]')).getAttribute('class'))
    driver.quit();
}

addRemoveElPageTest();
forgotPasswordTest();
loginPageTest();
fileUploaderTest();
tablesTest();