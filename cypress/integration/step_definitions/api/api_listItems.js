/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When("requesting ListItems API", function (customer,divisionNro, departmentNro) {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getListItems(resToken, customer,divisionNro, departmentNro)
  })
});













