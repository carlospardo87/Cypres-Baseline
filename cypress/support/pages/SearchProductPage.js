'use strict'

export default class SearchProductPage {

    constructor(){
        this.radioButtons = '#usf-product-card > .ng-valid'
        this.errorCreateNewList = '.list-name-taken-message'
        this.alertMessage = '.toast-container'
    }

    clickElementIfContain(sectionName) {
        cy.wait(1000);
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

    validateToastMsg() {
        cy.document({log:false}).then(($document) => {
            const documentResult = $document.querySelectorAll('.green-toast')

            if (documentResult.length) {
                cy.get('.green-toast').shadow().find('.toast-top').then($el => {
                    cy.log('====>'+$el.text())
                    expect($el.text(), 'Alert message was displayed properly: ').to.be.include('Success! You have added 1 product to AutCypressAddProducts.')
                })
            } else {
                cy.get('.red-toast').shadow().find('.toast-top').then($el => {
                    cy.log('====>'+$el.text())
                    expect($el.text(), 'Alert message was displayed properly: ').to.be.include('Could not add products at this time, please try again.')
                })
            }
        })
    }

    selectListGroupPosition(select, option) {
        cy.xpath(`//ion-item[contains(.,'${select}')]`).click()

        let i = 0
        cy.get('.list-label').each($el =>{
            if ($el.text().includes(option)) {
                cy.clickElement('.mat-radio-inner-circle', i)
                return
            }
            i++
        })
    }
}
