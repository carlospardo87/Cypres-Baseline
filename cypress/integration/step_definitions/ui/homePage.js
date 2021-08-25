/// <reference types="Cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../support/pages/HomePage';

When('I take a screenshot', () => {
  cy.screenshot()
})

And("clicks on My Lists button",() => {
  new HomePage().clickMyListButton()
});


Then("lists page URL should contain {string}", (endToEnd) => {
  new HomePage().urlContain(endToEnd);
});

Then("should be able to see the proper URL on {string} details page", (partialUrl) => {
  new HomePage().urlContainProductDetails(partialUrl);
})


And("clicks on My Lists button and updates list items count",() => {
  new HomePage().clickMyListButtonAndStubResponseItems('allListPage/mockAllListPage.json')
})

And("clicks on My Lists button and updates list items",() => {
  new HomePage().clickMyListButtonAndStubResponseItems('allListPage/mockAllListPageSortMenu.json')
})


And("clicks on My Lists button and handles the response",  () => {
  new HomePage().clickMyListButtonAndStubResponse()
});


afterEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

