Cypress.Commands.add('performSearch', (query) => {
    cy.intercept(`**/search?text=${query}**`).as('search_request');
    cy.get('[class="x-search__input"]').type(`${query}{enter}`)
    return cy.wait('@search_request');
});