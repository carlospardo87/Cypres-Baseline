/// <reference types="Cypress" />

import {Given, When} from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../../../support/pages/LoginPage';

When("{string} user navigates to USF and logs in with {string} and {string}", (userType, uname, password) => {
  cy.fixture('login').then( (login) => {
    new LoginPage().navigateWithViewPort(login.device)
    new LoginPage().loggingIn(uname, password)
  })
});


When("logs in with valid credentials", () => {
  cy.fixture('login').then( (login) => {
    new LoginPage().loggingIn(login.internal.user, login.internal.password)
  })
});

When("External user logs in with valid credentials", () => {
  cy.fixture('login').then( (login) => {
    new LoginPage().loggingIn(login.external.user, login.external.password)
  })
});


Given("User navigates to USF with {string}", (device) => {
  new LoginPage().navigateWithViewPort(device)
});


Given("{string} user navigates to USF and logs in", (userType) => {

  if (userType === 'Internal') {
    cy.fixture('login').then( (login) => {
      new LoginPage().navigateWithViewPort(login.device)
      new LoginPage().loggingIn(login.internal.user, login.internal.password)
    })
  }else {
    cy.fixture('login').then( (login) => {
      new LoginPage().navigateWithViewPort(login.device)
      new LoginPage().loggingIn(login.external.user, login.external.password)
    })
  }

});
