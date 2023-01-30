import { PageFactory } from "../pageObject/pageFactory/factory";
import { Page } from "../pageObject/pageFactory/pages";

describe('Testing Drive2ru', () => {
  beforeEach(() => {
    cy.visit('https://www.drive2.ru');
  })
  
  it('Open feature auto item - check header.', () => {
    const homePage = PageFactory.getPage(Page.Home)
    const autoItemPage = PageFactory.getPage(Page.AutoItem)
    homePage.kiaItem.el.click()
    autoItemPage.autoTitle.el.should('be.visible').and('contain','KIA')
  })

  it('Filter - hide ShowMore button after click on ShowMore', () => {
    const homePage = PageFactory.getPage(Page.Home)
    homePage.seeAllList.el.click();
    homePage.seeAllList.el.should('not.be.visible')
  })

  it('Filter - hide ShowMore button after switch radiobutton', () => {
    const homePage = PageFactory.getPage(Page.Home)
    homePage.seeAllSwitcher.el.click()
    homePage.seeAllList.el.should('not.be.visible')
  })

  it('Search and check result.', () => {
    const searchResultPage = PageFactory.getPage(Page.SearchResult)
    cy.performSearch('audi');
    searchResultPage.searchResultAudi.el.eq(0).should('contain','Audi')
    cy.screenshot()
  })

  it('Open registration page.', () => {
    const homePage = PageFactory.getPage(Page.Home)
    const joinPage = PageFactory.getPage(Page.Join)
    homePage.registrationButton.el.click()
    joinPage.emailPhoneButton.el.should('be.visible')
    cy.url().should('contain','/signup')
  })

  it('Open Login page.', () => {
    const homePage = PageFactory.getPage(Page.Home)
    const loginPage = PageFactory.getPage(Page.Login)
    homePage.loginButton.el.click()
    loginPage.loginField.el.should('be.visible')
    cy.url().should('contain','/reception')
  })
})