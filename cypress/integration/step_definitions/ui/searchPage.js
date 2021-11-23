

/// <reference types="Cypress" />

import {Given, When} from "cypress-cucumber-preprocessor/steps";
import SearchProductPage from "../../../support/pages/SearchProductPage";



When("should be able to click on section {string}", (sectionName) => {
  new SearchProductPage().clickElementIfContain(sectionName)
});

When("should be able to see the green footer", () => {
  cy.get('.sticky-action-bar').scrollIntoView().should('exist')
  cy.wait(1000)
});


When("should be able to select {string} products", (totalProd) => {
  new SearchProductPage().checkRadioElement(totalProd)
});

When("should be able to see selected {string} products", (itemsTotal) => {
  cy.contains('.selection-count', `${itemsTotal} Products Selected`)
});

When("should be able to click on {string}", (btnName) => {
  new SearchProductPage().clickForceElementIfContain(btnName)
});

When("should be able to click button {string}", (btnName) => {
  cy.clickElement('.search-alternative-block > .md', 0)
});

When("should be able to see enabled {string}", (btnName) => {
  cy.get('.add-to-list-button').invoke('attr', 'class').should('not.contain', 'button-disabled')
  cy.clickElement('.add-to-list-button', 0)
});


When("should be able to see the modal {string}", (modalTitle) => {
  cy.shouldElement('.modal-wrapper > .ion-page', 0, 'be.visible');
  cy.contains(modalTitle)
});


When("should be able to click on {string} and select {string}", (select, option) => {
  cy.xpath(`//ion-item[contains(.,'${select}')]`).click()

  const listLength = Cypress.$('list-label').length

  for (let i = 0; i < listLength ; i++) {
    if (Cypress.$('list-label').eq(i).text() === option) {
      cy.clickElement('.mat-radio-outer-circle', i)
      break
    }
  }
});



When("should be able to click on product card", () => {
  cy.reload()
  cy.clickElementForce('.usf-product-card-desc-heading-txt', 0)
});

When("should be able to see alert message {string}", (alertMsg) => {
  new SearchProductPage().validateToastMsg(alertMsg)
});



