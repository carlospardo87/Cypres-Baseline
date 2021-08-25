/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

/////////////COMMON/////////
Given('authorization token was requested', () => {
  cy.getAuthToken()
  cy.checkStatusCode('@getAuthToken', 200)
})

Given('refresh token was requested with customer: {string} and division: {string}', (customerNro, divisionNro) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getRefreshTokenByCustomer(resToken, customerNro,divisionNro)
  })
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
  cy.get('@getProductSummary').then((response) => {
    expect(response.body[0]).to.have.property(key,value)
  })
})

////////////PRICING//////


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








