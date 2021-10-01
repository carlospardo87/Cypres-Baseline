/// <reference types="Cypress" />

import {Given, When} from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../../../support/pages/LoginPage';

When("{string} user logs in with valid credentials {string} and {string}", (userType, uname, password) => {
  new LoginPage().loggingIn(uname, password)
});


Given("User navigates to USF with {string}", (device) => {
  new LoginPage().navigateWithViewPort(device)
});
