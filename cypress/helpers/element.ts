export class CyElement {
    protected readonly isXpath: boolean;

    constructor(protected readonly selector: string) {
        this.isXpath = selector.startsWith('//');
    }

    get el() {
        return this.isXpath ? cy.xpath(this.selector) : cy.get(this.selector);
    }
}