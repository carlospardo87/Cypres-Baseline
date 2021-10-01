/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When("requesting ListItems API", function () {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getListItems(resToken)
  })
});













