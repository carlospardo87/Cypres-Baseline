/// <reference types="Cypress" />

import {Given, When} from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../../../support/pages/LoginPage';

When("{string} user logs in with valid credentials {string} and {string}", (userType, uname, password) => {
  new LoginPage().loggingIn(uname, password)
});


Given("User navigates to USF with {string}", (device) => {
  new LoginPage().navigateWithViewPort(device)
});

When("goes to URL {string}", (url) => {
  cy.intercept({method: 'GET', url:'/list-domain-api/v1/list*',}).as('editList')

 // new LoginPage().goToUrl(url)
  cy.get('.md.ion-color.ion-color-success.icon-small.hydrated').eq(2).should('be.visible').click({force: true} )
  cy.xpath('//ion-label[.=\'Edit List\']').should('be.visible').click({force: true})
});



afterEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})
