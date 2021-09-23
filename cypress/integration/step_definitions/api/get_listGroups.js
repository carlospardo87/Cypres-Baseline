/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


When('requesting ListGroup API', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getListGroups(resToken)
  })
})


When("requesting ListGroup API with customer:{string}, divisionNro:{string} and departmentNro:{string}", function (customer,divisionNro, departmentNro) {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getListGroupsWithCustomerDetails(resToken, customer,divisionNro, departmentNro)
  })
});











