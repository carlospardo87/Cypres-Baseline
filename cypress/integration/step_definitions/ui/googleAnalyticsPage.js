/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../../support/pages/LoginPage';
const analytics_config = require('../../../fixtures/google-analytics.json')


Given("User goes to USF with {string}",(device) => {
  //cy.intercept({ hostname: 'www.google-analytics.com' }, { statusCode: 503 })
  Cypress.on('window:before:load', (win) => {
    win.ga = cy.stub().as('ga')
});

  //--  new LoginPage().navigateWithViewPort(device)

});


Then("goes to Home page and check google analytics",() => {
  cy.visit(analytics_config.pages.home,{timeout:3000})
  //cy.wait(2000)

  cy.get('@ga')
    .should('be.calledWith', 'create', analytics_config.gaTrackerId)
    .and('be.calledWithMatch', /.+send/, 'pageview')
    .and('be.calledWithMatch', /.+ec:addImpression/)

});

Then("goes to View All List page and check google analytics",() => {
  cy.visit(`${analytics_config.pages.home}${analytics_config.pages.allListPage}`)
  cy.get('@ga').should('be.calledWithMatch', /.+ec:setAction/, "detail")

  cy.get('#addToCart').click()
  cy.get('#checkout').click()

  cy.get('@ga')
    .should('be.calledWithMatch', /.+ec:setAction/, "checkout")
});


Then("goes to List Details page and check google analytics",() => {
  cy.visit(`${analytics_config.pages.home}${analytics_config.pages.listDetailsPage}`)
  cy.get('@ga').should('be.calledWithMatch', /.+ec:setAction/, "detail")

  cy.get('#addToCart').click()
  cy.get('#checkout').click()

  cy.get('@ga')
    .should('be.calledWithMatch', /.+ec:setAction/, "checkout")
});

//  To get windows.dataLayer
/*cy.window().then((window) => {
  cy.log(window.dataLayer)
  assert.isDefined(window.dataLayer,
    'window.dataLayer is defined');*/

/*assert.isDefined(
  window.dataLayer.find(x => x.event === "gtm.js"),
  "GTM is loaded");
})*/



