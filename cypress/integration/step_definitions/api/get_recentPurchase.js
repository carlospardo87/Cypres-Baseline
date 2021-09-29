/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When('requesting recent purchase API', (productNum) => {
    cy.get('@getAuthToken').then((resToken) => {
        cy.getRecentPurchase(resToken)
    })
})


Then('recent purchase response body should be successful', () => {
    cy.get('@getRecentPurchase').then((response) => {
        expect(response.body[0].customerNumber).match(/^\d+$/, 'should be a number')
        expect(response.body[0].divisionNumber).match(/^\d+$/, 'should be a number')
        expect(response.body[0].productNumber).match(/^\d+$/, 'should be a number')
        expect(response.body[0].departmentNumber).match(/^\d+$/, 'should be a number')
        expect(response.body[0]._id).match(/^\w+/,'should be a string')
    })
})
