/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import EditListPage from '../../../support/pages/EditListPage';

When('should be able to check and uncheck the radio element', () => {
  new EditListPage().checkRadioButton()
})

When("should be able to navigate through the groups",  () => {
new EditListPage().checkGroups()
})


afterEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})
