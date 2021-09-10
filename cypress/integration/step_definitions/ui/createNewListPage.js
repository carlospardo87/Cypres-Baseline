/// <reference types="Cypress" />

import {When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CreateNewListPage from '../../../support/pages/CreateNewListPage';



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

And("should be able to see the {string} button enabled", (btnName) => {
  new CreateNewListPage().checkButtonEnable()
});

And("should be able to close create list modal", () => {
  new CreateNewListPage().closeCreateNewListModal()
});


And("should be able to see error message {string}", (errorMessage) => {
  new CreateNewListPage().checkErrorMessage(errorMessage)
});



afterEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})
