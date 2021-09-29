/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When("requesting ListItemNotes API with customer:{string}, divisionNro:{string} and departmentNro:{string}", function (customer,divisionNro, departmentNro) {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getListItemNotesWithCustomerDetails(resToken, customer,divisionNro, departmentNro)
  })
});












