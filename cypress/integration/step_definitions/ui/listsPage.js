/// <reference types="Cypress" />

import {When, Then } from 'cypress-cucumber-preprocessor/steps'
import ListsPage from '../../../support/pages/ListsPage';



And("should be able to see the title contain {string}", (textExpected) => {
  new ListsPage().elementHaveText(new ListsPage().listsTitle, textExpected)
});


And("should be able to see the customer drop down {string}", (customerInfo) => {
  new ListsPage().checkIfCustomerExistOnDpList(customerInfo)
});

And("should be able to see button Create Order", () => {
  cy.shouldElement(new ListsPage().btn_createOrder, 2, 'be.visible')

});
And("should be able to see button My Lists", () => {
  cy.shouldElement(new ListsPage().btn_createOrder, 3, 'be.visible')

});
And("should be able to see button Search Box and icon magnifier", () => {
  new ListsPage().elementIsVisible(new ListsPage().icon_searchBar)
  new ListsPage().elementIsVisible(new ListsPage().searchBar)

});
And("should be able to see Create a New List button", () => {
  new ListsPage().elementIsVisible(new ListsPage().btn_createNewList)
});

Then("should be able to see customer verification icon", () => {
  new ListsPage().elementIsVisible(new ListsPage().icon_dpCheckMarkCircle)
});

Then("{string} should be able to see each section name", (userType) => {
  new ListsPage().checkSectionHeader(userType);
});

Then("should be able to see column description per section", () => {
  new ListsPage().checkColumnDescriptions();
});


Then("should be able to see in each section {string}", function (expectedText) {
  new ListsPage().checkNoListMessage(expectedText)
});

Then('should be able to see list description per section',  ()=> {
new ListsPage().checkListInformation()
});

Then('should see the number of products per section {string}', function (listItemProducts) {
  new ListsPage().checkProductItemsInformation(listItemProducts)
});

When("goes to section {string} and clicks on list {string}", (sectionList,listToClick) =>{
  new ListsPage().clickCustomerList(listToClick)
});

And("should be able to see the loading spinner with text {string}",(spinnerText) => {
  new ListsPage().checkLoadingSpinnerIfExist(spinnerText)
});

// This step does not wait for the View All List request
And("should be able to see the loading spinner",() => {
  let spinnerText = 'One moment please while we cook up your lists.'
  new ListsPage().checkLoadingSpinnerIfExist(spinnerText)
});

Then('should be able to sort the lists by {string}',  (sortMenuOption)=> {
  new ListsPage().clickAndSortMenuOption(sortMenuOption)
});

When("goes to section {string} and edits the first list", (sectionName) => {
  new ListsPage().clickIconEllipsis(new ListsPage().array_ellipsisIcon)
});

When("goes to list {string} and clicks menu options", (listName) => {
  new ListsPage().clickIconEllipsisByListName(listName)
});

Then('should be able to click on {string} option',  (optionName)=> {
  new ListsPage().clickOptionEditList(optionName)
});


Then("should be able to see the popup options menu",  ()=> {
  new ListsPage().elementIsVisible(new ListsPage().editListPopup)
});

Then("should be able to see the list items contains {string}",  (arrayItems)=> {
  new ListsPage().checkEditListPopup(arrayItems)
});

When("goes to {string} and clicks {string} button", (listName, optionMenu) => {
  new ListsPage().clickOnEditList(listName, optionMenu)
});

