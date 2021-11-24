import {Then, And} from 'cypress-cucumber-preprocessor/steps';

import ListDetailsPage from '../../../support/pages/ListDetailsPage';
import ListsPage from '../../../support/pages/ListsPage';


And('should be able to see product descriptions', () => {
  new ListDetailsPage().checkCardElements(new ListDetailsPage().array_descriptionCards, /\w+/)
})

And('should be able to see product brand names in capital letters', () => {
  new ListDetailsPage().checkCardElements(new ListDetailsPage().array_brandNames, /[A-Z]/)
})

And("should be able to see pack size contains {string}", (packSizeList)=> {
  new ListDetailsPage().getPackSizeContains(new ListDetailsPage().array_packSize, packSizeList)

});
And('should be able to see the quantity boxes', function () {
  new ListDetailsPage().checkVisibilityOf(new ListDetailsPage().array_priceContainer)
});


And('should be able to {string}:{string}', (attr, value) => {
  cy.get(`*input[${attr}='${value}']`).should('exist')
});

And("should be able to see the product prices contains $", () => {
  new ListDetailsPage().checkCardPrices(/\$+(\d{1,2})+(.\d{1,2})/)
  //new ListDetailsPage().checkCardPrices(/\$+(\d{1,2})+(.\d{1,2})+( CS)/)
});


When('should be able to see the group of list is ascending',  ()=> {
  new ListDetailsPage().checkAscendingOrder()
});

And('should be able to enter a total of products {string}', (inputItems)=> {
    new ListDetailsPage().fillInputItems(inputItems)
});

And("should be able to see {string} products in the cart on {string} page", (carItems, pageName) =>{
  new ListDetailsPage().checkCartItems(carItems)
});

And("should be able to click the card",  () => {
  new ListDetailsPage().clickProductCard()
});

Then("should be able to see product number into the URL",  ()=> {
  new ListDetailsPage().checkUrlContain();
});

Then('should be able to see the product numbers contains \#',  ()=> {
  new ListDetailsPage().checkProductNumbers(/#+(\d{1,7}$)/)
});

Then("should be able to see the header title contain {string}", (headerTitle) =>{
  new ListDetailsPage().checkListDetailsPageTitle(headerTitle)
});

And("should be able to see the loading spinner appears with text {string}",(spinnerText) => {
  new ListsPage().checkLoadingSpinnerIfExist(spinnerText)
});

Then("should be able to see the correct Order Total for {string} products", (totalProd) => {
  new ListDetailsPage().checkTotalPrice(totalProd);
});

Then("should be able to see {string} total Cases in total order section", (totalCases) => {
  new ListDetailsPage().checkTotalCases(totalCases)
});

