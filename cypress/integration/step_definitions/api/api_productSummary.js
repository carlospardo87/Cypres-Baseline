/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When('product summary number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductSummary(resToken, productNum)
  })
})

Then('product summary response should be successful', (key, value ) => {
  cy.get('@getProductSummary').then((response) => {
    expect(response.body[0].divisionNumber).to.be.not.null
    expect(response.body[0].brand).to.be.not.null
    expect(response.body[0].productDescLong).to.be.not.null
    expect(response.body[0].productDescTxtl).to.be.not.null
    expect(response.body[0].salesPackSize).to.be.not.null
    expect(response.body[0].productNumber).to.be.not.null
    expect(response.body[0]._id).to.be.not.null
  })
})










