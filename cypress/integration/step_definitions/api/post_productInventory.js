/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'



When('product inventory number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductInventory(resToken, productNum)
  })
})


Then('product inventory response body should be successful', (key, value ) => {
  cy.get('@getProductInventory').then((response) => {
    expect(response.body[0].divisionNumber).match(/^\d+$/, 'should be a number')
    expect(response.body[0].eachConversionFactor).match(/^\d+$/, 'should be a number')
    expect(response.body[0].productNumber).match(/^\d+$/, 'should be a number')
    expect(response.body[0].updateDtm).match(/^\w+/, 'should be a string')
    expect(response.body[0]._id).match(/^\w+$/, 'should be a string')
  })
})












