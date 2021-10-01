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

Then('product pricing response body should contain {string}', (productNum) => {
  cy.get('@getProductPricing').then((response) => {

    expect(response.body.messageHeader.divisionNumber).match(/^\d+$/, 'DivisionNumber should be a number')
    expect(response.body.messageHeader.customerNumber).match(/^\d+$/, 'Customer Number should be a number')

    expect(response.body.messageDetail.productList[0].productNumber).to.be.equal(productNum, 'Product Number should be equal')
    expect(response.body.messageDetail.productList[0].eachPrice).match(/^\d+\.?\d*$/, 'Each Price should be a number')
    expect(response.body.messageDetail.productList[0].unitPrice).match(/^\d+\.?\d*$/, 'Unit Price should be a number')


  })
})












