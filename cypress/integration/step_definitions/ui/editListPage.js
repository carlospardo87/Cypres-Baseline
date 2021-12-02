/// <reference types="Cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import EditListPage from '../../../support/pages/EditListPage';
import ListsPage from "../../../support/pages/ListsPage";


When('should be able to check and uncheck the radio element', () => {
  new EditListPage().checkRadioButton()
})

When('should be able to select {string} items', (itemTotal) => {
  new EditListPage().saveProductCardInformation()
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

Then("should be able to select Group {string} and Submit",  (groupName) => {
  new EditListPage().clickByGroupName(groupName)
  new EditListPage().clickBtnSubmit()
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
  cy.get(new EditListPage().msg_errorGroup).scrollIntoView().should('exist')
  new EditListPage().checkErrorMessage(new EditListPage().msg_errorGroup, errorMsg)
});

Then("should be able to see green checkmark circle enabled",  () => {
  new EditListPage().checkGreenCheckmarkCircle();
});


Then("should be able to see red close circle enabled",  () => {
  new EditListPage().checkRedCloseCircle();
});


Then("should be able to click on {string} checkmark circle",  (colorCheckmark) => {
  new EditListPage().clickCheckmarkCircle(colorCheckmark);
});

Then("should be able to dropdown the ellipsis menu and click on option {string}",  (optionMenu) => {
  new EditListPage().saveProductCardInformation()
  new EditListPage().clickOnEllipsisAndOption(optionMenu)
});

Then("should be able to click option {string} in a discontinued product",  (optionMenu) => {
  new EditListPage().clickProductOptionByText(optionMenu)
});

Then("should be able to see ellipsis option menu {string}",  (optionMenu) => {
  new EditListPage().verifyEllipsisOptionMenu(optionMenu)
});

Then("should be able to click on product option",  () => {
  new EditListPage().clickProductCardEllipsis()
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
  global.randomNumber = randomNumber.toString()
  let newGroupName = newListName+randomNumber

  cy.log('====>>>> '+newGroupName)

    new EditListPage().enterNewListName(newGroupName);
    cy.log('-----> Click on Submit Button <----')
    new EditListPage().clickOnSubmitButton();
    cy.log('-----> Wait for spinner completed <----')
    new ListsPage().checkLoadingSpinnerIfExist('')
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

  let groupText = Cypress.$(`[groupname='${groupName}'] p`).text()
  let groupUpdate  =   Number(groupText.replace(/[(]/, '').replace(/[)]/, '')) + 1
  global.addingProducts = groupUpdate
  console.log(`=== Current total products on ${groupName} is: ${groupText} adding one is : ${groupUpdate}`)


  cy.get('.is-checked > .original-product-card').drag(`[groupname='${groupName}']`, {force: true})
});


Then("should be able to drag {string} product and drop within the same group",  () => {
  //new EditListPage().savingCurrentProducts()
  cy.get('span:nth-of-type(2) .original-product-card').drag('span:nth-of-type(3) .original-product-card', {force: true, timeout:1000})

});

Then("should be able to drag {string} product and drop on itself",  () => {
  cy.get('.is-checked > .original-product-card').drag('.is-checked > .original-product-card', {force: true, timeout:1000})
});


Then("should be able to click on group {string} and {string}",  (groupNumber, optionMenu) => {

  global.groupName  = Cypress.$('.button-content > span').eq(1).text()

  cy.log('--->Click on button group <---')
  cy.clickElement(`button:nth-of-type(${groupNumber}) > .button-content`, 0)

  cy.log('--->Click on ellipsis to show dropdown menu to edit groups <---')
  cy.get('ion-grid.md > :nth-child(1) > .item > ion-icon.md').click({force: true})
  cy.wait(250)

  cy.log('--->Click on dropdown menu option <---')
  cy.xpath(`//ion-item[.='${optionMenu}']`)
      .should('be.visible').click()
});


Then("should be able to click on group {string}", (groupNumber) => {

  let groupText = Cypress.$(`[groupname='${groupNumber}'] p`).text()
  let groupUpdate  =   Number(groupText.replace(/[(]/, '').replace(/[)]/, '')) - 1
  global.subtractingProduct = groupUpdate
  console.log(`=== Current total products on ${groupNumber} is: ${groupText} subtracting one is : ${groupUpdate}`)

  cy.log('--->Click on button group <---')
  //cy.clickElement(`button:nth-of-type(${groupNumber}) > .button-content`, 0);
  cy.xpath(`//span[contains(.,'${groupNumber}')]`).click()
});

Then("should be able to enter product notes", () => {

  cy.get('.native-textarea').type('Texting modal on expand product view, entering random notes to add notes to the product')
});


Then("should be able to click on text link {string}", (textLink) => {
  cy.clickElement('.quick-view-more-details', 0)
});


Then('should be able to see product card order number',  ()=> {
  cy.shouldElement('.quick-view-other-info > p', 0, 'contain.text', global.productNumber)
});


Then('should be able to see product card description',  ()=> {
  cy.shouldElement('.quick-view-subtitle-txt', 0, 'contain.text', global.productDescription)
});


Then('should be able to see product card price',   ()=> {
  cy.shouldElement('.quick-view-product-cases > span', 0, 'contain.text', global.productPrice)
});

Then('should be able to see product detail page',   ()=> {
  let pdNumber = global.productNumber.toString().replace("#", "");
  cy.url().should('include', `/products/${pdNumber}`)
});


Then('should be able to enter {string} on quantity box',    (value)=> {
  cy.get("[placeholder='0']")
      .clear()
      .type(value)
      .should('have.value', value)
      .clear()
      .should('have.value', '0')
});


