/// <reference types="Cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../support/pages/HomePage';

When('I take a screenshot', () => {
  cy.screenshot()
})

And("clicks on My Lists button",() => {
  new HomePage().clickMyListButton()
});

When("goes to dropdown and selects customer {string}",(customerNumber) => {
  new HomePage().selectNewCustomer(customerNumber)
});


Then("lists page URL should contain {string}", (endToEnd) => {
  new HomePage().urlContain(endToEnd);
});

Then("should be able to see the proper URL on {string} page", (partialUrl) => {
  new HomePage().urlContainProductDetails(partialUrl);
})


And("clicks on My Lists button and handles the response",  () => {
  new HomePage().clickMyListButtonAndStubResponse()
});

When("goes to the page {string}", (browserToPage) => {
  new HomePage().navigateTo(browserToPage)
});

Then("should be able to see the banner at the top of the page",  () => {
  new HomePage().checkBannerCss()
});


afterEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

