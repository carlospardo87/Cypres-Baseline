'use strict'

export default class SearchProductPage {

    constructor(){
        this.radioButtons = '#usf-product-card > .ng-valid'
        this.errorCreateNewList = '.list-name-taken-message'
        this.alertMessage = '.toast-container'
    }

    clickElementIfContain(sectionName) {
        cy.wait(1000)
        cy.contains(sectionName, {timeout: 30000}).then($el => {
            cy.wrap($el).scrollIntoView().should('exist')
            cy.wait(500)
            cy.highlightBorderElement($el, 'magenta')
            cy.wrap($el).click()
            cy.highlightBorderElement($el, 'transparent')
        });
    }

    clickForceElementIfContain(sectionName) {
        cy.contains(sectionName, {timeout: 30000}).then($el => {
            cy.wrap($el).scrollIntoView().should('exist')
            cy.wait(500)
            cy.highlightBorderElement($el, 'magenta')
            cy.wrap($el).click({force:true})
            cy.highlightBorderElement($el, 'transparent')
        });
    }

    checkRadioElement(totalProd) {
        for (let i = 0; i < Number(totalProd); i++) {
            cy.wait(1000)
            cy.get(this.radioButtons).eq(i).should('be.visible').click({force: true})
        }
    }

    validateToastMsg(alertMsg) {
        cy.get('#ion-overlay-4').shadow().find(this.alertMessage).then($el => {
            cy.log('====>'+$el.text())
            expect($el.text(), 'Alert message was displayed properly: ').to.be.include(alertMsg)
        });
    }
}
