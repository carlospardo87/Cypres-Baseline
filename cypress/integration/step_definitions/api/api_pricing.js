/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When('product pricing number {string} was requested with refresh token', (productNum) => {
  cy.get('@getRefreshToken').then((resToken) => {
    cy.getProductPricing(resToken, productNum)
  })
})

When('product pricing number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductPricing(resToken, productNum)
  })
})

Then('product pricing response should be successful', () => {
  cy.get('@getProductPricing').then((response) => {
    expect(response.body.messageDetail.productList[0].eachPrice).to.be.not.null
    expect(response.body.messageDetail.productList[0].priceUom).to.be.not.null
    expect(response.body.messageDetail.productList[0].unitPrice).to.be.not.null
    expect(response.body.messageDetail.productList[0].productNumber).to.be.not.null
  })
})












