/// <reference types="Cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
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


Then("should be able to see {string} modal",  () => {
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


Then("should be able to select where do you want to {string} this product?",  () => {
  new EditListPage().clickFirstOption()
});

Then("should be able to see button {string} disabled",  () => {
  new EditListPage().checkBtnDisabled()
});


Then("should be able to see button {string} enabled",  () => {
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
  new EditListPage().checkErrorMessage(new EditListPage().msg_errorGroup, errorMsg)
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

Then("should be able to dropdown the ellipsis menu and click on option {string}",  (optionMenu) => {
  new EditListPage().clickOnEllipsisAndOption(optionMenu)
});

Then("should be able to see the {string} modal",  (modalTitle, newListName) => {
  new EditListPage().checkModalTitle(modalTitle, newListName)
});

Then("should be able to click on the Submit button",  () => {
  new EditListPage().clickOnSubmitButton()
});


Then("should be able to enter list name ,click Submit and see list name error {string}",  (errorListName, datatable) => {
  datatable.hashes().forEach((row) => {
    new EditListPage().enterNewListName(row.newListName)
    new EditListPage().clickOnSubmitButton()
    new EditListPage().checkErrorMessage(new EditListPage().msg_errorListName, errorListName)
  });
});

Then("should be able to see the edit options list",  (datatable) => {
  cy.clickElement(new EditListPage().ellipsisMenuIcon, 0)
  datatable.hashes().forEach((row) => {
    new EditListPage().checkOptionsList(row.dropdownOptions)
  });
});




Then("should be able to enter list name {string} and click Submit button",  (newListName) => {
    new EditListPage().enterNewListName(newListName)
    new EditListPage().clickOnSubmitButton()
});



Then("should be able close the modal",  () => {
  new EditListPage().clickOnCloseIcon()
});

Then("should be able to revert the changes on {string} with the previous name {string}",  (actionName, revertListName) => {

  cy.removeDomElement('#ion-overlay-2')

  cy.log('should click on ellipsis icon and choose the option')
  new EditListPage().clickOnEllipsisAndOption(actionName)
  cy.log('should see the modal title')
  new EditListPage().checkModalTitle(actionName)
  cy.log('should enter the list name and click Submit button')
  new EditListPage().enterNewListName(revertListName)
});


Then("should be able to click on the Submit button and close the modal",  () => {

  cy.log('should click on button Submit button')
  new EditListPage().clickOnSubmitButton()

  cy.log('should close the modal after click on button Submit')
  cy.shouldElement(new EditListPage().editListNameModal, 0, 'not.exist')
});


Then("option list should contains {string} items",  (numberOfItems) => {
  new EditListPage().checkTotalItems(numberOfItems)
});





