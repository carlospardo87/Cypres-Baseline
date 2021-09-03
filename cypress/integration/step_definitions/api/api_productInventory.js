/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'



When('product inventory number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductInventory(resToken, productNum)
  })
})


Then('product inventory response should be successful', (key, value ) => {
  cy.get('@getProductInventory').then((response) => {
    expect(response.body[0].divisionNumber).to.be.not.null
    expect(response.body[0].eachConversionFactor).to.be.not.null
    expect(response.body[0].productNumber).to.be.not.null
    expect(response.body[0].updateDtm).to.be.not.null
    expect(response.body[0]._id).to.be.not.null
  })
})












