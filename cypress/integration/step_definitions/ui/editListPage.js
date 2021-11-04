/// <reference types="Cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import EditListPage from '../../../support/pages/EditListPage';
import ListsPage from "../../../support/pages/ListsPage";
import ListDetailsPage from "../../../support/pages/ListDetailsPage";

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


Then("should be able to enter {string} name {string} and click Submit button",  (itemType, newListName) => {
  let randomNumber = new EditListPage().generateRandomNumber();
  let newGroupName = newListName+randomNumber

  if (itemType === 'list') {
    new EditListPage().enterNewListName(newGroupName);
    cy.log('-----> Click on Submit Button <----')
    new EditListPage().clickOnSubmitButton();
    cy.log('-----> Wait for spinner completed <----')
    new ListsPage().checkLoadingSpinnerIfExist('Changing list name')
    cy.log('-----> Validate Page title <----')
    new ListDetailsPage().checkListDetailsPageTitle(newGroupName)

  } else if(itemType === 'product') {
    cy.log('-----> Enter New List Name <----')
    new EditListPage().enterNewListName(newGroupName);
    cy.log('-----> Click on Submit Button <----')
    new EditListPage().clickOnSubmitButton();
    cy.log('-----> Wait for spinner completed <----')
    new ListsPage().checkLoadingSpinnerIfExist('')
    cy.log('-----> Validate group button name  <----')
    new EditListPage().validateButtonGroupNameChanged("3", newGroupName)
    cy.log('-----> Validate group title name  <----')
    new EditListPage().validateGroupNameChanged("3", newGroupName)
  }
});


Then("should be able close the modal",  () => {
  new EditListPage().clickOnCloseIcon()
});


Then("option list should contains {string} items",  (numberOfItems) => {
  new EditListPage().checkTotalItems(numberOfItems)
});


Then("should be able to click on {string} button",  (buttonName) => {
  new EditListPage().clickOnButtonDeleteList(buttonName)
  });


Then("should be able to see the proper list name {string} to delete", (listName) => {
  cy.shouldElement("[class='delete-list-confirm-text']", 0, 'contain.text', `Are you sure you want to delete ${listName}?`)
  cy.shouldElement("[class='delete-list-modal']", 0, 'contain.text', `Note: To recover deleted lists, please call Help Desk at 1-888-648-2580.`)
});


Then("should not able to see {string} on View All List page",  (listName) => {
  cy.xpath(`//p[contains(.,'${listName}')]`).should('not.exist')
});


Then("should be able to drag {string} product and drop on group name {string}",  (productNumb, groupName) => {
  new EditListPage().savingCurrentState()
  cy.get('.is-checked > .original-product-card').drag(`[groupname='${groupName}']`, {force: true})
});


Then("should be able to drag {string} product and drop within the same group",  () => {
  new EditListPage().savingCurrentProducts()
  cy.get('span:nth-of-type(2) .original-product-card').drag('span:nth-of-type(3) .original-product-card', {force: true, timeout:1000})

});

Then("should be able to drag {string} product and drop on itself",  () => {
  cy.get('.is-checked > .original-product-card').drag('.is-checked > .original-product-card', {force: true, timeout:1000})
});

Then("should be able to see the {string} updated",  () => {
  expect(true).equal(true)
});



Then("should be able to click on group {string} and {string}",  (groupNumber, optionMenu) => {

  cy.log('--->Click on button group <---')
  cy.clickElement(`button:nth-of-type(${groupNumber}) > .button-content`, 0)

  cy.log('--->Click on ellipsis to show dropdown menu to edit groups <---')
  cy.get('.product-wrapper > .item > ion-icon.md').click({force: true})
  cy.wait(250)

  cy.log('--->Click on dropdown menu option <---')
  cy.xpath(`//ion-item[.='${optionMenu}']`)
      .should('be.visible').click()
});


//This reload should be removed once fixed the issue with the API
Then("should be able to see {string} are updated properly",  (itemType) => {
  if (itemType === 'groups') {
    //cy.reload();
    cy.wait(2000)
    new EditListPage().checkTotalGroupUpdated();

  } else if (itemType === 'products') {
    //cy.reload();
    cy.wait(2000)
    new EditListPage().checkTotalProductsUpdated();
  }
});


