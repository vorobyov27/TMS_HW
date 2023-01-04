declare global {
    namespace Cypress {
        interface Chainable {
            performSearch(text: string): Cypress.Chainable<Interception>;
        }
    }
}

export {};