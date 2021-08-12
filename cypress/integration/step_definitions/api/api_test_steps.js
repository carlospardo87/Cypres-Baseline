/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

/////////////COMMON/////////
Given('authorization token was requested', () => {
  cy.getAuthToken()
  cy.checkStatusCode('@getAuthToken', 200)
})

///////////PRODUCT SUMMARY///////////

When('product summary number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductSummary(resToken, productNum)
  })
})

Then('product summary response should contain status {string}', (statusCode) => {
  cy.checkStatusCode('@getProductSummary', statusCode)
})

Then('product summary response should contain {string} : {string}', (key, value ) => {
  value == 'true' ? (value = true)  : value 
  value == 'false' ? (value = false)  : value

  cy.get('@getProductSummary').then((response) => {
    expect(response.body[0]).to.have.property(key,value)
  })
})

////////////PRICING//////


When('product pricing number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductPricing(resToken, productNum)
  })
})

Then('product pricing response should contain status {string}', (statusCode) => {
  cy.checkStatusCode('@getProductPricing', statusCode)
})

Then('product pricing response should contain {string} : {string}', (key, value ) => {
  cy.get('@getProductPricing').then((response) => {
    expect(response.body.messageDetail.productList[0]).to.have.property(key,value)
  })
})




////////////PRODUCT INVENTORY//////


When('product inventory number {string} was requested', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getProductInventory(resToken, productNum)
  })
})

Then('product inventory response should contain status {string}', (statusCode) => {
  cy.checkStatusCode('@getProductInventory', statusCode)
})

Then('product inventory response should contain {string} : {string}', (key, value ) => {
  cy.get('@getProductInventory').then((response) => {
    expect(response.body[0]).to.have.property(key,Number(value))
  })
})








