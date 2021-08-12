
import HomePage from '../../../support/PageObjectsR4/HomePage'
import LoginPage from '../../../support/PageObjectsR4/LoginPage'
import AllListPage from '../../../support/PageObjectsR4/AllListPage'
import ProductListPage from '../../../support/PageObjectsR4/ProductListPage'
import ProductDetailsPage from '../../../support/PageObjectsR4/ProductDetailsPage'

import { After, Before , Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";


const loginPage = new LoginPage()
const homePage = new HomePage()
const allListPage= new AllListPage()
const productList= new ProductListPage()
const productDetailsPage = new ProductDetailsPage()

Given(/^User selects  "([^"]*)" from customer dropdown$/, (customer) => {
	homePage.selectCustomer(customer)	
});

When(/^User clicks on my list button$/, () => {
	homePage.clickMyListButton()
});

Then(/^User should see all lists page$/, () => {
	allListPage.verifyAllListsPage()
});

When(/^User selects a "([^"]*)"$/, (list) => {
	allListPage.selectList(list)
});

Then(/^User should see lists of products$/, () => {
	productList.verifyProductList()
});

When(/^User selects "([^"]*)" from list page$/, (product) => {
	productList.selectProduct(product)
});

Then(/^User should be navigated to PDP page$/, () => {
	productDetailsPage.verifyPdpPage()
});

And(/^User should be able to see  product number$/, () => {
	productDetailsPage.verifyProductNumber()
});

And(/^User should be able to see  pack size$/, () => {
	productDetailsPage.verifyPackSize()
});

And(/^User should be able to see  quantity Field$/, () => {
	productDetailsPage.verifyQuantityField()
});

And(/^User should be able to see description of product$/, () => {
	productDetailsPage.verifyProductDescription()
});


Then(/^locally sourced icon should be displayed$/, () => {
	productDetailsPage.verifyLocallySourced()
});

Then(/^direct product icon should be displayed$/, () => {
	productDetailsPage.verifyDirectProductIcon()
});

And(/^no returns text should be displayed$/, () => {
	productDetailsPage.verifyNoReturnText()
});


Then(/^"([^"]*)" and "([^"]*)" inventory on hand number should be displayed as "([^"]*)"$/, (breakable,direct,inventoryQuantity) => {
	if(breakable == 'true'){
		productDetailsPage.verifyInventoryOnHandNumberBreakable(inventoryQuantity)
	}
	else{productDetailsPage.verifyInventoryOnHandNumber(inventoryQuantity)}
});



	
