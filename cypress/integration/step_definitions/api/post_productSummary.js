/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When('product summary number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductSummary(resToken, productNum)
  })
})

Then('product summary response body should be successful', (key, value ) => {
  cy.get('@getProductSummary').then((response) => {
    expect(response.body[0].divisionNumber).match(/^\d+$/, 'should be a number')
    expect(response.body[0].brand).match(/^\w+/, 'should be a string')
    expect(response.body[0].productDescLong).match(/^\w+/, 'should be a string')
    expect(response.body[0].productDescTxtl).match(/^\w+/, 'should be a string')
    expect(response.body[0].salesPackSize).match(/^\w+/, 'should be a string')
    expect(response.body[0].productNumber).match(/^\d+$/, 'should be a number')
    expect(response.body[0]._id).match(/^\w+$/, 'should be a string')
  })
})










