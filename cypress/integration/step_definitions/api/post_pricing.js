/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When('product pricing number {string} was requested with refresh token', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductPricing(resToken, productNum)
  })
})

When('product pricing number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductPricing(resToken, productNum)
  })
})

Then('product pricing response body should be successful', () => {
  cy.get('@getProductPricing').then((response) => {

    expect(response.body.messageHeader.divisionNumber).match(/^\d+$/, 'should be a number')
    expect(response.body.messageHeader.customerNumber).match(/^\d+$/, 'should be a number')

    expect(response.body.messageDetail.productList[0].eachPrice).match(/^\w+$/, 'should be a string')
    expect(response.body.messageDetail.productList[0].unitPrice).match(/^\w+$/, 'should be a string')
    expect(response.body.messageDetail.productList[0].productNumber).match(/^\w+$/, 'should be a string')

  })
})












