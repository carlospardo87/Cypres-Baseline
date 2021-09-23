/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When('requesting customers API', (productNum) => {
    cy.get('@getAuthToken').then((resToken) => {
        cy.getCustomers(resToken)
    })
})


Then('customers response body should be successful', () => {
    cy.get('@getCustomers').then((response) => {
        expect(response.body[0].customerNumber).match(/^\d+$/, 'should be a number')
        expect(response.body[0].divisionNumber).match(/^\d+$/, 'should be a number')
        expect(response.body[0].address1).match(/^\w+/,'should be a string')
        expect(response.body[0].customerName).match(/^\w+/, 'should be a string')
        expect(response.body[0]._id).match(/^\w+/, 'should be a string')
    })
})
