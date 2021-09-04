/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

When('requesting Lists API', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getLists(resToken)
  })
})











