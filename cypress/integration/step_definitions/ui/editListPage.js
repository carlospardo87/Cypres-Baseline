/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import EditListPage from '../../../support/pages/EditListPage';

When('should be able to check and uncheck the radio element', () => {
  new EditListPage().checkRadioButton()
})

When('should be able to select {string} items', (itemTotal) => {
  new EditListPage().selectMultipleRadioButton(itemTotal)
})

When('should be able to see the green footer if 1 or more product are selected', () => {
  new EditListPage().checkGreenFooter()
})


When("should be able to navigate through the groups",  () => {
new EditListPage().checkGroups()
})

Then("should be able to see {string} Products Selected",  (itemsTotal) => {
  new EditListPage().checkTotalProductSelected(itemsTotal)
});

Then("should be able to see other options {string}",  (arrOptions) => {
  new EditListPage().checkOptions(arrOptions)
});

Then("should be able to click on option {string}",  (option) => {
  new EditListPage().clickOptionByName(option)
});


Then("should be able to see {string} modal",  (option) => {
  new EditListPage().checkModalAppears()
});

Then("should be able to see {string} products selected",  (itemsTotal) => {
  new EditListPage().getAmountOfSelectedProducts(itemsTotal)
});


Then("should be able to click on item {string}",  (itemProductSelect) => {
  new EditListPage().clickOnItemByName(itemProductSelect)
});

Then("should be able to see: Where do you want to {string} this product?",  (optionName) => {
  new EditListPage().checkModalOption(optionName)
});


Then("should be able to select where do you want to {string} this product?",  (optName) => {
  new EditListPage().clickFirstOption()
});

Then("should be able to see button {string} disabled",  (btnName) => {
  new EditListPage().checkBtnDisabled()
});


Then("should be able to see button {string} enabled",  (btnName) => {
  new EditListPage().checkBtnEnabled()
});


Then("should be able to {string} button {string}",  (option, btnName) => {
  new EditListPage().clickBtnSelectAll(option, btnName)
});


When("should be able to add a group to the bottom of the groups",  () => {
  new EditListPage().clickBtnAddGroup()
});


When("enters a new group name {string}",  (newGroupName) => {
  new EditListPage().enterGroupName(newGroupName)
});

Then("should be able to see error {string}",  (errorMsg) => {
  new EditListPage().checkErrorMessage(errorMsg)
});

Then("should be able to see green checkmark circle enabled",  () => {
  new EditListPage().checkGreenCheckmarkCircle();
});


Then("should be able to see red close circle enabled",  () => {
  new EditListPage().checkRedCloseCircle();
});


Then("should be able to click on green checkmark circle",  () => {
  new EditListPage().clickGreenCheckmarkCircle();
});


afterEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})
