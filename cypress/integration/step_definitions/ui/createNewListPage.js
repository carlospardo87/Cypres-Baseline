/// <reference types="Cypress" />

import {When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CreateNewListPage from '../../../support/pages/CreateNewListPage';
import ListDetailsPage from "../../../support/pages/ListDetailsPage";



And('should create a list {string} if not exist', (listName) => {

  const allListNames = Cypress.$('.list-md .list-name').text()

  if (!allListNames.includes(listName)) {
    cy.log('-------> Creating a new Lists <-------')
    new CreateNewListPage().clickCreateNewList(listName);
    cy.log('-------> Checking modal to create list <-------')
    new CreateNewListPage().checkModalAppears()
    cy.log('-------> Entering list name <-------')
    new CreateNewListPage().enterListName(listName)
    cy.log('-------> Clicking button create <-------')
    new CreateNewListPage().clickButtonCreate()
    cy.log('-------> Validate List Details page open <-------')
    new ListDetailsPage().checkListDetailsPageTitle(listName)
    cy.log('-------> Returning back to View All Lists page <-------')
    cy.go('back')
    cy.wait(500)
  }
  cy.log('-------> List is already created <-------')

});

And('clicks on button {string}', (buttonName) => {
  new CreateNewListPage().clickCreateNewList(buttonName)
});


And("should be able to see create lists modal", () => {
  new CreateNewListPage().checkModalAppears()
});

And("should be able to enter list name {string}", (listName) => {
  new CreateNewListPage().enterListName(listName)

});
And("should be able to select your option {string}", (selectYourOption) => {
  new CreateNewListPage().clickSelectYourOption(selectYourOption)

});

And("should be able to select List Type {string}", (listType) => {
  new CreateNewListPage().clickOnListType(listType)
});

And("should be able to select {string} List Type", (totalListType) => {
  new CreateNewListPage().checkTotalOfListType(totalListType)
});



And("should be able to click on button {string}", (btnName) => {
  new CreateNewListPage().clickOnCreate(btnName)
});

And("should be able to see the {string} button enabled", () => {
  new CreateNewListPage().checkButtonEnable()
});

And("should be able to click {string} button", () => {
  new CreateNewListPage().clickButtonCreate()
});

And("should be able to close create list modal", () => {
  new CreateNewListPage().closeCreateNewListModal()
});


And("should be able to see error message {string}", (errorMessage) => {
  new CreateNewListPage().checkErrorMessage(errorMessage)
});

And("should be able to enter list name upto {string} characters", (maxCharacters) => {
  cy.get(`ion-input[maxlength='${maxCharacters}']`).should('exist')
});

