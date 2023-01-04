describe('Testing Drive2ru', () => {
  beforeEach(() => {
    cy.visit('https://www.drive2.ru');
  })
  
  it('Open feature auto item - check header.', () => {
    cy.get('[data-ym-target="root_screen_experience"][href*="kia"]').click()
    cy.get('.x-title').should('be.visible').should('contain','KIA')
  })

  it('Filter - hide ShowMore button after click on ShowMore', () => {
    cy.get('button[data-action="filter.full"]').click()
    cy.get('button[data-action="filter.full"]').should('not.be.visible')
  })

  it('Filter - hide ShowMore button after switch radiobutton', () => {
    cy.contains('Все марки').click()
    cy.get('button[data-action="filter.full"]').should('not.be.visible')
  })

  it('Search and check result.', () => {
    cy.performSearch('audi');
    cy.get('[data-ym-target="sitesearch-results-click"] [class*="item__header"]').eq(0).should('contain','Audi')
    cy.screenshot()
  })

  it('Open registration page.', () => {
    cy.get('[href*="/signup"]').click()
    cy.get('[data-slot="signup-email-form.button"]').should('be.visible')
    cy.url().should('contain','/signup')
  })

  it('Open Login - xpath selectors.', () => {
    cy.xpath('//*[data-testid="topbar.login"]')
    cy.get('[data-slot="signup-email-form.button"]').should('be.visible')
    cy.url().should('contain','/signup')
  })
})